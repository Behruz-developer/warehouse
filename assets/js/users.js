

function renderUsers() {
  let users = JSON.parse(localStorage.getItem("userstest")) || [];
  const userGrid = document.querySelector(".users-grid");
  userGrid.innerHTML = "";

  if (users.length === 0) {
    userGrid.innerHTML =
      '<p style="padding: 20px;">Hozircha xodimlar yo\'q</p>';
    return;
  }

  let htmlContent = "";

users.forEach((e, i) => {
    let firstLetter = e.firsName ? e.firsName.charAt(0).toUpperCase() : "U";

    htmlContent += `
            <div class="user-card">
                <div class="user-header">
                    <div class="user-avatar">${firstLetter}</div>
                    <div class="user-info">
                        <h4>${e.firsName}</h4>
                        <span class="role-badge menejer">${e.roll}</span>
                    </div>
                </div>
                <div class="user-body">
                    <p><strong>Email:</strong> ${e.email}</p>
                    <p><strong>Holati:</strong> <span class="text-success">Faol</span></p>
                </div>
                <div class="user-actions">
                    <button class="btn-danger" onclick="deleteUser(${i})">O'chirish</button>
                </div>
            </div>
        `;
  });
  
  // Sikldan tashqarida yoziladi:
  userGrid.innerHTML = htmlContent;

}

function addUser() {
  let userRole = localStorage.getItem("role");
  
  if (userRole !== "admin") {
      alert("Siz odam qo'sha olmaysiz!");
      return;
  }
  const nameInput = document.getElementById("user-name");
  const emailInput = document.getElementById("user-email");
  const passwordInput = document.getElementById("user-password");
  const roleInput = document.getElementById("user-role");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const roll = roleInput.value;

  let users = JSON.parse(localStorage.getItem("userstest")) || [];

  let checkUser2 = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      checkUser2 = true;
    }
  }

  if (checkUser2) {
    alert("email royxatdan otgan");
    return;
  }

  const newUser = {
    firsName: name,
    email: email,
    password: password,
    roll: roll,
  };

  users.push(newUser);
  localStorage.setItem("userstest", JSON.stringify(users));
  renderUsers();

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  roleInput.value = "admin";
}

function deleteUser(index) {
  let userRole = localStorage.getItem("role");
  if (userRole !== "admin") {
      alert("Sizda o'chira olmaysiz!");
      return; 
  }
  let users = JSON.parse(localStorage.getItem("userstest")) || [];

  users.splice(index, 1);

  localStorage.setItem("userstest", JSON.stringify(users));
  renderUsers();
}
renderUsers();
