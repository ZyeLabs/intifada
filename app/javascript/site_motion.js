import { animate } from "@motionone/dom/dist/animate/index.cjs.js"
import { stagger } from "@motionone/dom/dist/utils/stagger.cjs.js"

const MOBILE_BREAKPOINT = "(max-width: 760px)"
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"
const DEFAULT_THRESHOLD = 0.15
const MOTION_EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
const SOFT_EASE = "cubic-bezier(0.25, 0.1, 0.25, 1)"
const splitRegistry = new Map()

let pageCleanupFns = []
let globalMotionEventsBound = false
let navigationProgress = null
let navigationProgressBar = null
let navigationProgressTimer = null
let navigationProgressHideTimer = null
let navigationProgressValue = 0

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches

const isMobileViewport = () => window.matchMedia(MOBILE_BREAKPOINT).matches

const addPageCleanup = (fn) => {
  if (typeof fn === "function") pageCleanupFns.push(fn)
}

const clearAnimation = (animation) => {
  if (!animation) return

  if (typeof animation.stop === "function") {
    animation.stop()
    return
  }

  if (typeof animation.cancel === "function") {
    animation.cancel()
  }
}

const resetStyle = (element, properties) => {
  properties.forEach((property) => {
    element.style[property] = ""
  })
}

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const getNumericDataset = (element, key, fallback) => {
  const value = Number(element.dataset[key])
  return Number.isFinite(value) ? value : fallback
}

const wrapWords = (element) => {
  if (splitRegistry.has(element)) return splitRegistry.get(element).words
  if (element.children.length > 0) return []

  const originalHTML = element.innerHTML
  const originalAriaLabel = element.getAttribute("aria-label")
  const text = element.textContent || ""
  const fragments = text.split(/(\s+)/)
  const words = []

  element.textContent = ""
  element.setAttribute("aria-label", text.trim())

  fragments.forEach((fragment) => {
    if (!fragment) return

    if (/^\s+$/.test(fragment)) {
      element.appendChild(document.createTextNode(fragment))
      return
    }

    const word = document.createElement("span")
    word.className = "motion-word"
    word.setAttribute("aria-hidden", "true")
    word.textContent = fragment
    element.appendChild(word)
    words.push(word)
  })

  splitRegistry.set(element, { originalHTML, originalAriaLabel, words })
  return words
}

const restoreSplitElements = () => {
  splitRegistry.forEach((entry, element) => {
    element.innerHTML = entry.originalHTML

    if (entry.originalAriaLabel === null) {
      element.removeAttribute("aria-label")
    } else {
      element.setAttribute("aria-label", entry.originalAriaLabel)
    }
  })

  splitRegistry.clear()
}

const prepareSvgDraw = (element) => {
  const paths = Array.from(element.querySelectorAll("path, circle, rect, line, polyline, polygon, ellipse"))

  paths.forEach((path) => {
    if (path.dataset.motionDrawPrepared === "true") return

    try {
      const length = Math.max(path.getTotalLength(), 1)
      path.dataset.motionDrawPrepared = "true"
      path.dataset.motionDrawLength = `${length}`
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
      path.style.opacity = "1"
    } catch (_error) {
      path.dataset.motionDrawPrepared = "skip"
    }
  })

  addPageCleanup(() => {
    paths.forEach((path) => {
      delete path.dataset.motionDrawPrepared
      delete path.dataset.motionDrawLength
      path.style.strokeDasharray = ""
      path.style.strokeDashoffset = ""
      path.style.opacity = ""
    })
  })

  return paths.filter((path) => path.dataset.motionDrawPrepared === "true")
}

