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

// ── CALCULATOR (HOME) ──
function calcHome() {
  const amountVal = parseFloat(document.getElementById("h-pep-amount").value);
  const amountUnit = document.getElementById("h-pep-unit").value;
  const bacWater = parseFloat(document.getElementById("h-bac-water").value);
  const doseVal = parseFloat(document.getElementById("h-dose").value);
  const doseUnit = document.getElementById("h-dose-unit").value;
  if (
    isNaN(amountVal) ||
    isNaN(bacWater) ||
    isNaN(doseVal) ||
    bacWater <= 0 ||
    doseVal <= 0
  ) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }
  const amountMg = amountUnit === "mcg" ? amountVal / 1000 : amountVal;
  const doseMg = doseUnit === "mcg" ? doseVal / 1000 : doseVal;
  const conc = amountMg / bacWater;
  const volMl = doseMg / conc;
  const units = volMl * 100;
  const totalDoses = amountMg / doseMg;
  document.getElementById("h-res-vol").textContent = volMl.toFixed(3);
  document.getElementById("h-res-units").textContent = Math.round(units * 10) / 10;
  document.getElementById("h-res-doses").textContent = Math.floor(totalDoses);
  document.getElementById("h-result").classList.add("show");
}

// ── CALCULATOR (FULL) ──
function calcFull() {
  const amountVal = parseFloat(document.getElementById("c-pep-amount").value);
  const amountUnit = document.getElementById("c-pep-unit").value;
  const bacWater = parseFloat(document.getElementById("c-bac-water").value);
  const doseVal = parseFloat(document.getElementById("c-dose").value);
  const doseUnit = document.getElementById("c-dose-unit").value;
  const syringeScale = parseInt(document.getElementById("c-syringe").value);
  if (
    isNaN(amountVal) ||
    isNaN(bacWater) ||
    isNaN(doseVal) ||
    bacWater <= 0 ||
    doseVal <= 0
  ) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }
  if (amountUnit === "IU" && doseUnit === "IU") {
    const conc = amountVal / bacWater;
    const volMl = doseVal / conc;
    const syUnits = volMl * syringeScale;
    const total = Math.floor(amountVal / doseVal);
    document.getElementById("c-res-conc").textContent =
      Math.round(conc * 100) / 100 + " IU/mL";
    document.getElementById("c-res-conc-u").textContent = "concentration";
    document.getElementById("c-res-vol").textContent = volMl.toFixed(3) + " mL";
    document.getElementById("c-res-units").textContent =
      Math.round(syUnits * 10) / 10;
    document.getElementById("c-res-syringe-label").textContent =
      "U-" + syringeScale + " units";
    document.getElementById("c-res-doses").textContent = total;
    document.getElementById("c-res-notes").textContent =
      "Based on U-" + syringeScale + " syringe scale.";
  } else {
    const amountMg =
      amountUnit === "mcg"
        ? amountVal / 1000
        : amountUnit === "IU"
          ? amountVal / 3
          : amountVal;
    const doseMg =
      doseUnit === "mcg"
        ? doseVal / 1000
        : doseUnit === "IU"
          ? doseVal / 3
          : doseVal;
    const conc = amountMg / bacWater;
    const volMl = doseMg / conc;
    const syUnits = volMl * syringeScale;
    const total = Math.floor(amountMg / doseMg);
    document.getElementById("c-res-conc").textContent =
      Math.round(conc * 1000) / 1000 + " mg/mL";
    document.getElementById("c-res-conc-u").textContent = "concentration";
    document.getElementById("c-res-vol").textContent = volMl.toFixed(3) + " mL";
    document.getElementById("c-res-units").textContent =
      Math.round(syUnits * 10) / 10;
    document.getElementById("c-res-syringe-label").textContent =
      "U-" + syringeScale + " units";
    document.getElementById("c-res-doses").textContent = total;
    document.getElementById("c-res-notes").textContent =
      volMl < 0.005
        ? "⚠ Very small volume — consider using less BAC water or a U-20 syringe."
        : volMl > 1
          ? "⚠ Volume exceeds 1 mL — may need multiple syringes or more BAC water."
          : "";
  }
  document.getElementById("c-result").classList.add("show");
}

// ── PROTOCOL FILTER ──
function filterProtos(cat) {
  document.querySelectorAll("#proto-list .proto-card").forEach((c) => {
    c.style.display = cat === "all" || c.dataset.cat === cat ? "" : "none";
  });
}
