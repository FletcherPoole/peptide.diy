// ── MOBILE MENU ──
function toggleMobileMenu() {
  const nav = document.getElementById("mobile-nav");
  const open = nav.classList.toggle("open");
  const btn = document.querySelector(".menu-toggle");
  if (btn) btn.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
  if (open) {
    const firstLink = nav.querySelector(".mobile-link");
    if (firstLink) firstLink.focus();
  }
}
function closeMobileMenu() {
  const nav = document.getElementById("mobile-nav");
  if (!nav.classList.contains("open")) return;
  nav.classList.remove("open");
  const btn = document.querySelector(".menu-toggle");
  if (btn) btn.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

// ── DESKTOP NAV DROPDOWNS (click + keyboard) ──
function initNavDropdowns() {
  const items = [...document.querySelectorAll("#main-nav .nav-item")];
  const closeAll = (except) => {
    items.forEach((item) => {
      if (item === except) return;
      item.classList.remove("open");
      const b = item.querySelector(".nav-btn");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  };
  items.forEach((item) => {
    const btn = item.querySelector(".nav-btn");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      closeAll(item);
    });
  });
  document.addEventListener("click", () => closeAll(null));
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const openItem = items.find((i) => i.classList.contains("open"));
    if (openItem) {
      openItem.classList.remove("open");
      const b = openItem.querySelector(".nav-btn");
      if (b) {
        b.setAttribute("aria-expanded", "false");
        b.focus();
      }
    }
    closeMobileMenu();
  });
}
document.addEventListener("DOMContentLoaded", initNavDropdowns);

// ── FAQ ACCORDION ──
function toggleFaq(el) {
  const item = el.closest(".faq-item");
  const open = item.classList.toggle("open");
  el.setAttribute("aria-expanded", String(open));
}

// ── COOKIE CONSENT ──
function setCookieConsent(choice) {
  try {
    localStorage.setItem("cookie-consent", choice);
  } catch (e) {}
  if (choice === "granted" && typeof gtag === "function") {
    gtag("consent", "update", { analytics_storage: "granted" });
  }
  const banner = document.getElementById("cookie-consent");
  if (banner) {
    banner.classList.remove("show");
    banner.hidden = true;
  }
}
function initCookieConsent() {
  const banner = document.getElementById("cookie-consent");
  if (!banner) return;
  let choice = null;
  try {
    choice = localStorage.getItem("cookie-consent");
  } catch (e) {}
  if (!choice) {
    banner.hidden = false;
    // allow the element to render before transitioning in
    requestAnimationFrame(() => banner.classList.add("show"));
  }
}
document.addEventListener("DOMContentLoaded", initCookieConsent);

