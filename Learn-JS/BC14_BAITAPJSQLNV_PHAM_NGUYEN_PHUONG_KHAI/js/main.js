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

NhanVien.prototype.calCSalary = () => {
  if (this.position == "Sếp") {
    return this.salary * 3 * this.workHour;
  }
  if (this.position == "Trưởng phòng") {
    return this.salary * 2 * this.workHour;
  }
  if (this.position == "Nhân viên") {
    return this.salary * this.workHour;
  }
};

const listNhanVien = [];

const getNhanVien = () => {
  let username = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let date = document.getElementById("datepicker").value;
  let salary = document.getElementById("luongCB").value;
  let position = document.getElementById("chucvu").value;
  let workHour = document.getElementById("gioLam").value;

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
  showTable();
};

const showTable = () => {
  let tableDanhSach = document.getElementById("tableDanhSach");
  let html = "";
  for (let i = 0; i < listNhanVien.length; i++) {
    let nv = listNhanVien[i];
    html += `
    <tr>
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
      </td>
    </tr>
    `;
  }
  tableDanhSach.innerHTML = html;
};

const delegation = (event) => {
  let username = event.target.getAttribute("data-username");
  listNhanVien = listNhanVien.filter(function (nv) {
    return nv.username !== username;
  });
  showTable();
};

document.getElementById("tableDanhSach").addEventListener("click", delegation);
document.getElementById("btnThemNV").addEventListener("click", getNhanVien);
