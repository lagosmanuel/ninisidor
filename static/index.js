const textbox = document.getElementById("textbox");
const result = document.getElementById("result");
const hiden = document.getElementById("hiden");
const copy = document.getElementById("copy");
const copied = document.getElementById("copied");

textbox.addEventListener("keyup", translate);
textbox.addEventListener("change", translate);
copy.addEventListener("click", copytext)

function translate() {
  const out = textbox.value.replace(/[aeiuoáéíóú]/g, "i").replace(/[AEIOUÁÉÍÓÚ]/g, "I");
  result.innerHTML = out;
  hiden.value = out;
}

function copytext() {
  hiden.select();
  hiden.setSelectionRange(0, 99999);

  document.execCommand("copy");

  transition();
}

function transition() {
  copied.classList.add("copied-on");

  setTimeout(() => {
    copied.classList.remove("copied-on");
  }, 1000);
}