const prepareElement = (element) => {
  if (element.dataset.motionPrepared === "true") return

  const type = element.dataset.animate

  if (type === "word-stagger") {
    const words = wrapWords(element)
    words.forEach((word) => {
      word.style.opacity = "0"
      word.style.transform = "translate3d(0, 1.05em, 0)"
    })

    addPageCleanup(() => {
      words.forEach((word) => resetStyle(word, ["opacity", "transform"]))
    })
    element.dataset.motionPrepared = "true"
    return
  }

  if (type === "draw-in" || element.hasAttribute("data-svg-draw")) {
    prepareSvgDraw(element)
    element.dataset.motionPrepared = "true"
    return
  }

  if (type === "line-grow") {
    element.style.transformOrigin = "left center"
    element.style.transform = "scaleX(0)"
    element.dataset.motionPrepared = "true"
    addPageCleanup(() => resetStyle(element, ["transformOrigin", "transform"]))
    return
  }

  if (type === "clip-reveal") {
    element.style.clipPath = "inset(0 0 18% 0)"
    element.style.opacity = "0.001"
    element.style.transform = "scale(1.02)"
    element.dataset.motionPrepared = "true"
    addPageCleanup(() => resetStyle(element, ["clipPath", "opacity", "transform"]))
    return
  }

  const origin = element.dataset.animateOrigin
  const x =
    type === "fade-left" ? "-24px" : type === "fade-right" ? "24px" : "0px"
  const y =
    type === "scale-in" ? "0px" : origin === "top" ? "-24px" : type === "fade-up" ? "24px" : "0px"
  const scale = type === "scale-in" ? "0.92" : "1"

  element.style.opacity = "0.001"
  element.style.transform = `translate3d(${x}, ${y}, 0) scale(${scale})`
  element.dataset.motionPrepared = "true"
  addPageCleanup(() => resetStyle(element, ["opacity", "transform"]))
}

const animateElement = (element) => {
  if (element.dataset.motionAnimated === "true") return

  const type = element.dataset.animate
  const delay = getNumericDataset(element, "animateDelay", 0)
  let animation = null

  if (type === "word-stagger") {
    const words = wrapWords(element)
    animation = animate(
      words,
      {
        opacity: [0, 1],
        transform: ["translate3d(0, 1.05em, 0)", "translate3d(0, 0, 0)"]
      },
      {
        delay: stagger(0.035, { start: delay }),
        duration: 0.72,
        easing: MOTION_EASE,
        fill: "forwards"
      }
    )
  } else if (type === "draw-in" || element.hasAttribute("data-svg-draw")) {
    const paths = prepareSvgDraw(element)
    animation = animate(
      paths,
      { strokeDashoffset: 0 },
      {
        delay: stagger(0.06, { start: delay }),
        duration: 0.9,
        easing: MOTION_EASE,
        fill: "forwards"
      }
    )
  } else if (type === "line-grow") {
    animation = animate(
      element,
      { transform: ["scaleX(0)", "scaleX(1)"] },
      {
        delay,
        duration: 0.68,
        easing: MOTION_EASE,
        fill: "forwards"
      }
    )
  } else if (type === "clip-reveal") {
    animation = animate(
      element,
      {
        opacity: [0.001, 1],
        clipPath: ["inset(0 0 18% 0)", "inset(0 0 0% 0)"],
        transform: ["scale(1.02)", "scale(1)"]
      },
      {
        delay,
        duration: 0.9,
        easing: MOTION_EASE,
        fill: "forwards"
      }
    )
  } else {
    animation = animate(
      element,
      {
        opacity: [0.001, 1],
        transform: [element.style.transform || "translate3d(0, 24px, 0)", "translate3d(0, 0, 0) scale(1)"]
      },
      {
        delay,
        duration: 0.62,
        easing: SOFT_EASE,
        fill: "forwards"
      }
    )
  }

  element.dataset.motionAnimated = "true"
  addPageCleanup(() => {
    delete element.dataset.motionAnimated
    delete element.dataset.motionPrepared
    clearAnimation(animation)
  })
}

const observeElement = (element, callback) => {
  const threshold = getNumericDataset(element, "animateThreshold", DEFAULT_THRESHOLD)
  const once = element.dataset.animateOnce !== "false"
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        callback()
        if (once) observer.disconnect()
      } else if (!once) {
        delete element.dataset.motionAnimated
        prepareElement(element)
      }
    },
    { threshold }
  )

  observer.observe(element)
  addPageCleanup(() => observer.disconnect())
}

