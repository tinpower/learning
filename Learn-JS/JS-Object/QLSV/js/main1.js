const exportInfo = () => {
  let getEleID = (myID) => document.getElementById(myID);
  let studentInfo = {
    studentCode: getEleID("txtMaSV").value,
    studentName: getEleID("txtTenSV").value,
    studentType: getEleID("loaiSV").value,
    studentMath: +getEleID("txtDiemToan").value,
    studentLiturature: +getEleID("txtDiemVan").value,
    mediumScore: function () {
      return (this.studentMath + this.studentLiturature) / 2;
    },
    rank: function () {
      let score = this.mediumScore()
      if (score >= 8) {
        return "Excilent"
      }
      if (score >= 6.5) {
        return "Good"
      }
      if (score >= 5) {
        return "Medium"
      }
      if (score >= 3.5) {
        return "Bad"
      }
      return "So bad"
    }
  };
  console.log(studentInfo);
  getEleID("spanTenSV").innerHTML = studentInfo.studentName
  getEleID("spanMaSV").innerHTML = studentInfo.studentCode
  getEleID("spanLoaiSV").innerHTML = studentInfo.studentType
  getEleID("spanDTB").innerHTML = studentInfo.mediumScore()
  getEleID("spanXepLoai").innerHTML = studentInfo.rank()
};

document.getElementById("submit").addEventListener("click", exportInfo);
