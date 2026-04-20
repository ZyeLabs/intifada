// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { initializeSiteMotion, teardownSiteMotion } from "../site_motion"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.documentElement.classList.add("has-js")

const shareStatusTimers = new WeakMap()
let responsiveHeaderFrameId = null
let responsiveHeaderEventsBound = false
const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",")

const clearShareStatusTimer = (statusNode) => {
  if (!statusNode) return

  const timer = shareStatusTimers.get(statusNode)
  if (timer) {
    window.clearTimeout(timer)
    shareStatusTimers.delete(statusNode)
  }
}

const setShareStatus = (statusNode, message) => {
  if (!statusNode) return

  clearShareStatusTimer(statusNode)
  statusNode.textContent = message
  statusNode.classList.toggle("is-active", Boolean(message))

  if (!message) return

  const timer = window.setTimeout(() => {
    statusNode.textContent = ""
    statusNode.classList.remove("is-active")
    shareStatusTimers.delete(statusNode)
  }, 2800)

  shareStatusTimers.set(statusNode, timer)
}

const copyText = async (text) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const input = document.createElement("textarea")
  input.value = text
  input.setAttribute("readonly", "readonly")
  input.style.position = "absolute"
  input.style.left = "-9999px"
  document.body.appendChild(input)
  input.select()
  document.execCommand("copy")
  document.body.removeChild(input)
}

const handleShareAction = async (container, action) => {
  const statusNode = container.querySelector("[data-share-status]")
  const shareUrl = container.dataset.shareUrl
  const shareTitle = container.dataset.shareTitle

  if (!shareUrl) return

  try {
    if (action === "native" && navigator.share) {
      await navigator.share({ title: shareTitle, url: shareUrl })
      setShareStatus(statusNode, "Shared.")
      return
    }

    await copyText(shareUrl)
    setShareStatus(statusNode, action === "native" ? "Link copied for sharing." : "Link copied.")
  } catch (error) {
    if (error && error.name === "AbortError") return

    setShareStatus(statusNode, "Unable to share right now.")
  }
}

const initializeArticleShare = () => {
  document.querySelectorAll("[data-share-url]").forEach((container) => {
    if (container.dataset.shareInitialized === "true") return

    container.dataset.shareInitialized = "true"

    container.querySelectorAll("[data-share-action]").forEach((button) => {
      button.addEventListener("click", () => {
        handleShareAction(container, button.dataset.shareAction)
      })
    })
  })
}

const initializeMobileNav = () => {
  document.querySelectorAll("[data-mobile-nav]").forEach((header) => {
    if (header.dataset.mobileNavInitialized === "true") return

    header.dataset.mobileNavInitialized = "true"

    const toggle = header.querySelector("[data-mobile-nav-toggle]")
    const drawer = header.querySelector("[data-mobile-nav-drawer]")
    const closeButton = header.querySelector("[data-mobile-nav-close]")
    const backdrop = header.querySelector("[data-mobile-nav-backdrop]")
    const drawerLinks = header.querySelectorAll("[data-mobile-nav-link]")
    const mediaQuery = window.matchMedia("(max-width: 760px)")
    const closeDuration = 240
    let lastFocused = null
    let isOpen = false
    let hideTimer = null

    if (!toggle || !drawer || !backdrop) return

    const getFocusable = () => Array.from(drawer.querySelectorAll(focusableSelector))

    const clearHideTimer = () => {
      if (hideTimer) {
        window.clearTimeout(hideTimer)
        hideTimer = null
      }
    }

    const hideDrawer = () => {
      drawer.hidden = true
      backdrop.hidden = true
    }

    const closeDrawer = ({ restoreFocus = true, immediate = false } = {}) => {
      if (!isOpen && !immediate) return

      isOpen = false
      clearHideTimer()
      toggle.setAttribute("aria-expanded", "false")
      header.classList.remove("is-nav-open")
      document.body.classList.remove("site-body--nav-open")

      if (immediate) {
        hideDrawer()
      } else {
        hideTimer = window.setTimeout(() => {
          hideDrawer()
          hideTimer = null
        }, closeDuration)
      }

      if (restoreFocus && lastFocused && document.contains(lastFocused)) {
        lastFocused.focus()
      }
    }

    const syncDesktopState = () => {
      if (mediaQuery.matches) return

      closeDrawer({ restoreFocus: false })
      drawer.hidden = true
      backdrop.hidden = true
      toggle.setAttribute("aria-expanded", "false")
    }

    const openDrawer = () => {
      if (!mediaQuery.matches || isOpen) return

      lastFocused = document.activeElement
      clearHideTimer()
      drawer.hidden = false
      backdrop.hidden = false
      window.requestAnimationFrame(() => {
        isOpen = true
        toggle.setAttribute("aria-expanded", "true")
        header.classList.add("is-nav-open")
        document.body.classList.add("site-body--nav-open")

        const focusable = getFocusable()
        ;(focusable[0] || drawer).focus()
      })
    }

    const onKeydown = (event) => {
      if (!isOpen) return

      if (event.key === "Escape") {
        event.preventDefault()
        closeDrawer()
        return
      }

      if (event.key !== "Tab") return

      const focusable = getFocusable()
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    toggle.addEventListener("click", () => {
      if (isOpen) {
        closeDrawer()
      } else {
        openDrawer()
      }
    })

    closeButton?.addEventListener("click", () => closeDrawer())
    drawerLinks.forEach((link) => {
      link.addEventListener("click", () => closeDrawer({ restoreFocus: false }))
    })
    backdrop.addEventListener("click", () => closeDrawer({ restoreFocus: false }))
    document.addEventListener("keydown", onKeydown)

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncDesktopState)
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(syncDesktopState)
    }

    document.addEventListener("turbolinks:before-cache", () => closeDrawer({ restoreFocus: false, immediate: true }))
    syncDesktopState()
  })
}

