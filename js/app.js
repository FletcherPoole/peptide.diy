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
const CALC_PRESETS = {
  ghk: { amount: 50, amountUnit: "mg", bac: 2, dose: 250, doseUnit: "mcg" },
  reta: { amount: 10, amountUnit: "mg", bac: 2, dose: 2, doseUnit: "mg" },
  standard: { amount: 5, amountUnit: "mg", bac: 2, dose: 250, doseUnit: "mcg" },
  hgh: { amount: 10, amountUnit: "IU", bac: 1, dose: 2, doseUnit: "IU" },
};

function formatVolumeMl(volMl) {
  if (volMl < 0.01) return volMl.toFixed(4);
  if (volMl < 1) return volMl.toFixed(3);
  return volMl.toFixed(2);
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function getUnitValue(prefix, field) {
  if (prefix === "c") {
    const radio = document.querySelector(
      `input[name="c-${field}-unit"]:checked`,
    );
    return radio ? radio.value : "mg";
  }
  const el = document.getElementById(`${prefix}-${field}-unit`);
  return el ? el.value : "mg";
}

function setUnitValue(field, value) {
  const radio = document.querySelector(
    `input[name="c-${field}-unit"][value="${value}"]`,
  );
  if (radio) radio.checked = true;
}

function computePeptideDose({
  amountVal,
  amountUnit,
  bacWater,
  doseVal,
  doseUnit,
  syringeScale = 100,
  syringeMaxMl = 1,
}) {
  if ([amountVal, bacWater, doseVal].some((v) => isNaN(v) || v <= 0)) {
    return { error: "Enter valid positive numbers in every field." };
  }

  const usesIU = amountUnit === "IU" || doseUnit === "IU";
  if (usesIU && (amountUnit !== "IU" || doseUnit !== "IU")) {
    return {
      error: "For IU-based peptides (e.g. HGH, HCG), set both vial amount and dose to IU.",
    };
  }

  let conc;
  let concText;
  let volMl;
  let totalDoses;
  let formulaLines;

  if (usesIU) {
    if (doseVal > amountVal) {
      return { error: "Dose per injection cannot exceed total vial amount." };
    }
    conc = amountVal / bacWater;
    volMl = doseVal / conc;
    totalDoses = Math.floor(amountVal / doseVal);
    concText = `${round1(conc)} IU/mL`;
    formulaLines = [
      `Concentration: ${amountVal} IU ÷ ${bacWater} mL = ${concText}`,
      `Draw volume: ${doseVal} IU ÷ ${concText} = ${formatVolumeMl(volMl)} mL`,
      `Syringe units: ${formatVolumeMl(volMl)} mL × ${syringeScale} = ${round1(volMl * syringeScale)} units`,
    ];
  } else {
    const amountMg = amountUnit === "mcg" ? amountVal / 1000 : amountVal;
    const doseMg = doseUnit === "mcg" ? doseVal / 1000 : doseVal;
    const amountLabel = amountUnit === "mcg" ? `${amountVal} mcg` : `${amountVal} mg`;
    const doseLabel = doseUnit === "mcg" ? `${doseVal} mcg` : `${doseVal} mg`;

    if (doseMg > amountMg) {
      return { error: "Dose per injection cannot exceed total vial amount." };
    }
    conc = amountMg / bacWater;
    volMl = doseMg / conc;
    totalDoses = Math.floor(amountMg / doseMg);
    concText = `${Math.round(conc * 1000) / 1000} mg/mL`;
    formulaLines = [
      `Concentration: ${amountLabel} ÷ ${bacWater} mL = ${concText}`,
      `Draw volume: ${doseLabel} ÷ ${concText} = ${formatVolumeMl(volMl)} mL`,
      `Syringe units: ${formatVolumeMl(volMl)} mL × ${syringeScale} = ${round1(volMl * syringeScale)} units`,
    ];
  }

  const syUnits = volMl * syringeScale;
  const maxUnits = syringeMaxMl * syringeScale;
  const notes = [];

  if (volMl < 0.005) {
    notes.push(
      "Very small draw volume — use less BAC water, a U-20 syringe, or a lower concentration.",
    );
  }
  if (volMl > syringeMaxMl) {
    notes.push(
      `Draw volume exceeds a ${syringeMaxMl} mL syringe — split across syringes or add more BAC water.`,
    );
  } else if (syUnits > maxUnits * 0.95) {
    notes.push(`Near the ${syringeMaxMl} mL syringe limit — double-check your measurement.`);
  }

  return {
    concText,
    volMl: formatVolumeMl(volMl),
    volMlRaw: volMl,
    syUnits: round1(syUnits),
    maxUnits,
    totalDoses,
    syringeLabel: "units",
    syringeScale,
    notes,
    formulaLines,
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

function readCalcForm(prefix) {
  return {
    amountVal: parseFloat(document.getElementById(`${prefix}-pep-amount`).value),
    amountUnit: getUnitValue(prefix, "pep"),
    bacWater: parseFloat(document.getElementById(`${prefix}-bac-water`).value),
    doseVal: parseFloat(document.getElementById(`${prefix}-dose`).value),
    doseUnit: getUnitValue(prefix, "dose"),
    syringeScale:
      prefix === "c"
        ? parseInt(document.getElementById("c-syringe").value, 10)
        : 100,
    syringeMaxMl:
      prefix === "c"
        ? parseFloat(document.getElementById("c-syringe-vol").value)
        : 1,
  };
}

function renderCalcResult(prefix, result, { showConc = true, enhanced = false } = {}) {
  const resultEl = document.getElementById(`${prefix}-result`);
  const errorEl = document.getElementById(`${prefix}-error`);
  const emptyEl = document.getElementById(`${prefix}-empty`);

  if (result.error) {
    showCalcError(errorEl, result.error);
    if (resultEl) resultEl.hidden = true;
    if (emptyEl) emptyEl.hidden = false;
    const sub = document.getElementById("c-output-sub");
    if (sub) sub.textContent = "Fix the inputs to see results.";
    return;
  }

  showCalcError(errorEl, "");

  if (showConc) {
    const concEl = document.getElementById(`${prefix}-res-conc`);
    if (concEl) concEl.textContent = result.concText;
  }

  const volText = `${result.volMl} mL`;
  const volEl = document.getElementById(`${prefix}-res-vol`);
  if (volEl) {
    volEl.textContent = enhanced ? `${volText} per dose` : result.volMl;
  }
  document.getElementById(`${prefix}-res-units`).textContent = result.syUnits;
  document.getElementById(`${prefix}-res-doses`).textContent = result.totalDoses;

  const volStat = document.getElementById(`${prefix}-res-vol-stat`);
  if (volStat) volStat.textContent = volText;

  const labelEl = document.getElementById(`${prefix}-res-syringe-label`);
  if (labelEl) labelEl.textContent = `U-${result.syringeScale} units`;

  if (enhanced) {
    if (emptyEl) emptyEl.hidden = true;
    if (resultEl) {
      resultEl.hidden = false;
      resultEl.classList.add("show");
    }

    const sub = document.getElementById("c-output-sub");
    if (sub) sub.textContent = `${result.totalDoses} doses in this vial at this concentration.`;

    const fillPct = Math.min((result.syUnits / result.maxUnits) * 100, 100);
    const fill = document.getElementById("c-syringe-fill");
    if (fill) fill.style.width = `${fillPct}%`;

    const maxLabel = document.getElementById("c-syringe-max-label");
    const midLabel = document.getElementById("c-syringe-mid");
    if (maxLabel) maxLabel.textContent = result.maxUnits;
    if (midLabel) midLabel.textContent = round1(result.maxUnits / 2);

    const formulaEl = document.getElementById("c-formula");
    if (formulaEl && result.formulaLines) {
      formulaEl.innerHTML = result.formulaLines.join("<br>");
    }

    const notesEl = document.getElementById(`${prefix}-res-notes`);
    if (notesEl) {
      notesEl.innerHTML = result.notes.length
        ? result.notes.map((n) => `<div class="calc-warning-item">${n}</div>`).join("")
        : "";
    }
  } else {
    const notesEl = document.getElementById(`${prefix}-res-notes`);
    if (notesEl) {
      notesEl.textContent = result.notes.length ? result.notes.join(" ") : "";
    }
    if (resultEl) resultEl.classList.add("show");
  }
}

function calcHome() {
  renderCalcResult("h", computePeptideDose(readCalcForm("h")), { showConc: false });
}

function calcFull() {
  const inputs = readCalcForm("c");
  if (![inputs.amountVal, inputs.bacWater, inputs.doseVal].every((v) => v > 0)) {
    const emptyEl = document.getElementById("c-empty");
    const resultEl = document.getElementById("c-result");
    if (emptyEl) emptyEl.hidden = false;
    if (resultEl) resultEl.hidden = true;
    showCalcError(document.getElementById("c-error"), "");
    const sub = document.getElementById("c-output-sub");
    if (sub) sub.textContent = "Enter values on the left to see results.";
    return;
  }
  renderCalcResult("c", computePeptideDose(inputs), { enhanced: true });
}

function applyPreset(key) {
  const preset = CALC_PRESETS[key];
  if (!preset) return;

  document.getElementById("c-pep-amount").value = preset.amount;
  document.getElementById("c-bac-water").value = preset.bac;
  document.getElementById("c-dose").value = preset.dose;
  setUnitValue("pep", preset.amountUnit);
  setUnitValue("dose", preset.doseUnit);
  calcFull();
}

function initCalculators() {
  const fullForm = document.getElementById("c-pep-amount");
  if (fullForm) {
    const run = () => calcFull();

    ["c-pep-amount", "c-bac-water", "c-dose"].forEach((id) => {
      document.getElementById(id).addEventListener("input", run);
    });
    ["c-syringe", "c-syringe-vol"].forEach((id) => {
      document.getElementById(id).addEventListener("change", run);
    });
    document.querySelectorAll('input[name="c-pep-unit"], input[name="c-dose-unit"]').forEach((el) => {
      el.addEventListener("change", run);
    });
    document.getElementById("calc-form").addEventListener("submit", (e) => {
      e.preventDefault();
      calcFull();
    });

    document.querySelectorAll(".calc-preset").forEach((btn) => {
      btn.addEventListener("click", () => applyPreset(btn.dataset.preset));
    });
  }

  const homeAmount = document.getElementById("h-pep-amount");
  if (homeAmount) {
    const runHome = () => {
      const inputs = readCalcForm("h");
      if ([inputs.amountVal, inputs.bacWater, inputs.doseVal].every((v) => v > 0)) {
        calcHome();
      }
    };
    ["h-pep-amount", "h-bac-water", "h-dose"].forEach((id) => {
      document.getElementById(id).addEventListener("input", runHome);
    });
    ["h-pep-unit", "h-dose-unit"].forEach((id) => {
      document.getElementById(id).addEventListener("change", runHome);
    });
  }
}

document.addEventListener("DOMContentLoaded", initCalculators);

// ── PROTOCOL FILTER ──
function filterProtos(cat) {
  document.querySelectorAll("#proto-list .proto-card").forEach((c) => {
    c.style.display = cat === "all" || c.dataset.cat === cat ? "" : "none";
  });
}
