const registrationForm = document.querySelector(".hero_form");
const loginForm = document.querySelector(".login");
const goLogin = document.querySelector('a');

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const previousError = registrationForm.querySelector(".error");
  if (previousError) {
    previousError.remove();
  }

  const user = {
    name: registrationForm.name.value,
    surname: registrationForm.surname.value,
    email: registrationForm.email.value,
    password: registrationForm.password.value,
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = users.find((u) => u.email === user.email);

  if (emailExists) {
    registrationForm.email.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "ელ.ფოსტა უკვე გამოყენებულია";
    registrationForm.email.parentElement.appendChild(errorElement);
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("თქვენ წარმატებით დარეგისტრირდით");
    const headerName = document.querySelector('.headerName');
    headerName.textContent = user.name + " " + user.surname;
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const previousError = loginForm.querySelector(".error");
  if (previousError) {
    previousError.remove();
  }

  const user = {
    email: loginForm.email.value,
    password: loginForm.password.value,
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.find((u) => u.email === user.email && u.password === user.password);

  if (userExists) {
    localStorage.setItem("currentUser", JSON.stringify(userExists));
    alert("თქვენ წარმატებით დაავტორიზირდით");
    const headerName = document.querySelector('.headerName');
    headerName.textContent = userExists.name + " " + userExists.surname;
    loginForm.style.display = "none";
    registrationForm.style.display = "block";
  } else {
    loginForm.email.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "არასწორი ელ.ფოსტა ან პაროლი";
    loginForm.email.parentElement.appendChild(errorElement);
  }

  axios.post('https://training-api-three.vercel.app/api/login', user)
    .then(response => {
      console.log("თქვენ წარმატებით დაავტორიზირდით", response.data);
    })
    .catch(error => {
      console.error("რაღაც პრობლემა არის დაფიქსირებული", error);
    });
});

const isLoggedIn = JSON.parse(localStorage.getItem("currentUser"));
if (isLoggedIn) {
  document.querySelector("#login_btn").innerText = isLoggedIn.name + " " + isLoggedIn.surname;
}

goLogin.addEventListener("click", (event) => {
  event.preventDefault();
  registrationForm.style.display = "none";
  loginForm.style.display = "block";
});
