const layDSDiem = () => {
  let scoreEls = document.getElementsByClassName("td-scores");
  let scores = Array.from(scoreEls).map(function (el) {
    return +el.innerHTML;
  });
  return scores;
};

const xepLoaiHocLuc = (scores) => {
  if (scores > 8) {
    return "Giỏi";
  }
  if (scores > 6.5) {
    return "Khá";
  }
  if (scores > 5) {
    return "Trung Bình";
  }
  if (scores > 3.5) {
    return "Yếu";
  }
  if (scores > 3.5) {
    return "Kém";
  }
};

const timSVCaoDiemNhat = () => {
  scores = layDSDiem();
  // let highestScore = scores[0]
  // for (let i = 1; i < scores.length; i++) {
  //   if (scores[i] > highestScore) {
  //     highestScore = scores[i]
  //   }
  // }
  var highestScore = Math.max.apply(null, scores);
  alert(`Diem so lon nhat la ${highestScore}`);
};

const timSVThapDiemNhat = () => {
  scores = layDSDiem();
  let lowestScore = Math.min.apply(null, scores);
  alert(`Diem so lon nhat la ${lowestScore}`);
};

const timSVGioi = () => {
  scores = layDSDiem();
  let scoreExcilent = scores.filter(function (value) {
    return xepLoaiHocLuc(value) === "Giỏi";
  });
  let studentExcilent = scoreExcilent.length;
  alert(`Trường có ${studentExcilent} học sinh giỏi`);
};

const dSHSTrungBinh = () => {
  scores = layDSDiem();
  let scoreOver5 = scores.filter(function (value) {
    return value > 5;
  });
  alert(`Danh sách các điểm lớn hơn 5: ${scoreOver5.join(" - ")}`);
};

const sapXepTangDan = () => {
  scores = layDSDiem();
  scores.sort(function (a, b) {
    return a - b
  })
  alert(`Danh sách điểm theo tăng dần: ${scores.join(" - ")}`)
}

document
  .getElementById("btnSVCaoDiemNhat")
  .addEventListener("click", timSVCaoDiemNhat);
document
  .getElementById("btnSVThapDiemNhat")
  .addEventListener("click", timSVThapDiemNhat);
document.getElementById("btnSoSVGioi").addEventListener("click", timSVGioi);
document.getElementById("btnSVDiemHon5").addEventListener("click", dSHSTrungBinh);
document.getElementById("btnSapXepTang").addEventListener("click", sapXepTangDan);
