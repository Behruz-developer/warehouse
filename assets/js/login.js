let checkUsers = JSON.parse(localStorage.getItem("userstest"));

if (!checkUsers || checkUsers.length === 0) {
  let baseAdmin = [{
    firsName: "Behruz", 
    email: "behruzsodiqjonov@gmail.com", 
    password: "1111", 
    roll: "admin"
  }];
  localStorage.setItem("userstest", JSON.stringify(baseAdmin));
}

const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase(); // Kichik harfga o'tkazildi
  const password = document.getElementById("password").value.trim();

  let getUser = JSON.parse(localStorage.getItem("userstest")) || [];

  // --- XATONI TOPISH UCHUN KONSOL ---
  console.log("1. Kiritilgan email:", email);
  console.log("2. Kiritilgan parol:", password);
  console.log("3. LocalStorage dan olingan baza:", getUser);
  // ----------------------------------

  let isUserFound = false;

  for (let i = 0; i < getUser.length; i++) {
    if (getUser[i].email.toLowerCase() === email && getUser[i].password === password) {
      isUserFound = true;
      localStorage.setItem("role", getUser[i].roll);
      window.location.href = "../index.html";
      break;
    }
  }

  if (!isUserFound) {
    alert("Email yoki parol noto'g'ri kiritildi!");
  }
});