// ── PEPTIDE CALCULATOR ──
function formatVolumeMl(volMl) {
  if (volMl < 0.01) return volMl.toFixed(4);
  if (volMl < 1) return volMl.toFixed(3);
  return volMl.toFixed(2);
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function toMg(val, unit) {
  if (unit === "mcg") return val / 1000;
  if (unit === "mg") return val;
  return null;
}

function toMcg(val, unit) {
  if (unit === "mcg") return val;
  if (unit === "mg") return val * 1000;
  return null;
}

function computeInjection({ amountVal, amountUnit, bacWater, doseVal, doseUnit }) {
  if ([amountVal, bacWater, doseVal].some((v) => isNaN(v) || v <= 0)) {
    return { error: "Enter valid positive numbers in every field." };
  }

  const usesIU = amountUnit === "IU" || doseUnit === "IU";
  if (usesIU && (amountUnit !== "IU" || doseUnit !== "IU")) {
    return {
      error: "For IU-based peptides (e.g. HGH, HCG), set both vial amount and dose to IU.",
    };
  }

  let concText;
  let volMl;
  let totalDoses;
  let box3;

  if (usesIU) {
    if (doseVal > amountVal) {
      return { error: "Dose per injection cannot exceed total vial amount." };
    }
    const conc = amountVal / bacWater;
    volMl = doseVal / conc;
    totalDoses = Math.floor(amountVal / doseVal);
    concText = `${round1(conc)} IU/mL`;
    box3 = `${round1(volMl * 100)} U-100`;
  } else {
    const amountMg = toMg(amountVal, amountUnit);
    const doseMg = toMg(doseVal, doseUnit);
    if (doseMg > amountMg) {
      return { error: "Dose per injection cannot exceed total vial amount." };
    }
    const conc = amountMg / bacWater;
    volMl = doseMg / conc;
    totalDoses = Math.floor(amountMg / doseMg);
    concText = `${Math.round(conc * 1000) / 1000} mg/mL`;
    box3 = `${round1(volMl * 100)} U-100`;
  }

  const notes = [];
  if (volMl < 0.005) {
    notes.push("Very small draw volume. Consider using less BAC water for a higher concentration.");
  }
  if (volMl > 1) {
    notes.push("Draw volume exceeds 1 mL. You may need multiple syringes or more BAC water.");
  }

  return {
    labels: ["Concentration", "mL per injection", "U-100 units"],
    totalLabel: "Total injections",
    concText,
    box2: `${formatVolumeMl(volMl)} mL`,
    box3,
    totalDoses,
    notes,
    unitsU100: round1(volMl * 100),
    isInjection: true,
  };
}

function computeCream({ amountVal, amountUnit, bacWater, doseVal, doseUnit, moisturiserG }) {
  if (amountUnit === "IU" || doseUnit === "IU") {
    return { error: "Topical cream calculations use mg or mcg, not IU." };
  }
  if ([amountVal, bacWater, doseVal, moisturiserG].some((v) => isNaN(v) || v <= 0)) {
    return { error: "Enter valid positive numbers in every field, including moisturiser base." };
  }

  const amountMg = toMg(amountVal, amountUnit);
  const doseMg = toMg(doseVal, doseUnit);
  if (doseMg > amountMg) {
    return { error: "Dose per application cannot exceed total vial amount." };
  }

  const concMgMl = amountMg / bacWater;
  const mLPerApp = doseMg / concMgMl;
  const totalApps = Math.floor(amountMg / doseMg);
  const concMcgG = (amountMg * 1000) / (moisturiserG + bacWater);

  const notes = [
    `Mix ${formatVolumeMl(bacWater)} mL reconstituted peptide into ${round1(moisturiserG)} g moisturiser.`,
    `Approx. ${round1(concMcgG)} mcg peptide per gram of final cream (including liquid volume).`,
    `A pea-sized dab (~0.25–0.5 g) delivers roughly ${round1(concMcgG * 0.25)}–${round1(concMcgG * 0.5)} mcg peptide at this mix.`,
    "Store mixed cream refrigerated. Use clean tools. Not for injection.",
  ];

  return {
    labels: ["After reconstitution", "Solution per application", "Total applications"],
    totalLabel: "Applications per vial",
    concText: `${Math.round(concMgMl * 1000) / 1000} mg/mL`,
    box2: `${formatVolumeMl(mLPerApp)} mL`,
    box3: String(totalApps),
    totalDoses: totalApps,
    notes,
  };
}

function computeNasal({ amountVal, amountUnit, bacWater, doseVal, doseUnit, salineMl, sprayVolMl }) {
  if (amountUnit === "IU" || doseUnit === "IU") {
    return { error: "Nasal spray calculations use mg or mcg, not IU." };
  }
  if ([amountVal, bacWater, doseVal, salineMl, sprayVolMl].some((v) => isNaN(v) || v <= 0)) {
    return {
      error: "Enter valid positive numbers in every field, including saline and liquid per spray.",
    };
  }

  const amountMcg = toMcg(amountVal, amountUnit);
  const doseMcg = toMcg(doseVal, doseUnit);
  if (doseMcg > amountMcg) {
    return { error: "Target dose per spray cannot exceed total vial amount." };
  }

  const totalVol = bacWater + salineMl;
  const concMcgMl = amountMcg / totalVol;
  const mcgPerSpray = concMcgMl * sprayVolMl;
  const totalSpraysByAmount = Math.floor(amountMcg / mcgPerSpray);
  const totalSpraysByVol = Math.floor(totalVol / sprayVolMl);
  const totalSprays = Math.min(totalSpraysByAmount, totalSpraysByVol);

  const notes = [
    `Reconstitute in ${formatVolumeMl(bacWater)} mL BAC water, then add ${formatVolumeMl(salineMl)} mL sterile saline (${formatVolumeMl(totalVol)} mL total).`,
    `Each ${formatVolumeMl(sprayVolMl)} mL spray delivers ~${round1(mcgPerSpray)} mcg peptide at this concentration.`,
    "Use a clean nasal spray bottle. Keep refrigerated after mixing.",
  ];

  const doseDiff = Math.abs(mcgPerSpray - doseMcg) / doseMcg;
  if (doseDiff > 0.1) {
    notes.push(
      `Your target is ${round1(doseMcg)} mcg per spray. Adjust BAC water, saline, or dilution to get closer to that dose.`
    );
  }

  if (sprayVolMl > 0.2) {
    notes.push("Large volume per spray. Double-check your sprayer output.");
  }

  return {
    labels: ["Final concentration", "Peptide per spray", "Total sprays"],
    totalLabel: "Sprays per vial",
    concText: `${round1(concMcgMl)} mcg/mL`,
    box2: `${round1(mcgPerSpray)} mcg`,
    box3: String(totalSprays),
    totalDoses: totalSprays,
    notes,
  };
}

function showCalcError(errorEl, message) {
  if (!errorEl) return;
  if (message) {
    errorEl.textContent = message;
    errorEl.hidden = false;
  } else {
    errorEl.textContent = "";
    errorEl.hidden = true;
  }
}

function readCalcForm() {
  return {
    method: document.getElementById("c-method").value,
    amountVal: parseFloat(document.getElementById("c-pep-amount").value),
    amountUnit: document.getElementById("c-pep-unit").value,
    bacWater: parseFloat(document.getElementById("c-bac-water").value),
    doseVal: parseFloat(document.getElementById("c-dose").value),
    doseUnit: document.getElementById("c-dose-unit").value,
    moisturiserG: parseFloat(document.getElementById("c-moisturiser").value),
    salineMl: parseFloat(document.getElementById("c-saline").value),
    sprayVolMl: parseFloat(document.getElementById("c-spray-vol").value),
    perWeek: parseFloat(document.getElementById("c-per-week").value),
  };
}

function renderCalcResult(result) {
  const resultEl = document.getElementById("c-result");
  const errorEl = document.getElementById("c-error");

  if (result.error) {
    showCalcError(errorEl, result.error);
    resultEl.classList.remove("show");
    return;
  }

  showCalcError(errorEl, "");

  document.getElementById("c-res-conc").textContent = result.concText;
  document.getElementById("c-res-vol").textContent = result.box2;
  document.getElementById("c-res-units").textContent = result.box3;
  document.getElementById("c-res-doses").textContent = result.totalDoses;

  document.getElementById("c-res-label-1").textContent = result.labels[0];
  document.getElementById("c-res-label-2").textContent = result.labels[1];
  document.getElementById("c-res-label-3").textContent = result.labels[2];
  document.getElementById("c-res-total-label").textContent = result.totalLabel;

  const notesEl = document.getElementById("c-res-notes");
  notesEl.textContent = result.notes.length ? result.notes.join(" ") : "";

  updateSyringe(result);
  updateDuration(result);
  resultEl.classList.add("show");
  syncCalcUrl();
  trackCalcUsed();
}

// ── SYRINGE FILL VISUAL (injection only) ──
function updateSyringe(result) {
  const wrap = document.getElementById("c-syringe");
  if (!wrap) return;
  const fill = document.getElementById("c-syringe-fill");
  const label = document.getElementById("c-syringe-label");
  if (!result.isInjection || !(result.unitsU100 > 0)) {
    wrap.hidden = true;
    return;
  }
  const BARREL = 206; // px of inner barrel = 100 U-100 units
  const units = result.unitsU100;
  const pct = Math.max(0, Math.min(units, 100)) / 100;
  fill.setAttribute("width", (pct * BARREL).toFixed(1));
  label.textContent =
    units > 100
      ? `Draw ${units} units — exceeds one U-100 syringe (needs multiple draws)`
      : `Draw to ${units} units on a U-100 (1 mL) insulin syringe`;
  wrap.hidden = false;
}

// ── VIAL DURATION (barebones scheduler) ──
function updateDuration(result) {
  const el = document.getElementById("c-res-duration");
  if (!el) return;
  const perWeek = parseFloat(document.getElementById("c-per-week").value);
  const doses = Number(result.totalDoses);
  if (!(perWeek > 0) || !(doses > 0)) {
    el.hidden = true;
    return;
  }
  const weeks = doses / perWeek;
  const weeksText = weeks >= 1 ? `${round1(weeks)} weeks` : `${round1(weeks * 7)} days`;
  el.innerHTML = `This vial lasts <strong>~${weeksText}</strong> at ${round1(perWeek)} ${
    doses === 1 ? "dose" : "doses"
  }/week (${doses} total ÷ ${round1(perWeek)}).`;
  el.hidden = false;
}

function calcFull() {
  const input = readCalcForm();
  let result;

  if (input.method === "cream") {
    result = computeCream(input);
  } else if (input.method === "nasal") {
    result = computeNasal(input);
  } else {
    result = computeInjection(input);
  }

  renderCalcResult(result);
}

// ── SHAREABLE STATE (deep-link + persistence via URL) ──
const CALC_URL_FIELDS = {
  m: "c-method",
  amt: "c-pep-amount",
  au: "c-pep-unit",
  bac: "c-bac-water",
  dose: "c-dose",
  du: "c-dose-unit",
  pw: "c-per-week",
  moist: "c-moisturiser",
  sal: "c-saline",
  spray: "c-spray-vol",
};

function syncCalcUrl() {
  if (!document.getElementById("c-method")) return;
  const params = new URLSearchParams();
  Object.entries(CALC_URL_FIELDS).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el && el.value !== "" && el.value != null) params.set(key, el.value);
  });
  const query = params.toString();
  const url = query ? `${location.pathname}?${query}` : location.pathname;
  history.replaceState(null, "", url);
}

