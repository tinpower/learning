// Object Contructor
const getEleID = (myID) => document.getElementById(myID);
const getIDHTML = (myIDHTML) => document.getElementById(myIDHTML).innerHTML;
const Student = function (
  studentCode,
  studentName,
  studentEmail,
  studenPass,
  studenDOB,
  studenCourse,
  scoreMath,
  scorePhys,
  scoreChem
) {
  this.studentCode = studentCode;
  this.studentName = studentName;
  this.studentEmail = studentEmail;
  this.studentPass = studenPass;
  this.studentDOB = studenDOB;
  this.studentCourse = studenCourse;
  this.scoreMath = scoreMath;
  this.scorePhys = scorePhys;
  this.scoreChem = scoreChem;
};

Student.prototype.averageScore = function () {
  return Number.parseFloat((this.scoreChem + this.scoreMath + this.scorePhys) / 3).toFixed(2);
};

Student.prototype.rank = function () {
  let rankScore = this.averageScore()
  if (rankScore >= 9) {
    return "Xuất sắc"
  }
  if (rankScore >= 8) {
    return "Giỏi"
  }
  if (rankScore >= 6.5) {
    return "Khá"
  }
  if (rankScore >= 5) {
    return "Trung Bình"
  }
  if (rankScore >= 3.5) {
    return "Yếu"
  }
  return "Kém"
}

let arrStudent = [];

const studentGetInfo = () => {
  let studentName = getEleID("txtTenSV").value;
  let studentEmail = getEleID("txtEmail").value;
  let studentCode = getEleID("txtMaSV").value;
  let studentPass = getEleID("txtPass").value;
  let studentDOB = getEleID("txtNgaySinh").value;
  let studentCourse = getEleID("khSV").value;
  let scoreMath = +getEleID("txtDiemToan").value;
  let scorePhys = +getEleID("txtDiemLy").value;
  let scoreChem = +getEleID("txtDiemHoa").value;
  let student = new Student(
    studentCode,
    studentName,
    studentEmail,
    studentDOB,
    studentPass,
    studentCourse,
    scoreMath,
    scorePhys,
    scoreChem
  );
  arrStudent.push(student);
  console.log(arrStudent);
  addStudent();
};

const addStudent = () => {
  let tbodySinhVien = getEleID("tbodySinhVien");
  let html = "";
  for (let i = 0; i < arrStudent.length; i += 1) {
    let list = arrStudent[i];
    html += `
    <tr>
    <td>${list.studentCode}</td>
    <td>${list.studentName}</td>
    <td>${list.studentEmail}</td>
    <td>${list.studentDOB}</td>
    <td>${list.studentCourse}</td>
    <td>${list.averageScore()}</td>
    <td>${list.rank()}</td>
    </tr>
    `;
  }
  tbodySinhVien.innerHTML = html;
};

getEleID("btnThem").addEventListener("click", studentGetInfo);
