const background = document.querySelector("body");
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", handlerClick);

btn.style.backgroundColor = "#4e75ff";
btn.style.width = "148px";
btn.style.height = "40px";
btn.style.borderRadius = "8px";
btn.style.border = "none";
btn.style.color = "#fff";
btn.style.fontWeight = "500";
btn.style.fontSize = "16px";
btn.style.letterSpacing = "0.04em";

function handlerClick() {
  color.innerHTML = getRandomHexColor();
  background.style.backgroundColor = color.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
