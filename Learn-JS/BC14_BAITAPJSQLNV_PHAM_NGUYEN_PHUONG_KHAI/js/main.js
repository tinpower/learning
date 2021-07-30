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

<<<<<<< HEAD
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
=======
NhanVien.prototype.calCSalary = () => {
  if (this.position == "Sếp") {
    return this.salary * 3 * this.workHour;
  }
  if (this.position == "Trưởng phòng") {
    return this.salary * 2 * this.workHour;
  }
  if (this.position == "Nhân viên") {
    return this.salary * this.workHour;
>>>>>>> 5ba2d2da0245f2dbe58313586991c0e7467d5f96
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
let listNhanVien = [];

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

// Get data
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
<<<<<<< HEAD
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
  getDataNhanVien(dataNhanVien);
};

// Delete
const deleteNhanVien = (username) => {
  listNhanVien = listNhanVien.filter(function (value) {
    return value.username !== username;
  });
  showTable(listNhanVien);
};

// Show Table
const showTable = (listNhanVien) => {
=======
  showTable();
};

const showTable = () => {
>>>>>>> 5ba2d2da0245f2dbe58313586991c0e7467d5f96
  let tableDanhSach = document.getElementById("tableDanhSach");
  let html = "";
  for (let i = 0; i < listNhanVien.length; i++) {
    let nv = listNhanVien[i];
    html += `
    <tr>
<<<<<<< HEAD
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
=======
      <td>${nv.username}</td>
      <td>${nv.name}</td>
      <td>${nv.email}</td>
      <td>${nv.date}</td>
      <td>${nv.position}</td>
      <td>${nv.calCSalary()}</td>
      <td>${nv.workHour}</td>
      <td>
      <button class="btn btn-primary">Cập nhật</button>
      <button class="btn btn-danger" data-username="${nv.username}">Xóa</button>
>>>>>>> 5ba2d2da0245f2dbe58313586991c0e7467d5f96
      </td>
    </tr>
    `;
  }
  tableDanhSach.innerHTML = html;
};

<<<<<<< HEAD
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
=======
const delegation = (event) => {
  let username = event.target.getAttribute("data-username");
  listNhanVien = listNhanVien.filter(function (nv) {
    return nv.username !== username;
  });
  showTable();
};

document.getElementById("tableDanhSach").addEventListener("click", delegation);
document.getElementById("btnThemNV").addEventListener("click", getNhanVien);
>>>>>>> 5ba2d2da0245f2dbe58313586991c0e7467d5f96
