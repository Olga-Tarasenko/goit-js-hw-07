const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(event) {
  if (event.target.value.trim() !== "") {
    userName.innerHTML = event.target.value;
  }
}
