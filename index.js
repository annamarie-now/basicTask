let x = true;
const y = document.getElementById("title");
function colourEffect() {
  if (x) y.style.color = "blue";
  else y.style.color = "red";
  x = !x;
}
window.setInterval(colourEffect, 1000);
