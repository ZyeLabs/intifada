/**
 * Site behaviour. No dependencies. Full spec: BEHAVIOUR-SPEC.md
 *
 * Two things are load-bearing for accessibility:
 *
 *   1. Reduced motion works by NOT running the reveal engine. Nothing is hidden
 *      by CSS — only JS sets a "from" state — so skipping it renders everything
 *      in place. Never move the hidden state into CSS: reduced-motion users, and
 *      anyone whose JS fails, would get a blank page.
 *
 *   2. word-stagger splits headings into per-word spans, and sets aria-label on
 *      the parent + aria-hidden on the spans so screen readers still read one
 *      string.
 */
(function () {
  'use strict'

  var MOBILE = '(max-width: 760px)'
  var EASE_SOFT = 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  var EASE_STANDARD = 'cubic-bezier(0.22, 1, 0.36, 1)'
  var HIDDEN = 0.001 // not 0 — keeps the box rendered

  var isMobile = function () {
    return window.matchMedia(MOBILE).matches
  }
  var prefersReducedMotion = function () {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  /* ------------------------------------------------------------------ *
   * Mobile navigation drawer
   * ------------------------------------------------------------------ */
  function initMobileNav(header) {
    var toggle = header.querySelector('[data-mobile-nav-toggle]')
    var drawer = header.querySelector('[data-mobile-nav-drawer]')
    var backdrop = header.querySelector('[data-mobile-nav-backdrop]')
    var closeBtn = header.querySelector('[data-mobile-nav-close]')
    var links = header.querySelectorAll('[data-mobile-nav-link]')

    if (!toggle || !drawer || !backdrop) return

    var open = false
    var lastFocused = null
    var hideTimer = null

    var focusables = function () {
      return drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    }

    function openDrawer() {
      if (open) return
      open = true
      window.clearTimeout(hideTimer)
      lastFocused = document.activeElement

      drawer.hidden = false
      backdrop.hidden = false

      // Must land in its own frame or the CSS transition has no start state.
      window.requestAnimationFrame(function () {
        toggle.setAttribute('aria-expanded', 'true')
        header.classList.add('is-nav-open')
        document.body.classList.add('site-body--nav-open') // scroll lock
        var first = focusables()[0]
        if (first) first.focus()
      })
    }

    function closeDrawer(opts) {
      if (!open) return
      open = false
      var immediate = opts && opts.immediate
      var restoreFocus = !opts || opts.restoreFocus !== false

      toggle.setAttribute('aria-expanded', 'false')
      header.classList.remove('is-nav-open')
      document.body.classList.remove('site-body--nav-open')

      if (restoreFocus && lastFocused && lastFocused.focus) lastFocused.focus()

      var hide = function () {
        drawer.hidden = true
        backdrop.hidden = true
      }
      // Keep it in the DOM until the close transition has played.
      if (immediate) hide()
      else hideTimer = window.setTimeout(hide, 240)
    }

    toggle.addEventListener('click', function () {
      if (open) closeDrawer()
      else openDrawer()
    })
    // Can never fire: the drawer is full-screen and the backdrop is clipped to
    // the header. Kept because it's the right handler once fixed. HANDOFF §8.1.
    backdrop.addEventListener('click', function () {
      closeDrawer()
    })
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        closeDrawer()
      })
    }
    Array.prototype.forEach.call(links, function (link) {
      // Navigating away — don't yank focus back to the burger.
      link.addEventListener('click', function () {
        closeDrawer({ restoreFocus: false })
      })
    })

    document.addEventListener('keydown', function (event) {
      if (!open) return

      if (event.key === 'Escape') {
        closeDrawer()
        return
      }

      if (event.key !== 'Tab') return

      // Focus trap.
      var items = focusables()
      if (!items.length) return
      var first = items[0]
      var last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    })

    // Crossing up to desktop must not strand an open drawer.
    var mq = window.matchMedia(MOBILE)
    var onChange = function () {
      if (!isMobile()) closeDrawer({ immediate: true, restoreFocus: false })
    }
    if (mq.addEventListener) mq.addEventListener('change', onChange)
    else mq.addListener(onChange)
  }

  /* ------------------------------------------------------------------ *
   * Header: condense on scroll, and publish its height to CSS
   * ------------------------------------------------------------------ */
  function initResponsiveHeader(headers) {
    var ticking = false

    function measure() {
      Array.prototype.forEach.call(headers, function (header) {
        header.classList.toggle('is-header-condensed', window.scrollY > 24)
        document.documentElement.style.setProperty('--si-header-offset', header.offsetHeight + 'px')
      })
      ticking = false
    }

    function request() {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
  }

  /* ------------------------------------------------------------------ *
   * <details data-mobile-collapse> — open on desktop, collapsed on mobile
   * ------------------------------------------------------------------ */
  function initMobileCollapses(items) {
    if (!items.length) return

    var apply = function () {
      var mobile = isMobile()
      Array.prototype.forEach.call(items, function (item) {
        item.open = !mobile
      })
    }

    apply()
    var mq = window.matchMedia(MOBILE)
    if (mq.addEventListener) mq.addEventListener('change', apply)
    else mq.addListener(apply)
  }

  /* ------------------------------------------------------------------ *
   * Reveal engine
   * ------------------------------------------------------------------ */

  // "from" styles pinned before the element is seen, keyframes when it is.
  // Durations in ms; the markup expresses delays in SECONDS.
  var REVEALS = {
    'fade-up': {
      duration: 620,
      easing: EASE_SOFT,
      from: function (el) {
        // data-animate-origin="top" makes it drop in rather than rise.
        var y = el.dataset.animateOrigin === 'top' ? -24 : 24
        return { opacity: HIDDEN, transform: 'translate3d(0, ' + y + 'px, 0)' }
      },
      to: { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
    },
    'fade-left': {
      duration: 620,
      easing: EASE_SOFT,
      from: function () {
        return { opacity: HIDDEN, transform: 'translate3d(-24px, 0, 0)' }
      },
      to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    },
    'fade-right': {
      duration: 620,
      easing: EASE_SOFT,
      from: function () {
        return { opacity: HIDDEN, transform: 'translate3d(24px, 0, 0)' }
      },
      to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    },
    'scale-in': {
      duration: 620,
      easing: EASE_SOFT,
      from: function () {
        return { opacity: HIDDEN, transform: 'scale(0.92)' }
      },
      to: { opacity: 1, transform: 'scale(1)' },
    },
    'clip-reveal': {
      duration: 900,
      easing: EASE_STANDARD,
      from: function () {
        return { opacity: HIDDEN, clipPath: 'inset(0 0 18% 0)', transform: 'scale(1.02)' }
      },
      to: { opacity: 1, clipPath: 'inset(0 0 0 0)', transform: 'scale(1)' },
    },
    'line-grow': {
      duration: 680,
      easing: EASE_STANDARD,
      from: function (el) {
        el.style.transformOrigin = 'left center'
        return { transform: 'scaleX(0)' }
      },
      to: { transform: 'scaleX(1)' },
    },
  }

  var STAGGER_WORD = 35 // ms between words in a word-stagger heading
  var STAGGER_PATH = 60 // ms between paths in an svg draw-in
  var STAGGER_GROUP_DESKTOP = 70
  var STAGGER_GROUP_MOBILE = 50

  /** Pin inline styles. Tracked so we can strip exactly what we set. */
  function pin(el, styles) {
    Object.keys(styles).forEach(function (key) {
      el.style[key] = typeof styles[key] === 'number' ? String(styles[key]) : styles[key]
    })
  }

  function unpin(el, styles) {
    Object.keys(styles).forEach(function (key) {
      el.style[key] = ''
    })
  }

  /** Run keyframes, then hand the element back to CSS. */
  function run(el, from, to, options) {
    var animation = el.animate([from, to], {
      duration: options.duration,
      delay: options.delay || 0,
      easing: options.easing,
      fill: 'both',
    })
    animation.finished
      .then(function () {
        unpin(el, from)
        animation.cancel() // safe: natural state now equals the end state
      })
      .catch(function () {})
    return animation
  }

  /** Split into per-word spans without destroying the accessible name. */
  function splitWords(el) {
    var text = el.textContent
    el.setAttribute('aria-label', text)

    var frag = document.createDocumentFragment()
    var words = text.split(/(\s+)/)
    var spans = []

    words.forEach(function (word) {
      if (!word.trim()) {
        frag.appendChild(document.createTextNode(word))
        return
      }
      var span = document.createElement('span')
      span.className = 'motion-word'
      span.textContent = word
      span.setAttribute('aria-hidden', 'true')
      frag.appendChild(span)
      spans.push(span)
    })

    el.textContent = ''
    el.appendChild(frag)
    return spans
  }

  function prepare(el) {
    var type = el.dataset.animate

    if (type === 'word-stagger') {
      var words = splitWords(el)
      var from = { opacity: 0, transform: 'translate3d(0, 1.05em, 0)' }
      words.forEach(function (word) {
        pin(word, from)
      })
      el._reveal = function (delay) {
        words.forEach(function (word, i) {
          run(word, from, { opacity: 1, transform: 'translate3d(0, 0, 0)' }, {
            duration: 720,
            easing: EASE_STANDARD,
            delay: delay + i * STAGGER_WORD,
          })
        })
      }
      return
    }

    if (type === 'draw-in') {
      var paths = el.querySelectorAll('path, line, circle, rect, polyline')
      var states = []
      Array.prototype.forEach.call(paths, function (path) {
        var length = typeof path.getTotalLength === 'function' ? path.getTotalLength() : 0
        if (!length) return
        var from = { strokeDasharray: length + ' ' + length, strokeDashoffset: length }
        pin(path, from)
        states.push({ path: path, from: from, length: length })
      })
      el._reveal = function (delay) {
        states.forEach(function (state, i) {
          run(state.path, state.from, { strokeDasharray: state.length + ' ' + state.length, strokeDashoffset: 0 }, {
            duration: 900,
            easing: EASE_STANDARD,
            delay: delay + i * STAGGER_PATH,
          })
        })
      }
      return
    }

    var spec = REVEALS[type]
    if (!spec) return

    var from = spec.from(el)
    pin(el, from)
    el._reveal = function (delay) {
      run(el, from, spec.to, { duration: spec.duration, easing: spec.easing, delay: delay })
    }
  }

  function observe(el, delay, threshold) {
    if (!el._reveal) return

    var once = el.dataset.animateOnce !== 'false'
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          el._reveal(delay)
          if (once) observer.unobserve(el)
        })
      },
      { threshold: threshold }
    )
    observer.observe(el)
  }

  function initReveals() {
    var elements = document.querySelectorAll('[data-animate]')
    Array.prototype.forEach.call(elements, function (el) {
      // Children of a stagger group are driven by the group, not individually.
      if (el.parentElement && el.parentElement.hasAttribute('data-animate-group')) return

      prepare(el)
      var delay = parseFloat(el.dataset.animateDelay || '0') * 1000
      var threshold = parseFloat(el.dataset.animateThreshold || '0.15')
      observe(el, delay, threshold)
    })
  }

  function initRevealGroups() {
    var groups = document.querySelectorAll('[data-animate-group="stagger"]')
    var step = isMobile() ? STAGGER_GROUP_MOBILE : STAGGER_GROUP_DESKTOP

    Array.prototype.forEach.call(groups, function (group) {
      var children = Array.prototype.filter.call(group.children, function (child) {
        return !child.hasAttribute('hidden')
      })
      if (!children.length) return

      var from = { opacity: HIDDEN, transform: 'translate3d(0, 24px, 0)' }
      var to = { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      children.forEach(function (child) {
        pin(child, from)
      })

      var offset = parseFloat(group.dataset.animateDelay || '0') * 1000
      var threshold = parseFloat(group.dataset.animateThreshold || '0.15')

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return
            children.forEach(function (child, i) {
              run(child, from, to, { duration: 620, easing: EASE_SOFT, delay: offset + i * step })
            })
            observer.unobserve(group)
          })
        },
        { threshold: threshold }
      )
      observer.observe(group)
    })
  }

  /* ------------------------------------------------------------------ *
   * Parallax — desktop only, and never under reduced motion
   * ------------------------------------------------------------------ */
  function initParallax() {
    if (isMobile()) return

    var targets = []
    Array.prototype.forEach.call(document.querySelectorAll('[data-parallax]'), function (el) {
      var media = el.querySelector('img, video, iframe')
      if (!media) return
      targets.push({
        el: el,
        media: media,
        amount: el.dataset.parallax === 'medium' ? 0.14 : 0.08,
      })
    })
    if (!targets.length) return

    var ticking = false

    function update() {
      var viewportCentre = window.innerHeight / 2
      targets.forEach(function (t) {
        var rect = t.el.getBoundingClientRect()
        var elementCentre = rect.top + rect.height / 2
        var offset = (viewportCentre - elementCentre) * t.amount
        offset = Math.max(-40, Math.min(40, offset))
        t.media.style.setProperty('--si-parallax-offset', offset.toFixed(2) + 'px')
      })
      ticking = false
    }

    function request() {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
  }

  /* ------------------------------------------------------------------ *
   * Date bar — today's date in Gregorian and Hijri
   * ------------------------------------------------------------------ */
  function initDateBar() {
    var gregorianNodes = document.querySelectorAll('[data-date-gregorian]')
    var hijriNodes = document.querySelectorAll('[data-date-hijri]')
    if ((!gregorianNodes.length && !hijriNodes.length) || !window.Intl) return

    var now = new Date()
    var setText = function (nodes, text) {
      Array.prototype.forEach.call(nodes, function (node) {
        node.textContent = text
      })
    }

    try {
      setText(
        gregorianNodes,
        new Intl.DateTimeFormat('en-ZA', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now)
      )

      var hijriFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        era: 'short',
      })

      // Drop the era part, then re-append " AH" so the suffix is consistent
      // regardless of what the platform's ICU calls it.
      var hijriText
      if (typeof hijriFormatter.formatToParts === 'function') {
        hijriText =
          hijriFormatter
            .formatToParts(now)
            .filter(function (part) {
              return part.type !== 'era'
            })
            .map(function (part) {
              return part.value
            })
            .join('')
            .replace(/\s+,/g, ',')
            .trim() + ' AH'
      } else {
        hijriText =
          hijriFormatter
            .format(now)
            .replace(/\s+(?:AH|A\.H\.|BC|B\.C\.|BCE|CE)$/i, '')
            .trim() + ' AH'
      }
      setText(hijriNodes, hijriText)
    } catch (error) {
      /* leave the build-time fallback in place */
    }
  }

  /* ------------------------------------------------------------------ *
   * Boot
   * ------------------------------------------------------------------ */
  function init() {
    var headers = document.querySelectorAll('[data-mobile-nav]')
    Array.prototype.forEach.call(headers, initMobileNav)
    initResponsiveHeader(headers)
    initMobileCollapses(document.querySelectorAll('details[data-mobile-collapse]'))
    initDateBar()

    // Reduced motion suppresses motion only. The nav, header and date bar above
    // still run. No "from" state gets pinned, so content just renders.
    if (prefersReducedMotion()) return

    initRevealGroups()
    initReveals()
    initParallax()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
