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

// ── PEPTIDE CALCULATOR (shared) ──
function formatVolumeMl(volMl) {
  if (volMl < 0.01) return volMl.toFixed(4);
  if (volMl < 1) return volMl.toFixed(3);
  return volMl.toFixed(2);
}

function round1(n) {
  return Math.round(n * 10) / 10;
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

  if (usesIU) {
    if (doseVal > amountVal) {
      return { error: "Dose per injection cannot exceed total vial amount." };
    }
    conc = amountVal / bacWater;
    volMl = doseVal / conc;
    totalDoses = Math.floor(amountVal / doseVal);
    concText = `${round1(conc)} IU/mL`;
  } else {
    const amountMg = amountUnit === "mcg" ? amountVal / 1000 : amountVal;
    const doseMg = doseUnit === "mcg" ? doseVal / 1000 : doseVal;
    if (doseMg > amountMg) {
      return { error: "Dose per injection cannot exceed total vial amount." };
    }
    conc = amountMg / bacWater;
    volMl = doseMg / conc;
    totalDoses = Math.floor(amountMg / doseMg);
    concText = `${Math.round(conc * 1000) / 1000} mg/mL`;
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
    syUnits: round1(syUnits),
    totalDoses,
    syringeLabel: `U-${syringeScale} units`,
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

function readCalcForm(prefix) {
  return {
    amountVal: parseFloat(document.getElementById(`${prefix}-pep-amount`).value),
    amountUnit: document.getElementById(`${prefix}-pep-unit`).value,
    bacWater: parseFloat(document.getElementById(`${prefix}-bac-water`).value),
    doseVal: parseFloat(document.getElementById(`${prefix}-dose`).value),
    doseUnit: document.getElementById(`${prefix}-dose-unit`).value,
    syringeScale: prefix === "c"
      ? parseInt(document.getElementById("c-syringe").value, 10)
      : 100,
    syringeMaxMl: prefix === "c"
      ? parseFloat(document.getElementById("c-syringe-vol").value)
      : 1,
  };
}

function renderCalcResult(prefix, result, { showConc = true } = {}) {
  const resultEl = document.getElementById(`${prefix}-result`);
  const errorEl = document.getElementById(`${prefix}-error`);

  if (result.error) {
    showCalcError(errorEl, result.error);
    resultEl.classList.remove("show");
    return;
  }

  showCalcError(errorEl, "");

  if (showConc) {
    document.getElementById(`${prefix}-res-conc`).textContent = result.concText;
  }

  document.getElementById(`${prefix}-res-vol`).textContent = `${result.volMl} mL`;
  document.getElementById(`${prefix}-res-units`).textContent = result.syUnits;
  document.getElementById(`${prefix}-res-doses`).textContent = result.totalDoses;

  const labelEl = document.getElementById(`${prefix}-res-syringe-label`);
  if (labelEl) labelEl.textContent = result.syringeLabel;

  const notesEl = document.getElementById(`${prefix}-res-notes`);
  if (notesEl) {
    notesEl.textContent = result.notes.length ? result.notes.join(" ") : "";
  }

  resultEl.classList.add("show");
}

function calcHome() {
  renderCalcResult("h", computePeptideDose(readCalcForm("h")), { showConc: false });
}

function calcFull() {
  renderCalcResult("c", computePeptideDose(readCalcForm("c")));
}

function initCalculators() {
  const fullForm = document.getElementById("c-pep-amount");
  if (fullForm) {
    const run = () => {
      const inputs = readCalcForm("c");
      if ([inputs.amountVal, inputs.bacWater, inputs.doseVal].every((v) => v > 0)) {
        calcFull();
      }
    };
    ["c-pep-amount", "c-bac-water", "c-dose"].forEach((id) => {
      document.getElementById(id).addEventListener("input", run);
    });
    ["c-pep-unit", "c-dose-unit", "c-syringe", "c-syringe-vol"].forEach((id) => {
      document.getElementById(id).addEventListener("change", run);
    });
    document.getElementById("calc-form").addEventListener("submit", (e) => {
      e.preventDefault();
      calcFull();
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
