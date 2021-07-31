// Array Global
let listNhanVien = JSON.parse(localStorage.getItem("listNhanVien")) || [];

const getDataNhanVien = (dataNhanVien) => {
  document.getElementById("tknv").value = dataNhanVien.username || "";
  document.getElementById("name").value = dataNhanVien.name || "";
  document.getElementById("email").value = dataNhanVien.email || "";
  document.getElementById("password").value = dataNhanVien.password || "";
  document.getElementById("datepicker").value = dataNhanVien.date || "";
  document.getElementById("luongCB").value = dataNhanVien.salary || "";
  document.getElementById("chucvu").value = dataNhanVien.position || "";
  document.getElementById("gioLam").value = dataNhanVien.workHour || "";
};

let manageNhanVien = new ManageNhanVien();

// Auth
const auth = (nhanVien) => {
  let validator = new Validator();
  let isValid =
    validator.isRequired("tbTKNV", nhanVien.username) &&
    validator.usrCheck("tbTKNV", nhanVien.username);
  isValid &=
    validator.isRequired("tbTen", nhanVien.name) &&
    validator.nameCheck("tbTen", nhanVien.name);
  isValid &=
    validator.isRequired("tbEmail", nhanVien.email) &&
    validator.emailCheck("tbEmail", nhanVien.email);
  isValid &=
    validator.isRequired("tbMatKhau", nhanVien.password) &&
    validator.pwdCheck("tbMatKhau", nhanVien.password);
  isValid &= validator.isRequired("tbNgay", nhanVien.date);
  isValid &=
    validator.isRequired("tbLuongCB", nhanVien.salary) &&
    validator.salaryCheck("tbLuongCB", nhanVien.salary);
  isValid &= validator.isRequired("tbChucVu", nhanVien.position);
  isValid &=
    validator.isRequired("tbGiolam", nhanVien.workHour) &&
    validator.workHourCheck("tbGiolam", nhanVien.workHour);

  if (!isValid) {
    for (let key in validator.errors) {
      if (validator.errors[key]) {
        document.getElementById(key).style.display = "block";
        document.getElementById(key).innerHTML = validator.errors[key];
      }
    }
    return false;
  }
  return true;
};

// Reset form
const resetForm = () => {
  getDataNhanVien({});
  document.getElementById("tknv").disabled = false;
  document.getElementsByClassName("sp-thongbao").style.display = "none";
};

// Add
const addNhanVien = () => {
  let username = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let date = document.getElementById("datepicker").value;
  let salary = +document.getElementById("luongCB").value;
  let position = document.getElementById("chucvu").value;
  let workHour = +document.getElementById("gioLam").value;

  let nhanVien = new NhanVien(
    username,
    name,
    email,
    password,
    date,
    salary,
    position,
    workHour
  );

  let isValid = auth(nhanVien);
  if (!isValid) {
    return;
  }

  manageNhanVien.addNhanVien(nhanVien);
  showTable(manageNhanVien.listNhanVien);
  resetForm();
  closeModalAdd();
};

// Update
const updateNhanVien = () => {
  let username = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let date = document.getElementById("datepicker").value;
  let salary = +document.getElementById("luongCB").value;
  let position = document.getElementById("chucvu").value;
  let workHour = +document.getElementById("gioLam").value;

  let nhanVien = new NhanVien(
    username,
    name,
    email,
    password,
    date,
    salary,
    position,
    workHour
  );
  let isValid = auth(nhanVien);
  if (!isValid) {
    return;
  }
  manageNhanVien.updateNhanVien(nhanVien);
  showTable(manageNhanVien.listNhanVien);
  resetForm();
  closeModalUpdate();
};

const searchNhanVien = () => {
  let search = document.getElementById("searchName").value;
  let newListNhanVien = manageNhanVien.searchNhanVien(search);
  showTable(newListNhanVien);
};

// Delegation
const delegation = (event) => {
  let username = event.target.getAttribute("data-username");
  let action = event.target.getAttribute("data-action");

  if (action === "select") {
    returnDataNhanVien(username);
  }
  if (action === "delete") {
    deleteNhanVien(username);
  }
};

// Select
const returnDataNhanVien = (username) => {
  let dataNhanVien = manageNhanVien.selectNhanVien(username);
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnThemNV").disabled = true;
  getDataNhanVien(dataNhanVien);
};

// Delete
const deleteNhanVien = (username) => {
  manageNhanVien.deleteNhanVien(username);
  showTable(manageNhanVien.listNhanVien);
};

// Show Table
const showTable = (listNhanVien) => {
  let tableDanhSach = document.getElementById("tableDanhSach");
  let html = "";
  for (let i = 0; i < listNhanVien.length; i++) {
    let nv = listNhanVien[i];
    html += `
    <tr>
      <td>${listNhanVien[i].username}</td>
      <td>${listNhanVien[i].name}</td>
      <td>${listNhanVien[i].email}</td>
      <td>${listNhanVien[i].date}</td>
      <td>${listNhanVien[i].position}</td>
      <td>${listNhanVien[i].calCSalary()}</td>
      <td>${listNhanVien[i].rank()}</td>
      <td>
      <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-action="select" data-username="${
        listNhanVien[i].username
      }">Cập nhật</button>
      <button class="btn btn-danger" data-action="delete" data-username="${
        listNhanVien[i].username
      }">Xóa</button>
      </td>
    </tr>
    `;
  }
  tableDanhSach.innerHTML = html;
};

manageNhanVien.startApp();
showTable(manageNhanVien.listNhanVien);

/* const startApp = () => {
  if (listNhanVien.length === 0) {
    return;
  }
  listNhanVien = listNhanVien.map(function (value) {
    return new NhanVien(
      value.username,
      value.name,
      value.email,
      value.password,
      value.date,
      value.salary,
      value.position,
      value.workHour
    );
  });
  showTable(listNhanVien);
};
startApp(); */

// Close modal
const closeModalAdd = () => {
  document.getElementById("btnThemNV").setAttribute("data-toggle", "modal");
  document.getElementById("btnThemNV").setAttribute("data-target", "#myModal");
};

const closeModalUpdate = () => {
  document.getElementById("btnCapNhat").setAttribute("data-toggle", "modal");
  document.getElementById("btnCapNhat").setAttribute("data-target", "#myModal");
};

// DOM
document.getElementById("tableDanhSach").addEventListener("click", delegation);
document.getElementById("btnThemNV").addEventListener("click", addNhanVien);
document.getElementById("btnCapNhat").addEventListener("click", updateNhanVien);
document.getElementById("btnTimNV").addEventListener("click", searchNhanVien);
