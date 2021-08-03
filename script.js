let logEmail = localStorage.getItem("@email");
let logPassword = localStorage.getItem("@password");
let session = localStorage.getItem("@name");
if (session) {
  window.location.href = "./home/index.html";
}
const Selector = (query) => {
  return document.querySelector(query);
};
const SelectorAll = (query) => {
  return document.querySelectorAll(query);
};

const form = Selector("#form");
const email = Selector("#email");
const password = Selector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
const checkInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue == "") {
    return setError(email, "O campo de email nao pode ficar vazio!");
  } else if (!isEmail(emailValue)) {
    return setError(email, "O email não é valido!");
  } else {
    setSuccess(email);
  }
  if (passwordValue == "") {
    return setError(password, "O campo de senha nao pode ficar vazio!");
  } else {
    setSuccess(password);
  }

  if (emailValue !== logEmail) {
    return alert('O email nao existe')
  }else if(passwordValue !== logPassword){
    return  alert('A senha esta incorreta')
  }else{
    window.location.href = "./home/index.html";
  }
};

const setError = (input, error) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = error;
  formControl.className = "input-container error";
};
const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "input-container success";
};
const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
