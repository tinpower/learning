const showInfo = () => {
  let studentInfo = {
    studentCode: document.getElementById("txtMaSV").value,
    studentName: document.getElementById("txtTenSV").value,
    studentType: document.getElementById("loaiSV").value,
    studentScoreMath: +document.getElementById("txtDiemToan").value,
    studentScoreLiterature: +document.getElementById("txtDiemVan").value,
    studentScoreEnglish: +document.getElementById("txtDiemAnhVan").value,
    averageScore: function () {
      return (
        (this.studentScoreMath +
          this.studentScoreLiterature +
          this.studentScoreEnglish) /
        3
      );
    },
    rankStudent: function () {
      let averageScoreNumber = this.averageScore()
      if (averageScoreNumber >= 8) {
        return "Giỏi";
      }
      if (averageScoreNumber >= 6.5) {
        return "Khá";
      }
      if (averageScoreNumber >= 5) {
        return "Trung bình";
      }
      if (averageScoreNumber >= 3.5) {
        return "Yếu";
      }
      return "Kém";
    },
  };
  document.getElementById("spanMaSV").innerHTML = studentInfo.studentCode;
  document.getElementById("spanTenSV").innerHTML = studentInfo.studentName;
  document.getElementById("spanLoaiSV").innerHTML = studentInfo.studentType;
  document.getElementById("spanDTB").innerHTML = studentInfo.averageScore();
  document.getElementById("spanXepLoai").innerHTML = studentInfo.rankStudent();
};

document.getElementById("submit").addEventListener("click", showInfo);
