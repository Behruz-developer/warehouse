const register = document.getElementById("register");

register.addEventListener("submit", (e) => {
  e.preventDefault();

  const firsName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("userstest")) || [];

  let checkUser = false;
  for (let i = 0; i < user.length; i++) {
    if (user[i].email === email) {
      checkUser = true;
    }
  }

  if (checkUser) {
    alert("email royxatdan otgan");
    return;
  }
  const newUser = {
    firsName: firsName,
    email: email,
    password: password,
    
  };

  user.push(newUser);
  localStorage.setItem("userstest", JSON.stringify(user));
  window.location.href = "../pages/login.html";

});