const initializeResponsiveHeader = () => {
  const syncHeaderState = () => {
    responsiveHeaderFrameId = null

    const isCondensed = window.scrollY > 24
    const root = document.documentElement
    document.querySelectorAll("[data-mobile-nav]").forEach((header) => {
      header.classList.toggle("is-header-condensed", isCondensed)
      root.style.setProperty("--si-header-offset", `${header.offsetHeight}px`)
    })
  }

  const requestSync = () => {
    if (responsiveHeaderFrameId !== null) return

    responsiveHeaderFrameId = window.requestAnimationFrame(syncHeaderState)
  }

  if (!responsiveHeaderEventsBound) {
    responsiveHeaderEventsBound = true
    window.addEventListener("scroll", requestSync, { passive: true })
    window.addEventListener("resize", requestSync)
  }

  requestSync()
}

const initializeMobileCollapses = () => {
  const mediaQuery = window.matchMedia("(max-width: 760px)")

  document.querySelectorAll("details[data-mobile-collapse]").forEach((details) => {
    const applyState = () => {
      details.open = !mediaQuery.matches
    }

    if (details.dataset.mobileCollapseInitialized !== "true") {
      details.dataset.mobileCollapseInitialized = "true"

      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", applyState)
      } else if (typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(applyState)
      }
    }

    applyState()
  })
}

const initializeMobileStickyCtas = () => {
  const mobileMedia = window.matchMedia("(max-width: 760px)")

  document.querySelectorAll("[data-mobile-sticky-context]").forEach((context) => {
    if (context.dataset.mobileStickyInitialized === "true") return

    context.dataset.mobileStickyInitialized = "true"

    const target = context.querySelector("[data-mobile-sticky-target]")
    const sticky = context.querySelector("[data-mobile-sticky-cta]")
    const hideDuration = 220
    let hideTimer = null

    if (!target || !sticky) return

    const applyVisibility = (visible) => {
      const shouldShow = mobileMedia.matches && visible
      if (hideTimer) {
        window.clearTimeout(hideTimer)
        hideTimer = null
      }

      if (shouldShow) {
        sticky.hidden = false
        window.requestAnimationFrame(() => {
          sticky.classList.add("is-visible")
        })
        return
      }

      sticky.classList.remove("is-visible")
      hideTimer = window.setTimeout(() => {
        sticky.hidden = true
        hideTimer = null
      }, hideDuration)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        applyVisibility(!entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(target)

    const syncOnResize = () => {
      if (!mobileMedia.matches) applyVisibility(false)
    }

    if (typeof mobileMedia.addEventListener === "function") {
      mobileMedia.addEventListener("change", syncOnResize)
    } else if (typeof mobileMedia.addListener === "function") {
      mobileMedia.addListener(syncOnResize)
    }

    document.addEventListener("turbolinks:before-cache", () => {
      observer.disconnect()
      if (hideTimer) {
        window.clearTimeout(hideTimer)
        hideTimer = null
      }
      sticky.classList.remove("is-visible")
      sticky.hidden = true
    })
  })
}

const initializeSiteUi = () => {
  initializeArticleShare()
  initializeResponsiveHeader()
  initializeMobileNav()
  initializeMobileCollapses()
  initializeMobileStickyCtas()
  initializeSiteMotion()
}

document.addEventListener("turbolinks:load", initializeSiteUi)
document.addEventListener("turbolinks:before-cache", teardownSiteMotion)
