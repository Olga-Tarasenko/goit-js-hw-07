const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(event) {
  const value = event.target.value.trim();
  if (value !== "") {
    userName.textContent = value;
  } else {
    userName.textContent = "Anonymous";
  }
}
