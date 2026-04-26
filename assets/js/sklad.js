document.addEventListener("DOMContentLoaded", () => {
  loadUsers();
  renderSklad();
});
function loadUsers() {
  const selectElement = document.getElementById("sklad-role");

  const users = JSON.parse(localStorage.getItem("userstest")) || [];

  if (users.length === 0) {
    selectElement.innerHTML =
      '<option value="" disabled selected>Xodimlar topilmadi. Avval xodim qo\'shing!</option>';
    return;
  }

  let optionsHtml =
    '<option value="" disabled selected>Xodimni tanlang</option>';

  users.forEach((element) => {
    optionsHtml += `<option value=${element.firsName} >${element.firsName} — (${element.roll})</option>`;
  });

  selectElement.innerHTML = optionsHtml;
}

function renderSklad() {
  let sklad = JSON.parse(localStorage.getItem("sklad")) || [];
  const htmlGrid = document.querySelector(".sklad-grid");

  htmlGrid.innerHTML = "";

  if (sklad.length === 0) {
    htmlGrid.innerHTML =
      '<p style="padding: 20px;">Hozircha omborlar yo\'q</p>';
    return;
  }
  let htmlSklad = "";
  sklad.forEach((e, id) => {
    htmlSklad += `
                <div class="sklad-card">
                <div class="sklad-card-header">
                    <h4>${e.skladName}</h4>
                </div>
                <div class="sklad-card-body">
                    <p><strong>Masul xodim:</strong>${e.skladResponsible}</p>
                    <p><strong>Mahsulotlar soni:</strong> 34 ta</p>
                </div>
                <div class="sklad-card-actions">
                    <button class="btn-outline">Kirish</button>
                    <button class="btn-danger" onclick="deleteSklad(${id})">O'chirish</button>
                </div>
            </div>
    `;
    htmlGrid.innerHTML = htmlSklad;
  });
}

const addButton = document.getElementById("save-btn");
const canceleutton = document.getElementById("cancel-btn");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const skladName = document.getElementById("sklad-name").value;
  const skladResponsible = document.getElementById("sklad-role").value;

  let sklad = JSON.parse(localStorage.getItem("sklad")) || [];
  if (skladName === "" || skladResponsible === "") {
    alert("iltimos malumotlarni to'ldiring");
    return;
  }
  const skladObj = {
    skladName: skladName,
    skladResponsible: skladResponsible,
  };

  sklad.push(skladObj);
  localStorage.setItem("sklad", JSON.stringify(sklad));

  console.log(sklad);
  renderSklad();
});

function deleteSklad(id) {
  let userRole = localStorage.getItem("role");
  if (userRole !== "admin") {
    alert("Siz o'chira olmaysiz!");
    return;
  }
  let sklad = JSON.parse(localStorage.getItem("sklad")) || [];
  sklad.splice(id, 1);
  localStorage.setItem("sklad", JSON.stringify(sklad));
  renderSklad();
}
