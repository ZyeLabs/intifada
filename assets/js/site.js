(function () {
  "use strict";

  var focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  function initializeMobileNav() {
    document.querySelectorAll("[data-mobile-nav]").forEach(function (header) {
      var toggle = header.querySelector("[data-mobile-nav-toggle]");
      var drawer = header.querySelector("[data-mobile-nav-drawer]");
      var backdrop = header.querySelector("[data-mobile-nav-backdrop]");
      var closeButton = header.querySelector("[data-mobile-nav-close]");
      var drawerLinks = header.querySelectorAll("[data-mobile-nav-link]");
      var lastFocused = null;

      if (!toggle || !drawer || !backdrop) return;

      function getFocusable() {
        return Array.prototype.slice.call(drawer.querySelectorAll(focusableSelector));
      }

      function openDrawer() {
        lastFocused = document.activeElement;
        drawer.hidden = false;
        backdrop.hidden = false;
        document.body.classList.add("nav-open");
        toggle.setAttribute("aria-expanded", "true");

        window.requestAnimationFrame(function () {
          var focusable = getFocusable();
          (focusable[0] || drawer).focus();
        });
      }

      function closeDrawer(restoreFocus) {
        drawer.hidden = true;
        backdrop.hidden = true;
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");

        if (restoreFocus !== false && lastFocused && document.contains(lastFocused)) {
          lastFocused.focus();
        }
      }

      function trapFocus(event) {
        if (drawer.hidden) return;

        if (event.key === "Escape") {
          event.preventDefault();
          closeDrawer();
          return;
        }

        if (event.key !== "Tab") return;

        var focusable = getFocusable();
        if (!focusable.length) return;

        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }

      toggle.addEventListener("click", function () {
        if (drawer.hidden) {
          openDrawer();
        } else {
          closeDrawer();
        }
      });

      if (closeButton) closeButton.addEventListener("click", closeDrawer);
      backdrop.addEventListener("click", function () { closeDrawer(false); });
      drawerLinks.forEach(function (link) {
        link.addEventListener("click", function () { closeDrawer(false); });
      });
      document.addEventListener("keydown", trapFocus);
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var input = document.createElement("textarea");
      input.value = text;
      input.setAttribute("readonly", "readonly");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();

      try {
        document.execCommand("copy");
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(input);
      }
    });
  }

  function initializeShareButtons() {
    document.querySelectorAll("[data-share-url]").forEach(function (container) {
      var status = container.querySelector("[data-share-status]");
      var url = container.getAttribute("data-share-url") || window.location.href;
      var title = container.getAttribute("data-share-title") || document.title;
      var timer = null;

      function setStatus(message) {
        if (!status) return;
        window.clearTimeout(timer);
        status.textContent = message;
        timer = window.setTimeout(function () {
          status.textContent = "";
        }, 2600);
      }

      container.querySelectorAll("[data-share-action]").forEach(function (button) {
        button.addEventListener("click", function () {
          var action = button.getAttribute("data-share-action");

          if (action === "native" && navigator.share) {
            navigator.share({ title: title, url: url }).then(function () {
              setStatus("Shared.");
            }).catch(function (error) {
              if (error && error.name === "AbortError") return;
              setStatus("Unable to share right now.");
            });
            return;
          }

          copyText(url).then(function () {
            setStatus("Link copied.");
          }).catch(function () {
            setStatus("Unable to copy right now.");
          });
        });
      });
    });
  }

  function initializeMobileCollapses() {
    var mediaQuery = window.matchMedia("(max-width: 640px)");

    function applyState(details) {
      details.open = !mediaQuery.matches;
    }

    document.querySelectorAll("details[data-mobile-collapse]").forEach(function (details) {
      applyState(details);

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", function () { applyState(details); });
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(function () { applyState(details); });
      }
    });
  }

  function initializeStickyCtas() {
    var mediaQuery = window.matchMedia("(max-width: 640px)");

    document.querySelectorAll("[data-mobile-sticky-context]").forEach(function (context) {
      var target = context.querySelector("[data-mobile-sticky-target]");
      var sticky = context.querySelector("[data-mobile-sticky-cta]");

      if (!target || !sticky || !("IntersectionObserver" in window)) return;

      function setVisible(visible) {
        if (!mediaQuery.matches || !visible) {
          sticky.classList.remove("is-visible");
          sticky.hidden = true;
          return;
        }

        sticky.hidden = false;
        window.requestAnimationFrame(function () {
          sticky.classList.add("is-visible");
        });
      }

      var observer = new IntersectionObserver(function (entries) {
        setVisible(!entries[0].isIntersecting);
      }, { threshold: 0.1 });

      observer.observe(target);

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", function () { setVisible(false); });
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(function () { setVisible(false); });
      }
    });
  }

  function initializeRevealMotion() {
    var nodes = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (node) {
        node.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.classList.add("has-js");
    initializeMobileNav();
    initializeShareButtons();
    initializeMobileCollapses();
    initializeStickyCtas();
    initializeRevealMotion();
  });
})();
