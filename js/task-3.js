const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(event) {
  userName =
    event.target.value.trim() === ""
      ? userName.textContent
      : (userName.innerHTML = event.target.value);
}
