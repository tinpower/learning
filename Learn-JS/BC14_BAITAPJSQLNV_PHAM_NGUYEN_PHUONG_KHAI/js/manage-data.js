const ManageNhanVien = function () {
  this.listNhanVien = JSON.parse(localStorage.getItem("listNhanVien")) || [];
};

ManageNhanVien.prototype.startApp = function () {
  if (this.listNhanVien.length === 0) {
    return;
  }
  this.listNhanVien = this.listNhanVien.map(function (value) {
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
};

ManageNhanVien.prototype.addNhanVien = function (nhanVien) {
  this.listNhanVien.push(nhanVien);
  localStorage.setItem("listNhanVien", JSON.stringify(this.listNhanVien));
};

ManageNhanVien.prototype.updateNhanVien = function (nhanVien) {
  this.listNhanVien = this.listNhanVien.map(function (value) {
    if (value.username === nhanVien.username) {
      return nhanVien;
    }
    return value;
  });
  localStorage.setItem("listNhanVien", JSON.stringify(this.listNhanVien));
};

ManageNhanVien.prototype.deleteNhanVien = function (username) {
  this.listNhanVien = this.listNhanVien.filter(function (value) {
    return value.username !== username;
  });
  localStorage.setItem("listNhanVien", JSON.stringify(this.listNhanVien));
};

ManageNhanVien.prototype.searchNhanVien = function (search) {
  return this.listNhanVien.filter(function (value) {
    return (
      value.rank().toLowerCase().trim().indexOf(search.toLowerCase().trim()) !==
      -1
    );
  });
};

ManageNhanVien.prototype.selectNhanVien = function (username) {
  return this.listNhanVien.find(function (value) {
    return value.username === username;
  });
};