function prefillCalcFromUrl() {
  const methodSelect = document.getElementById("c-method");
  if (!methodSelect) return;
  const params = new URLSearchParams(location.search);
  if (![...params.keys()].length) return;

  // method first so the right panels/units are set up
  if (params.has("m")) {
    methodSelect.value = params.get("m");
    setCalcMethod(methodSelect.value);
  }
  Object.entries(CALC_URL_FIELDS).forEach(([key, id]) => {
    if (key === "m" || !params.has(key)) return;
    const el = document.getElementById(id);
    if (el) el.value = params.get(key);
  });

  // auto-calculate if the core fields are present
  const hasCore = ["amt", "bac", "dose"].every((k) => params.has(k));
  if (hasCore) calcFull();
}

function copyCalcLink(btn) {
  syncCalcUrl();
  const done = (ok) => {
    if (!btn) return;
    const original = btn.dataset.label || btn.textContent;
    btn.dataset.label = original;
    btn.textContent = ok ? "Link copied ✓" : "Press Ctrl+C to copy";
    setTimeout(() => {
      btn.textContent = btn.dataset.label;
    }, 2200);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(location.href).then(() => done(true), () => done(false));
  } else {
    done(false);
  }
  trackCalcEvent("calculator_share_link");
}

// ── EXPORT RESULT AS IMAGE (canvas, no external libs) ──
function downloadCalcCard() {
  const txt = (id) => (document.getElementById(id) || {}).textContent || "";
  const canvas = document.createElement("canvas");
  const W = 800, H = 450, scale = 2;
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  ctx.fillStyle = "#0b0f18";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#5ef6c8";
  ctx.fillRect(0, 0, W, 6);

  ctx.textBaseline = "top";
  ctx.fillStyle = "#f0ede6";
  ctx.font = "600 30px Georgia, serif";
  ctx.fillText("peptide.diy", 48, 40);
  ctx.fillStyle = "#8892a0";
  ctx.font = "14px Arial, sans-serif";
  ctx.fillText("Reconstitution result", 48, 80);

  const stats = [
    [txt("c-res-conc"), txt("c-res-label-1")],
    [txt("c-res-vol"), txt("c-res-label-2")],
    [txt("c-res-units"), txt("c-res-label-3")],
    [txt("c-res-doses"), txt("c-res-total-label")],
  ];
  let x = 48, y = 140;
  stats.forEach(([val, label], i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const cx = 48 + col * 370, cy = 140 + row * 130;
    ctx.fillStyle = "#131923";
    ctx.fillRect(cx, cy, 340, 110);
    ctx.fillStyle = "#5ef6c8";
    ctx.font = "700 34px Georgia, serif";
    ctx.fillText(val || "-", cx + 20, cy + 22);
    ctx.fillStyle = "#8892a0";
    ctx.font = "13px Arial, sans-serif";
    ctx.fillText((label || "").toUpperCase(), cx + 20, cy + 74);
  });

  const dur = document.getElementById("c-res-duration");
  ctx.fillStyle = "#9ea8b5";
  ctx.font = "13px Arial, sans-serif";
  if (dur && !dur.hidden) ctx.fillText(dur.textContent.slice(0, 90), 48, 410);
  ctx.fillStyle = "#6b7785";
  ctx.font = "12px Arial, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("peptide.diy/calculator · educational, not medical advice", W - 48, 414);
  ctx.textAlign = "left";

  const link = document.createElement("a");
  link.download = "peptide-calc.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
  trackCalcEvent("calculator_save_image");
}

