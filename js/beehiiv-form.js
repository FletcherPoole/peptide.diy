(function () {
  const BEEHIIV_ORIGIN = "https://subscribe-forms.beehiiv.com";

  function applyIframeSize(iframe, payload) {
    if (!iframe || !payload) return;
    if (payload.height) {
      iframe.style.height = payload.height + "px";
    }
    iframe.style.width = "100%";
    iframe.style.maxWidth = "100%";
    const wrap = iframe.closest(".beehiiv-form-wrap");
    if (wrap && payload.height) {
      wrap.style.height = payload.height + "px";
    }
  }

  function requestResize(iframe) {
    if (!iframe?.contentWindow) return;
    iframe.removeAttribute("data-bhv-sized");
    iframe.contentWindow.postMessage({ type: "beehiiv:resize" }, "*");
  }

  function initBeehiivForm() {
    const wraps = document.querySelectorAll(".beehiiv-form-wrap");
    if (!wraps.length) return;

    window.addEventListener("message", (event) => {
      if (event.origin !== BEEHIIV_ORIGIN) return;
      const msg = event.data;
      if (!msg || typeof msg !== "object") return;

      wraps.forEach((wrap) => {
        const iframe = wrap.querySelector("iframe");
        if (!iframe || event.source !== iframe.contentWindow) return;

        if (msg.type === "beehiiv:styles" && msg.payload) {
          applyIframeSize(iframe, msg.payload);
        } else if (msg.type === "beehiiv:challenge" && msg.payload) {
          applyIframeSize(iframe, msg.payload);
        }
      });
    });

    wraps.forEach((wrap) => {
      let lastWidth = 0;
      let resizeTimer;

      const onWidthChange = () => {
        const iframe = wrap.querySelector("iframe");
        if (!iframe) return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => requestResize(iframe), 120);
      };

      const mutationObserver = new MutationObserver(() => {
        const iframe = wrap.querySelector("iframe");
        if (!iframe || iframe.dataset.bhvInit) return;
        iframe.dataset.bhvInit = "1";
        onWidthChange();
      });
      mutationObserver.observe(wrap, { childList: true, subtree: true });

      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver((entries) => {
          const width = entries[0]?.contentRect.width || 0;
          if (!width || Math.abs(width - lastWidth) < 4) return;
          lastWidth = width;
          onWidthChange();
        });
        resizeObserver.observe(wrap);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initBeehiivForm);
})();
