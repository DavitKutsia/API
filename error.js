function validateName(event) {
    const name = event.target.value;
  
    let georgianRegex = /^[\u10D0-\u10FA]+$/;
  
    let nameValid = georgianRegex.test(name);
  
    let error = false;
  
    const errorExist = event.target.parentElement.querySelector(".error");
    if (errorExist) {
      errorExist.remove();
    }
  
    if (!nameValid) {
      error = "მხოლოდ ქართული ასოები";
    } else if (name.length < 2) {
      error = "მინ. 2 ასო";
    } else if (name.length > 20) {
      error = "მაქს. 20 ასო";
    }
  
    if (error) {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
      const errorElement = document.createElement("span");
      errorElement.classList.add("error");
      errorElement.innerText = error;
      event.target.parentElement.appendChild(errorElement);
    } else {
      event.target.classList.remove("invalid");
      event.target.classList.add("valid");
    }
  }
  
  function validateEmail(event) {
    const email = event.target.value;
  
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    let emailValid = emailRegex.test(email);
  
    let error = false;
  
    const errorExist = event.target.parentElement.querySelector(".error");
    if (errorExist) {
      errorExist.remove();
    }
  
    if (!emailValid) {
      error = "ელ.ფოსტა არასწორია";
    }
  
    if (error) {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
      const errorElement = document.createElement("span");
      errorElement.classList.add("error");
      errorElement.innerText = error;
      event.target.parentElement.appendChild(errorElement);
    } else {
      event.target.classList.remove("invalid");
      event.target.classList.add("valid");
    }
  }
  
  function validatePassword(event) {
    const password = event.target.value;
  

    let minLength = 6;
    let hasNumber = /\d/;
    let hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  

    let passwordValid = true;
    let error = false;
  

    const errorExist = event.target.parentElement.querySelector(".error");
    if (errorExist) {
      errorExist.remove();
    }
  

    if (password.length < minLength) {
      passwordValid = false;
      error = "მინ. 6 სიმბოლო";
    } else if (!hasNumber.test(password)) {
      passwordValid = false;
      error = "უნდა შეიცავდეს მინ. 1 რიცხვს";
    } else if (!hasSpecialCharacter.test(password)) {
      passwordValid = false;
      error = "უნდა შეიცავდეს ერთ სიმბოლოს";
    }
  

    if (!passwordValid) {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
      const errorElement = document.createElement("span");
      errorElement.classList.add("error");
      errorElement.innerText = error;
      event.target.parentElement.appendChild(errorElement);
    } else {
      event.target.classList.remove("invalid");
      event.target.classList.add("valid");
    }
  }
  
  function validateRepeatPassword(event) {
    const repeatPassword = event.target.value;
    const originalPassword = document.querySelector(".hero_form #password").value;
  
    let error = false;
  

    const errorExist = event.target.parentElement.querySelector(".error");
    if (errorExist) {
      errorExist.remove();
    }
  

    if (repeatPassword !== originalPassword) {
      error = "პაროლები არ ემთხვევა";
    }
  

    if (error) {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
      const errorElement = document.createElement("span");
      errorElement.classList.add("error");
      errorElement.innerText = error;
      event.target.parentElement.appendChild(errorElement);
    } else {
      event.target.classList.remove("invalid");
      event.target.classList.add("valid");
    }
  }
  
  
  document.querySelector(".hero_form #name").addEventListener("input", validateName);
  document.querySelector(".hero_form #surname").addEventListener("input", validateName);
  document.querySelector(".hero_form #email").addEventListener("input", validateEmail);
  document.querySelector(".hero_form #password").addEventListener("input", validatePassword);
  document.querySelector(".hero_form #confirm_password").addEventListener("input", validateRepeatPassword);

  document.querySelector(".login #email").addEventListener("input", validateEmail);
  document.querySelector(".login #password").addEventListener("input", validatePassword);