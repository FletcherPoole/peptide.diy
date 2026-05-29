(function () {
  const BEEHIIV_ORIGIN = "https://subscribe-forms.beehiiv.com";
  const DEFAULT_HEIGHT = 52;
  const MAX_HEIGHT = 96;

  function clampHeight(value) {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) return DEFAULT_HEIGHT;
    if (n > MAX_HEIGHT) return DEFAULT_HEIGHT;
    return Math.round(n);
  }

  function applyIframeSize(iframe, height) {
    if (!iframe) return;
    const h = clampHeight(height);
    iframe.style.setProperty("height", h + "px", "important");
    iframe.style.setProperty("max-height", MAX_HEIGHT + "px", "important");
    iframe.style.setProperty("width", "100%", "important");
    iframe.style.setProperty("max-width", "100%", "important");
    iframe.style.setProperty("overflow", "hidden", "important");

    let node = iframe.parentElement;
    while (node && node.classList.contains("beehiiv-form-wrap") === false) {
      node.style.setProperty("height", h + "px", "important");
      node.style.setProperty("max-height", MAX_HEIGHT + "px", "important");
      node.style.setProperty("overflow", "hidden", "important");
      node = node.parentElement;
    }

    const wrap = iframe.closest(".beehiiv-form-wrap");
    if (wrap) {
      wrap.style.setProperty("height", h + "px", "important");
      wrap.style.setProperty("max-height", MAX_HEIGHT + "px", "important");
      wrap.style.setProperty("overflow", "hidden", "important");
    }
  }

  function watchIframe(iframe) {
    if (!iframe || iframe.dataset.bhvWatch) return;
    iframe.dataset.bhvWatch = "1";

    applyIframeSize(iframe, DEFAULT_HEIGHT);

    const restyle = () => {
      const current = parseFloat(iframe.style.height);
      if (!Number.isFinite(current) || current > MAX_HEIGHT) {
        applyIframeSize(iframe, DEFAULT_HEIGHT);
      }
    };

    const styleObserver = new MutationObserver(restyle);
    styleObserver.observe(iframe, { attributes: true, attributeFilter: ["style"] });

    let checks = 0;
    const interval = window.setInterval(() => {
      restyle();
      checks += 1;
      if (checks >= 24) window.clearInterval(interval);
    }, 250);
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

        if (
          (msg.type === "beehiiv:styles" || msg.type === "beehiiv:challenge") &&
          msg.payload?.height
        ) {
          applyIframeSize(iframe, msg.payload.height);
        }
      });
    });

    wraps.forEach((wrap) => {
      const observer = new MutationObserver(() => {
        const iframe = wrap.querySelector("iframe");
        if (iframe) watchIframe(iframe);
      });
      observer.observe(wrap, { childList: true, subtree: true });

      const existing = wrap.querySelector("iframe");
      if (existing) watchIframe(existing);
    });
  }

  document.addEventListener("DOMContentLoaded", initBeehiivForm);
})();