const prepareRevealGroups = () => {
  document.querySelectorAll("[data-animate-group='stagger']").forEach((group) => {
    const children = Array.from(group.children).filter((child) => !child.hidden)
    if (!children.length) return

    children.forEach((child) => {
      child.style.opacity = "0.001"
      child.style.transform = "translate3d(0, 24px, 0)"
    })

    addPageCleanup(() => {
      children.forEach((child) => resetStyle(child, ["opacity", "transform"]))
    })

    observeElement(group, () => {
      if (group.dataset.motionAnimated === "true") return

      const delay = getNumericDataset(group, "animateDelay", 0)
      const step = isMobileViewport() ? 0.05 : 0.07
      const animation = animate(
        children,
        {
          opacity: [0.001, 1],
          transform: ["translate3d(0, 24px, 0)", "translate3d(0, 0, 0)"]
        },
        {
          delay: stagger(step, { start: delay }),
          duration: 0.62,
          easing: SOFT_EASE,
          fill: "forwards"
        }
      )

      group.dataset.motionAnimated = "true"
      addPageCleanup(() => {
        delete group.dataset.motionAnimated
        clearAnimation(animation)
      })
    })
  })
}

const prepareRevealElements = () => {
  document.querySelectorAll("[data-animate]").forEach((element) => {
    prepareElement(element)
    observeElement(element, () => animateElement(element))
  })
}

const prepareArticleBodyMotion = () => {
  document.querySelectorAll(".article-detail__body h2, .article-detail__body h3, .article-detail__body blockquote").forEach((element) => {
    if (!element.dataset.animate) element.dataset.animate = "fade-up"
    if (!element.dataset.animateThreshold) element.dataset.animateThreshold = "0.1"
  })
}

const prepareParallax = () => {
  if (prefersReducedMotion() || isMobileViewport()) return

  const entries = Array.from(document.querySelectorAll("[data-parallax]"))
    .map((element) => {
      const target = element.querySelector("img, video, iframe") || element.firstElementChild
      if (!target) return null

      return {
        element,
        target,
        amount: element.dataset.parallax === "medium" ? 0.14 : 0.08
      }
    })
    .filter(Boolean)

  if (!entries.length) return

  let frameId = null

  const update = () => {
    frameId = null

    entries.forEach(({ element, target, amount }) => {
      const rect = element.getBoundingClientRect()
      const centerDelta = window.innerHeight / 2 - (rect.top + rect.height / 2)
      const offset = clamp(centerDelta * amount, -40, 40)

      target.style.setProperty("--si-parallax-offset", `${offset.toFixed(2)}px`)
    })
  }

  const requestUpdate = () => {
    if (frameId !== null) return
    frameId = window.requestAnimationFrame(update)
  }

  update()
  window.addEventListener("scroll", requestUpdate, { passive: true })
  window.addEventListener("resize", requestUpdate)
  addPageCleanup(() => {
    if (frameId !== null) window.cancelAnimationFrame(frameId)
    window.removeEventListener("scroll", requestUpdate)
    window.removeEventListener("resize", requestUpdate)
    entries.forEach(({ target }) => target.style.removeProperty("--si-parallax-offset"))
  })
}

const ensureNavigationProgress = () => {
  if (navigationProgress && navigationProgressBar) return

  navigationProgress = document.createElement("div")
  navigationProgress.className = "site-motion-progress"
  navigationProgress.setAttribute("aria-hidden", "true")
  navigationProgress.hidden = true

  navigationProgressBar = document.createElement("span")
  navigationProgressBar.className = "site-motion-progress__bar"
  navigationProgress.appendChild(navigationProgressBar)
  document.body.appendChild(navigationProgress)
}

const setNavigationProgress = (value) => {
  ensureNavigationProgress()
  navigationProgressValue = clamp(value, 0, 1)
  navigationProgressBar.style.transform = `scaleX(${navigationProgressValue})`
}