// ── ANALYTICS EVENTS ──
function trackCalcEvent(name, params) {
  if (typeof gtag === "function") gtag("event", name, params || {});
}
function trackCalcUsed() {
  const m = document.getElementById("c-method");
  trackCalcEvent("calculator_used", { method: m ? m.value : "home" });
}

function setCalcMethod(method) {
  const creamPanel = document.getElementById("c-panel-cream");
  const nasalPanel = document.getElementById("c-panel-nasal");
  const doseLabel = document.getElementById("c-dose-label");
  const pepUnit = document.getElementById("c-pep-unit");
  const doseUnit = document.getElementById("c-dose-unit");
  const iuPep = pepUnit.querySelector('option[value="IU"]');
  const iuDose = doseUnit.querySelector('option[value="IU"]');
  const resultEl = document.getElementById("c-result");

  creamPanel.classList.toggle("is-open", method === "cream");
  creamPanel.setAttribute("aria-hidden", method !== "cream");
  nasalPanel.classList.toggle("is-open", method === "nasal");
  nasalPanel.setAttribute("aria-hidden", method !== "nasal");

  resultEl.classList.remove("show");
  showCalcError(document.getElementById("c-error"), "");

  if (method === "injection") {
    doseLabel.textContent = "Target dose per injection";
    iuPep.hidden = false;
    iuDose.hidden = false;
  } else if (method === "cream") {
    doseLabel.textContent = "Target dose per application";
    if (pepUnit.value === "IU") pepUnit.value = "mg";
    if (doseUnit.value === "IU") doseUnit.value = "mcg";
    iuPep.hidden = true;
    iuDose.hidden = true;
  } else {
    doseLabel.textContent = "Target dose per spray";
    if (pepUnit.value === "IU") pepUnit.value = "mg";
    if (doseUnit.value === "IU") doseUnit.value = "mcg";
    iuPep.hidden = true;
    iuDose.hidden = true;
  }
}

