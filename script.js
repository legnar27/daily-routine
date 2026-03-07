// --------------------- CONTRASEÑA SIMPLE ------------------------------
const PASSWORD = "lino-2002";
let acceso = prompt("Ingresa contraseña:");
if (acceso !== PASSWORD) {
  document.body.innerHTML = "<h1>Acceso denegado</h1>";
}
// ------------------ ANIMACION SUAVE DETAILS --------------------------
document.querySelectorAll("details").forEach((details) => {
  const content = details.querySelector(".content");

  details.addEventListener("click", (e) => {
    // evitar que los checkboxes disparen la animación
    if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") return;

    e.preventDefault();

    if (details.open) {
      content.style.maxHeight = content.scrollHeight + "px";

      requestAnimationFrame(() => {
        content.style.maxHeight = "0px";
      });

      content.addEventListener(
        "transitionend",
        () => {
          details.open = false;
        },
        { once: true },
      );
    } else {
      details.open = true;

      content.style.maxHeight = "0px";

      requestAnimationFrame(() => {
        content.style.maxHeight = content.scrollHeight + "px";
      });
    }
  });
});
// CONSEGUIR FECHA ACTUAL
const today = new Date().toLocaleDateString();
// COMPROBAR CAMBIO DIA
const savedDate = localStorage.getItem("routineDate");
if (savedDate !== today) {
  localStorage.clear();
  localStorage.setItem("routineDate", today);
}
//------------------- GUARDAR INFO CHECKS MARCADOS ---------------------
const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((checkbox, index) => {
  const key = "checkbox_" + index;
  // CARGAR ESTADO GUARDADO
  const saved = localStorage.getItem(key);
  if (saved === "true") {
    checkbox.checked = true;
  }
  // GUARDAR CAMBIO
  checkbox.addEventListener("change", () => {
    localStorage.setItem(key, checkbox.checked);
  });
});
// -------------------- ESCRIBIR FEHCA ---------------------------------
const formatoElegante = new Intl.DateTimeFormat("es-ES", { dateStyle: "full" });
document.querySelector(".fecha").textContent = formatoElegante.format(
  new Date(),
);
