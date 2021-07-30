// Object constructor
const Student = function (
  code,
  name,
  email,
  pwd,
  dOB,
  course,
  scoreMath,
  scorePhy,
  scoreChem
) {
  this.code = code;
  this.name = name;
  this.email = email;
  this.pwd = pwd;
  this.dOB = dOB;
  this.course = course;
  this.scoreMath = scoreMath;
  this.scorePhy = scorePhy;
  this.scoreChem = scoreChem;
};

// Add Method
Student.prototype.averageScore = function () {
  return (this.scoreMath + this.scorePhy + this.scoreChem) / 3;
};

Student.prototype.rankType = function () {
  if (this.averageScore() >= 9) {
    return "Xuất sắc";
  }
  if (this.averageScore() >= 8) {
    return "Giỏi";
  }
  if (this.averageScore() >= 6.5) {
    return "Khá";
  }
  if (this.averageScore() >= 5) {
    return "Trung bình";
  }
  if (this.averageScore() >= 3.5) {
    return "Yếu";
  }
  if (this.averageScore() < 3.5) {
    return "Kém";
  }
};

