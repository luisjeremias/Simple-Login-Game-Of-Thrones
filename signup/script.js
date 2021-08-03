
const Selector = (query) => {
  return document.querySelector(query);
};
const SelectorAll = (query) => {
  return document.querySelectorAll(query);
};

const form = Selector("#form");
const name_ = Selector("#name");
const email = Selector("#email");
const password = Selector("#password");
const confirmPassword = Selector("#confirmpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
const checkInputs = () => {
   const nameValue = name_.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  if (nameValue == "") {
   return setError(name_, "O campo de nome nao pode ficar vazio!");
  } else{
     setSuccess(name_);
  }
  if (emailValue == "") {
    return setError(email, "O campo de email nao pode ficar vazio!");
  } else if (!isEmail(emailValue)) {
   return setError(email, "O email não é valido!");
  } else {
    setSuccess(email);
  }
  if (passwordValue == "") {
   return setError(password, "O campo de senha nao pode ficar vazio!");
  }
  else {
    setSuccess(password);
  }
   if (confirmPasswordValue == "") {
     return setError(
       confirmPassword,
       "O campo de confirmar senha nao pode ficar vazio!"
     );
   } else if (passwordValue !== confirmPasswordValue) {
     return setError(confirmPassword, "As senhas não são iguais!");
   } else {
     setSuccess(confirmPassword);
   }
   let registedEmail = localStorage.getItem('@email')
   if (registedEmail == emailValue) {
     return alert("O Email ja foi cadastrado");
   }
      localStorage.setItem("@name", nameValue);
      localStorage.setItem("@email", emailValue);
      localStorage.setItem("@password", passwordValue);
      window.location.href = "../home/index.html";
 
   
  
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
