const soNguyenDuongNhoNhat = () => {
  let m = 0;
  let sum = 0;
  resultBT1 = document.getElementById("kQSoNguyenDuongNhoNhat");
  while (sum < 10000) {
    m += 1;
    sum = sum + m;
  }
  resultBT1.appendChild = "div";
  resultBT1.style.background = "#d1ecf1";
  resultBT1.style.color = "#427da0";
  resultBT1.style.padding = "10px";
  resultBT1.style.borderRadius = "4px";
  resultBT1.innerHTML = `Số nguyên dương nhỏ nhất: ${m}`;
};

const tinhTong2So = () => {
  let n = +document.getElementById("nhapN").value;
  let x = +document.getElementById("nhapX").value;
  let s = 0;
  let t = 1;
  let resultBT2 = document.getElementById("kQSn");
  for (let i = 0; i < n; i++) {
    t = t * x;
    s = s + t;
  }
  resultBT2.appendChild = "div";
  resultBT2.style.background = "#d1ecf1";
  resultBT2.style.color = "#427da0";
  resultBT2.style.padding = "10px";
  resultBT2.style.borderRadius = "4px";
  resultBT2.innerHTML = `Tổng S(n) ${s}`;
};

const tinhGiaiThua = () => {
  let l = +document.getElementById("nhapL").value;
  let a = 1;
  let resultBT3 = document.getElementById("kQGT")
  for (let k = 1; k <= l; k += 1) {
    a *= k;
  }
  resultBT3.appendChild = "div";
  resultBT3.style.background = "#d1ecf1";
  resultBT3.style.color = "#427da0";
  resultBT3.style.padding = "10px";
  resultBT3.style.borderRadius = "4px";
  resultBT3.innerHTML = `Tổng giai thừa là ${a}`;
};

const taoDiv = () => {
  let genDiv = document.querySelector("#genDiv");
  for (let g = 1; g <= 10; g += 1) {
    let createDiv = document.createElement("div");
    genDiv.appendChild(createDiv);
    if (g % 2 == 0) {
      createDiv.style.background = "#d1ecf1";
      createDiv.style.color = "#427da0";
      createDiv.style.padding = "10px";
      createDiv.innerHTML = `Div chẳn ${g}`;
    } else {
      createDiv.style.background = "red";
      createDiv.style.color = "#d1ecf1";
      createDiv.style.padding = "10px";
      createDiv.innerHTML = `Div lẻ ${g}`;
    }
  }
};
