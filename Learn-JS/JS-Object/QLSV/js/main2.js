<<<<<<< HEAD
const getEleID = (myID) => document.getElementById(myID);
let manager = new Manager();

manager.startTable()
startTable(manager.arrStudentInfo)

// Function Add
const addStudentToTable = () => {
  let code = getEleID("txtMaSV").value;
  let name = getEleID("txtTenSV").value;
  let email = getEleID("txtEmail").value;
  let pwd = getEleID("txtPass").value;
  let dOB = getEleID("txtNgaySinh").value;
  let course = getEleID("khSV").value;
  let scoreMath = +getEleID("txtDiemToan").value;
  let scorePhy = +getEleID("txtDiemLy").value;
  let scoreChem = +getEleID("txtDiemHoa").value;

  let student = new Student(
    code,
    name,
    email,
    pwd,
    dOB,
    course,
    scoreMath,
    scorePhy,
    scoreChem
  );
  manager.addStudentToTable(student)
  showTable(manager.arrStudentInfo);
  resetForm();
};

const updateStudent = () => {
  let code = getEleID("txtMaSV").value;
  let name = getEleID("txtTenSV").value;
  let email = getEleID("txtEmail").value;
  let pwd = getEleID("txtPass").value;
  let dOB = getEleID("txtNgaySinh").value;
  let course = getEleID("khSV").value;
  let scoreMath = +getEleID("txtDiemToan").value;
  let scorePhy = +getEleID("txtDiemLy").value;
  let scoreChem = +getEleID("txtDiemHoa").value;

  let student = new Student(
    code,
    name,
    email,
    pwd,
    dOB,
    course,
    scoreMath,
    scorePhy,
    scoreChem
  );
  manager.updateStudent(student)
  showTable(manager.arrStudentInfo)
  resetForm();
};

// Function Update Form
const formStudent = (handleValue) => {
  getEleID("txtMaSV").value = handleValue.code || "";
  getEleID("txtTenSV").value = handleValue.name || "";
  getEleID("txtEmail").value = handleValue.email || "";
  getEleID("txtPass").value = "";
  getEleID("txtNgaySinh").value = handleValue.dOB || "";
  getEleID("khSV").value = handleValue.course || "";
  getEleID("txtDiemToan").value = handleValue.scoreMath || "";
  getEleID("txtDiemLy").value = handleValue.scorePhy || "";
  getEleID("txtDiemHoa").value = handleValue.scoreChem || "";
};

// Function Reset
const resetForm = () => {
  getEleID("txtMaSV").value = "";
  getEleID("txtTenSV").value = "";
  getEleID("txtEmail").value = "";
  getEleID("txtPass").value = "";
  getEleID("txtNgaySinh").value = "";
  getEleID("khSV").value = "";
  getEleID("txtDiemToan").value = "";
  getEleID("txtDiemLy").value = "";
  getEleID("txtDiemHoa").value = "";
};

// Fucntion Show Table
const showTable = (arrStudentInfo) => {
  let html = "";
  for (let i = 0; i < arrStudentInfo.length; i++) {
    html += `
    <tr>
      <td>${arrStudentInfo[i].code}</td>
      <td>${arrStudentInfo[i].name}</td>
      <td>${arrStudentInfo[i].email}</td>
      <td>${arrStudentInfo[i].dOB}</td>
      <td>${arrStudentInfo[i].course}</td>
      <td>${arrStudentInfo[i].averageScore().toFixed(2)}</td>
      <td>${arrStudentInfo[i].rankType()}</td>
      <td><button class="btn btn-primary" data-action="edit" data-stCode="${
        arrStudentInfo[i].code
      }">Edit</button>
      <button class="btn btn-danger" data-action="delete" data-stCode="${
        arrStudentInfo[i].code
      }">Delete</button></td>
    </tr>
    `;
  }
  getEleID("tbodySinhVien").innerHTML = html;
};

// Delegation
const delegationTable = (event) => {
  let datastCode = event.target.getAttribute("data-stCode");
  let dataAction = event.target.getAttribute("data-action");
  if (dataAction === "edit") {
    editStudent(datastCode);
  }
  if (dataAction === "delete") {
    rmStudent(datastCode);
  }
};

// Edit Student
const editStudent = (datastCode) => {
  let student = arrStudentInfo.find(function (student) {
    return student.code === datastCode;
  });
  // Disable
  getEleID("txtMaSV").disabled = true;
  formStudent(student);
};

// Delete Student
const rmStudent = (datastCode) => {
  manager.rmStudent(datastCode);
  showTable(manager.arrStudentInfo);
};

// Search Student

const searchStudent = () => {
  let search = getEleID("txtSearch").value;
  let newArrStudentInfo = manager.searchStudent(search);
  showTable(newArrStudentInfo);
};

// DOM Button
getEleID("btnThem").addEventListener("click", addStudentToTable);
getEleID("btnReset").addEventListener("click", resetForm);
getEleID("tbodySinhVien").addEventListener("click", delegationTable);
getEleID("btnCapNhat").addEventListener("click", updateStudent);
getEleID("btnSearch").addEventListener("click", searchStudent);
=======
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
>>>>>>> 5ba2d2da0245f2dbe58313586991c0e7467d5f96
