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
