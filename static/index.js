const textbox = document.getElementById("textbox");
const result = document.getElementById("result");

textbox.addEventListener("keyup", translate);
textbox.addEventListener("change", translate);

function translate() {
  result.innerHTML = textbox.value.replace(/[aeiuoáéíóú]/g, "i").replace(/[AEIOUÁÉÍÓÚ]/g, "I");
}