// ── HOME CALCULATOR (injection only) ──
function calcHome() {
  const prefix = "h";
  const resultEl = document.getElementById(`${prefix}-result`);
  const errorEl = document.getElementById(`${prefix}-error`);
  const input = {
    amountVal: parseFloat(document.getElementById(`${prefix}-pep-amount`).value),
    amountUnit: document.getElementById(`${prefix}-pep-unit`).value,
    bacWater: parseFloat(document.getElementById(`${prefix}-bac-water`).value),
    doseVal: parseFloat(document.getElementById(`${prefix}-dose`).value),
    doseUnit: document.getElementById(`${prefix}-dose-unit`).value,
  };
  const result = computeInjection(input);

  if (result.error) {
    showCalcError(errorEl, result.error);
    resultEl.classList.remove("show");
    return;
  }

  showCalcError(errorEl, "");
  document.getElementById(`${prefix}-res-vol`).textContent = result.box2.replace(" mL", "");
  document.getElementById(`${prefix}-res-units`).textContent = result.box3.replace(" U-100", "");
  document.getElementById(`${prefix}-res-doses`).textContent = result.totalDoses;
  resultEl.classList.add("show");
  trackCalcEvent("calculator_used", { method: "home" });
}

function initCalculators() {
  const methodSelect = document.getElementById("c-method");
  const calcForm = document.getElementById("calc-form");

  if (methodSelect) {
    methodSelect.addEventListener("change", (e) => setCalcMethod(e.target.value));
    setCalcMethod(methodSelect.value);
  }

  calcForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    calcFull();
  });

  calcForm?.addEventListener("input", () => {
    if (document.getElementById("c-result").classList.contains("show")) {
      calcFull();
    }
  });

  prefillCalcFromUrl();
}

document.addEventListener("DOMContentLoaded", initCalculators);

// ── PROTOCOL SIDEBAR ACTIVE STATE ──
function initProtocolSidebar() {
  const nav = document.querySelector(".protocol-nav-links");
  if (!nav) return;
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = () => {
    let current = sections[0];
    const offset = window.matchMedia("(max-width: 900px)").matches ? 140 : 120;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top - offset <= 0) current = section;
    });
    links.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current.id);
    });
  };

  setActive();
  window.addEventListener("scroll", setActive, { passive: true });
}

document.addEventListener("DOMContentLoaded", initProtocolSidebar);

// ── PROTOCOL FILTER ──
function filterProtos(cat) {
  document.querySelectorAll("#proto-list .proto-card").forEach((c) => {
    c.style.display = cat === "all" || c.dataset.cat === cat ? "" : "none";
  });
}