const clearNavigationTimers = () => {
  if (navigationProgressTimer) {
    window.clearInterval(navigationProgressTimer)
    navigationProgressTimer = null
  }

  if (navigationProgressHideTimer) {
    window.clearTimeout(navigationProgressHideTimer)
    navigationProgressHideTimer = null
  }
}

const startNavigationProgress = () => {
  ensureNavigationProgress()
  clearNavigationTimers()
  navigationProgress.hidden = false
  navigationProgress.classList.add("is-active")
  setNavigationProgress(prefersReducedMotion() ? 0.2 : 0.08)

  navigationProgressTimer = window.setInterval(() => {
    setNavigationProgress(navigationProgressValue + (navigationProgressValue < 0.45 ? 0.12 : 0.04))
    if (navigationProgressValue >= 0.82) clearNavigationTimers()
  }, 180)
}

const completeNavigationProgress = () => {
  if (!navigationProgress || !navigationProgressBar) return

  clearNavigationTimers()
  navigationProgress.classList.add("is-active")
  navigationProgress.hidden = false
  setNavigationProgress(1)

  navigationProgressHideTimer = window.setTimeout(() => {
    navigationProgress.classList.remove("is-active")
    navigationProgress.hidden = true
    setNavigationProgress(0)
  }, prefersReducedMotion() ? 40 : 260)
}

const bindNavigationProgress = () => {
  if (globalMotionEventsBound) return

  globalMotionEventsBound = true
  document.addEventListener("turbolinks:visit", startNavigationProgress)
  document.addEventListener("turbolinks:before-render", () => {
    if (!navigationProgress) return
    setNavigationProgress(Math.max(navigationProgressValue, 0.88))
  })
  document.addEventListener("turbolinks:load", completeNavigationProgress)
}

const ensureReadingProgress = () => {
  let progress = document.querySelector(".site-reading-progress")
  if (progress) return progress

  progress = document.createElement("div")
  progress.className = "site-reading-progress"
  progress.hidden = true
  progress.setAttribute("aria-hidden", "true")

  const bar = document.createElement("span")
  bar.className = "site-reading-progress__bar"
  progress.appendChild(bar)

  document.body.appendChild(progress)
  return progress
}

const prepareReadingProgress = () => {
  const target = document.querySelector("[data-progress-target='article']")
  const progress = ensureReadingProgress()
  const bar = progress.querySelector(".site-reading-progress__bar")

  if (!target || !bar) {
    progress.hidden = true
    return
  }

  let frameId = null

  const update = () => {
    frameId = null
    const headerOffset =
      Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--si-header-offset")) || 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const start = targetTop - headerOffset - 32
    const end = targetTop + target.offsetHeight - window.innerHeight + headerOffset + 96
    const ratio = end <= start ? 1 : clamp((window.scrollY - start) / (end - start), 0, 1)

    progress.hidden = false
    bar.style.transform = `scaleX(${ratio})`
  }

  const requestUpdate = () => {
    if (frameId !== null) return
    frameId = window.requestAnimationFrame(update)
  }

  update()
  window.addEventListener("scroll", requestUpdate, { passive: true })
  window.addEventListener("resize", requestUpdate)
  addPageCleanup(() => {
    if (frameId !== null) window.cancelAnimationFrame(frameId)
    window.removeEventListener("scroll", requestUpdate)
    window.removeEventListener("resize", requestUpdate)
    progress.hidden = true
    bar.style.transform = "scaleX(0)"
  })
}

export const teardownSiteMotion = () => {
  const cleanupFns = pageCleanupFns.slice().reverse()
  pageCleanupFns = []

  cleanupFns.forEach((fn) => {
    try {
      fn()
    } catch (_error) {
      // noop
    }
  })

  restoreSplitElements()
}

export const initializeSiteMotion = () => {
  teardownSiteMotion()
  bindNavigationProgress()
  prepareArticleBodyMotion()

  if (prefersReducedMotion()) {
    prepareReadingProgress()
    return
  }

  prepareRevealGroups()
  prepareRevealElements()
  prepareParallax()
  prepareReadingProgress()
}
