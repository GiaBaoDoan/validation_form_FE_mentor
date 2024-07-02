// variable
const btnSubmit = document.getElementById("btn-submit");
const dismissBtn = document.getElementById("dismiss-message");
const input = document.getElementById("input");
const errorMessage = document.getElementById("errorMessage");
const formStart = document.getElementById("form-start");
const formSuccess = document.getElementById("form-success");
const emailSubmition = document.getElementById("emailSubmition");
emailSubmition.innerText = localStorage.getItem("email");
// functions
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const setError = (message) => {
  errorMessage.innerText = message;
  input.classList.add("error");
};
const noError = () => {
  errorMessage.innerText = "";
  input.classList.remove("error");
};
const handelOnchange = (e) => {
  !validateEmail(e.target.value) ? setError("Invalid email!") : noError();
};
const dismissMessage = (e) => {
  e.preventDefault();
  formStart.classList.remove("hidden");
  formSuccess.classList.add("hidden");
};
const handelSubmit = (e) => {
  e.preventDefault();
  if (!validateEmail(input.value)) {
    setError("Invalid email!");
  } else {
    noError();
    localStorage.setItem("email", input.value);
    emailSubmition.innerText = input.value;
    formStart.classList.add("hidden");
    formSuccess.classList.remove("hidden");
  }
};
input.addEventListener("change", handelOnchange);
btnSubmit.addEventListener("click", handelSubmit);
