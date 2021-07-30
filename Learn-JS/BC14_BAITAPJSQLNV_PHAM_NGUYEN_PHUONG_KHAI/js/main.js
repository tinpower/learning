// Object constructor
const NhanVien = function (
  username,
  name,
  email,
  password,
  date,
  salary,
  position,
  workHour
) {
  this.username = username;
  this.name = name;
  this.email = email;
  this.password = password;
  this.date = date;
  this.salary = salary;
  this.position = position;
  this.workHour = workHour;
};

NhanVien.prototype.calCSalary = function () {
  if (this.position === "Sếp") {
    return new Intl.NumberFormat("vn-VN", {
      style: "currency",
      currency: "VND",
    }).format(this.salary * 3 * this.workHour);
  }
  if (this.position === "Trưởng phòng") {
    return new Intl.NumberFormat("vn-VN", {
      style: "currency",
      currency: "VND",
    }).format(this.salary * 2 * this.workHour);
  }
  if (this.position === "Nhân viên") {
    return new Intl.NumberFormat("vn-VN", {
      style: "currency",
      currency: "VND",
    }).format(this.salary * this.workHour);
  }
};

NhanVien.prototype.rank = function () {
  if (this.workHour >= 192) {
    return "Xuất sắc";
  }
  if (this.workHour >= 176) {
    return "Giỏi";
  }
  if (this.workHour >= 160) {
    return "Khá";
  }
  if (this.workHour < 160) {
    return "Trung bình";
  }
};

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

// Reset form
const resetForm = () => {
  getDataNhanVien({});
  document.getElementById("tknv").disabled = false;
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
  listNhanVien.push(nhanVien);
  localStorage.setItem("listNhanVien", JSON.stringify(listNhanVien));
  showTable(listNhanVien);
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

  listNhanVien = listNhanVien.map(function (value) {
    if (value.username === username) {
      return nhanVien;
    }
    return value;
  });
  localStorage.setItem("listNhanVien", JSON.stringify(listNhanVien));
  showTable(listNhanVien);
  resetForm();
  closeModalUpdate();
};

const searchNhanVien = () => {
  let search = document.getElementById("searchName").value;
  let newListNhanVien = listNhanVien.filter(function (value) {
    return (
      value.rank().toLowerCase().trim().indexOf(search.toLowerCase().trim()) !==
      -1
    );
  });
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
  let dataNhanVien = listNhanVien.find(function (value) {
    return value.username === username;
  });
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnThemNV").disabled = true;
  getDataNhanVien(dataNhanVien);
};

// Delete
const deleteNhanVien = (username) => {
  listNhanVien = listNhanVien.filter(function (value) {
    return value.username !== username;
  });
  localStorage.setItem("listNhanVien", JSON.stringify(listNhanVien));
  showTable(listNhanVien);
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

const startApp = () => {
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
startApp();

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
