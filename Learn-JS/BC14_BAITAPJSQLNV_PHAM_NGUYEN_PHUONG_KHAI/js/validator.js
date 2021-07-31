const Validator = function () {
  this.errors = {};
};

Validator.prototype.isRequired = function (name, value) {
  if (!value) {
    this.errors[name] = "Vui lòng không để trống và điền đúng";
    return false;
  }
  return true;
};

// Username
Validator.prototype.usrCheck = function (name, value) {
  if (!/^[0-9].{5,9}$/.test(value)) {
    this.errors[name] = "Tài khoản tối đa 4 - 6 ký số, không để trống";
    return false;
  }
  return true;
};

// Name
Validator.prototype.nameCheck = function (name, value) {
  if (!/[a-zA-Z]$/.test(value)) {
    this.errors[name] = "Họ và tên chỉ cho phép A-Z";
    return false;
  }
  return true;
};

// Email
Validator.prototype.emailCheck = function (name, value) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    this.errors[name] = "Định dạng email không đúng";
    return false;
  }
  return true;
};

// Password
Validator.prototype.pwdCheck = function (name, value) {
  if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/.test(value)
  ) {
    this.errors[name] =
      "Mật Khẩu 6-10 ký tự. Ít nhất 1 chữ, 1 số, 1 ký tự đặc biệt";
    return false;
  }
  return true;
};

// Salary
Validator.prototype.salaryCheck = function (name, value) {
  if (/^[0-9]*$/.test(value) && value > 20000000) {
    this.errors[name] = "Tối thiểu 1.000.000 và tối đa 20.000.000";
    return false;
  }
  if (/^[0-9]*$/.test(value) && value < 1000000) {
    this.errors[name] = "Tối thiểu 1.000.000 và tối đa 20.000.000";
    return false;
  }
  return true;
};

// Work hour
Validator.prototype.workHourCheck = function (name, value) {
  if (/^[0-9]*$/.test(value) && value > 200) {
    this.errors[name] = "Nhập giờ làm từ 80 đến 200";
    return false;
  }
  if (/^[0-9]*$/.test(value) && value < 80) {
    this.errors[name] = "Nhập giờ làm từ 80 đến 200";
    return false;
  }
  return true;
};
