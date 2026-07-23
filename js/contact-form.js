(function () {
  function setStatus(el, type, message) {
    el.hidden = false;
    el.textContent = message;
    el.classList.remove("is-success", "is-error");
    if (type) el.classList.add(type);
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const statusEl = document.getElementById("contact-status");
    const submitBtn = document.getElementById("contact-submit");
    const subjectSelect = document.getElementById("contact-subject");
    const subjectHidden = document.getElementById("contact-subject-hidden");
    const formspreeId = form.dataset.formspreeId;

    if (subjectSelect && subjectHidden) {
      subjectSelect.addEventListener("change", () => {
        subjectHidden.value = "peptide.diy: " + subjectSelect.value;
      });
      subjectHidden.value = "peptide.diy: " + subjectSelect.value;
    }

    if (!formspreeId) {
      setStatus(
        statusEl,
        "is-error",
        "The contact form is not connected yet. Email us directly once an address is configured."
      );
      submitBtn.disabled = true;
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
      setStatus(statusEl, null, "");

      const payload = new FormData(form);
      payload.set("_replyto", payload.get("email") || "");

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: payload,
          headers: { Accept: "application/json" },
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok) {
          if (typeof gtag === "function") {
            gtag("event", "contact_submit", {
              subject: subjectSelect ? subjectSelect.value : "unknown",
            });
          }
          form.reset();
          if (subjectSelect && subjectHidden) {
            subjectHidden.value = "peptide.diy: " + subjectSelect.value;
          }
          setStatus(
            statusEl,
            "is-success",
            "Message sent. We will get back to you by email."
          );
        } else {
          const detail =
            data.error ||
            (Array.isArray(data.errors) && data.errors.map((e) => e.message).join(" ")) ||
            "Something went wrong. Try again in a minute.";
          setStatus(statusEl, "is-error", detail);
        }
      } catch {
        setStatus(
          statusEl,
          "is-error",
          "Could not send your message. Check your connection and try again."
        );
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initContactForm);
})();
