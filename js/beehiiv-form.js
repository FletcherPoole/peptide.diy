function initBeehiivForm() {
  const wraps = document.querySelectorAll(".beehiiv-form-wrap");
  if (!wraps.length) return;

  const nudgeResize = (wrap) => {
    const iframe = wrap.querySelector("iframe");
    if (!iframe?.contentWindow) return;
    iframe.removeAttribute("data-bhv-sized");
    iframe.style.width = "100%";
    iframe.style.maxWidth = "100%";
    iframe.style.height = "2000px";
    iframe.contentWindow.postMessage({ type: "beehiiv:resize" }, "*");
  };

  wraps.forEach((wrap) => {
    const observer = new MutationObserver(() => nudgeResize(wrap));
    observer.observe(wrap, { childList: true, subtree: true });

    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(() => nudgeResize(wrap));
      resizeObserver.observe(wrap);
    }

    nudgeResize(wrap);
  });
}

document.addEventListener("DOMContentLoaded", initBeehiivForm);
