const Manager = function() {
  this.arrStudentInfo = JSON.parse(localStorage.getItem("arrStudentInfo")) || [];
}

Manager.prototype.startTable = function () {
  if (this.arrStudentInfo.length === 0) {
    return;
  }
  this.arrStudentInfo = this.arrStudentInfo.map(function (student) {
    return new Student(
      student.code,
      student.name,
      student.email,
      student.pwd,
      student.dOB,
      student.course,
      student.scoreMath,
      student.scorePhy,
      student.scoreChem
    );
  });
}

Manager.prototype.addStudentToTable = function (student) {
  this.arrStudentInfo.push(student)
  localStorage.setItem("arrStudentInfo", JSON.stringify(arrStudentInfo));

}

Manager.prototype.updateStudent = function (student) {
  this.arrStudentInfo.map(function (stu) {
    if (stu.code === code) {
      return student;
    }
    return stu;
  });
}

Manager.prototype.rmStudent = function (datastCode) {
  this.arrStudentInfo = this.arrStudentInfo.filter(function (student) {
    return student.code !== datastCode;
  });
  localStorage.setItem("arrStudentInfo", JSON.stringify(arrStudentInfo));
}

Manager.prototype.searchStudent = function(search) {

  return newArrStudentInfo = arrStudentInfo.filter(function (student) {
    return (
      student.name
        .trim()
        .toLowerCase()
        .indexOf(searchSt.trim().toLowerCase()) !== -1
    );
  });
}