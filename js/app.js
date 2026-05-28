// ── MOBILE MENU ──
function toggleMobileMenu() {
  document.getElementById("mobile-nav").classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("mobile-nav").classList.remove("open");
}

// ── FAQ ACCORDION ──
function toggleFaq(el) {
  el.parentElement.classList.toggle("open");
}

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
    notes.push("Very small draw volume — consider using less BAC water for a higher concentration.");
  }
  if (volMl > 1) {
    notes.push("Draw volume exceeds 1 mL — you may need multiple syringes or more BAC water.");
  }

  return {
    labels: ["Concentration", "mL per injection", "U-100 units"],
    totalLabel: "Total injections",
    concText,
    box2: `${formatVolumeMl(volMl)} mL`,
    box3,
    totalDoses,
    notes,
  };
}

function computeCream({ amountVal, amountUnit, bacWater, doseVal, doseUnit, moisturiserG }) {
  if (amountUnit === "IU" || doseUnit === "IU") {
    return { error: "Topical cream calculations use mg or mcg — not IU." };
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
    "Store mixed cream refrigerated. Use clean tools — not for injection.",
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

function computeNasal({ amountVal, amountUnit, bacWater, doseVal, doseUnit, salineMl }) {
  if (amountUnit === "IU" || doseUnit === "IU") {
    return { error: "Nasal spray calculations use mg or mcg — not IU." };
  }
  if ([amountVal, bacWater, doseVal, salineMl].some((v) => isNaN(v) || v <= 0)) {
    return { error: "Enter valid positive numbers in every field, including saline volume." };
  }

  const amountMcg = toMcg(amountVal, amountUnit);
  const doseMcg = toMcg(doseVal, doseUnit);
  if (doseMcg > amountMcg) {
    return { error: "Dose per spray cannot exceed total vial amount." };
  }

  const totalVol = bacWater + salineMl;
  const concMcgMl = amountMcg / totalVol;
  const mLPerSpray = doseMcg / concMcgMl;
  const totalSprays = Math.floor(amountMcg / doseMcg);

  const notes = [
    `Reconstitute in ${formatVolumeMl(bacWater)} mL BAC water, then add ${formatVolumeMl(salineMl)} mL sterile saline (${formatVolumeMl(totalVol)} mL total).`,
    "Use a clean nasal spray bottle. Keep refrigerated after mixing.",
  ];

  if (mLPerSpray > 0.2) {
    notes.push("Large volume per spray — check your sprayer output and consider diluting further.");
  }

  return {
    labels: ["Final concentration", "mL per spray", "Total sprays"],
    totalLabel: "Sprays per vial",
    concText: `${round1(concMcgMl)} mcg/mL`,
    box2: `${formatVolumeMl(mLPerSpray)} mL`,
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

  resultEl.classList.add("show");
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

function setCalcMethod(method) {
  const creamPanel = document.getElementById("c-panel-cream");
  const nasalPanel = document.getElementById("c-panel-nasal");
  const doseLabel = document.getElementById("c-dose-label");
  const pepUnit = document.getElementById("c-pep-unit");
  const doseUnit = document.getElementById("c-dose-unit");
  const iuPep = pepUnit.querySelector('option[value="IU"]');
  const iuDose = doseUnit.querySelector('option[value="IU"]');

  creamPanel.hidden = method !== "cream";
  nasalPanel.hidden = method !== "nasal";

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
}

function initCalculators() {
  const methodSelect = document.getElementById("c-method");
  if (methodSelect) {
    methodSelect.addEventListener("change", (e) => setCalcMethod(e.target.value));
    setCalcMethod(methodSelect.value);
  }

  document.getElementById("calc-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    calcFull();
  });
}

document.addEventListener("DOMContentLoaded", initCalculators);

// ── PROTOCOL FILTER ──
function filterProtos(cat) {
  document.querySelectorAll("#proto-list .proto-card").forEach((c) => {
    c.style.display = cat === "all" || c.dataset.cat === cat ? "" : "none";
  });
}
