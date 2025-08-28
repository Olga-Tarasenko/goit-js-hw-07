const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (Object.values(info).every((value) => value !== "")) {
    console.log(info);
    event.target.reset();
  } else {
    alert(`All form fields must be filled in`);
  }
}
