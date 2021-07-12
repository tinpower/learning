const soNguyenDuongNhoNhat = () => {
  let m = 0;
  let sum = 0;

  while (sum < 1000) {
    m += 1;
    sum = sum + m;
    document
      .getElementById("kQSoNguyenDuongNhoNhat")
      .innerHTML(`Tổng số nguyên dương nhỏ nhất < 1000 là ${m}`);
  }
};

const tinhTong2So = () => {
  let n = +document.getElementById("nhapN").value;
  let x = +document.getElementById("nhapX").value;
  let s = 0;
  let t = 1;
  for (let i = 0; i < n; i++) {
    t = t * x;
    s = s + t;
  }
  document.getElementById("kQSn").innerHTML(`Tổng S(n) ${s}`);
};

const tinhGiaiThua = () => {
  let l = +document.getElementById("nhapL").value;
  let a = 1;
  let showResultBT2 = document.getElementById("kQGT").innerHTML(`Giai thua la ${a}`);
  for (let k = 1; k <= l; k += 1) {
    a *= k;
  }
  return showResultBT2;
};

const taoDiv = () => {
  let createDiv = document.createElement("DIV");
  for (let g = 0; g < 10; g += 1) {
    if (g % 2 == 0) {
      return "a"
    } else if (g % 2 != 0) {
      return "b"
    }
  }
};

