const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let getUser = JSON.parse(localStorage.getItem("userstest"));

  for (let i = 0; i < getUser.length; i++) {
   if(getUser[i].email === email && getUser[i].password === password){
    localStorage.setItem("role", getUser[i].roll);
    window.location.href = '../index.html'
   }
    
  }
});

let getUser = JSON.parse(localStorage.getItem("userstest"));
