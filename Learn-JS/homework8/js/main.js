// Tổng các số dương trong mảng
console.log("------------------Bài tập 1------------------");
const question1 = () => {
  let valueNumber = [-128, -126, -124, -123, -50, -1, 2, 3, 8, 100, 234];
  let total = 0;
  for (let i = 0; i < valueNumber.length; i++) {
    if (0 < valueNumber[i]) {
      total += valueNumber[i];
    }
  }
  console.log(`Tổng các số dương là ${total}`);
};
question1();

// Đếm có bao nhiêu số dương trong mảng
console.log("------------------Bài tập 2------------------");
const question2 = () => {
  let valueNumber = [-128, -126, -124, -123, -50, -1, 2, 3, 8, 100, 234];
  let count = [];
  for (let j = 0; j < valueNumber.length; j++) {
    if (0 < valueNumber[j]) {
      count.push(valueNumber[j]);
    }
  }
  console.log(`Có ${count.length} số dương trong mảng`);
};
question2();

// Tìm số nhỏ nhất trong mảng
console.log("------------------Bài tập 3------------------");
const question3 = () => {
  let valueNumber = [-128, -126, -124, -123, -50, -1, 2, 3, 8, 100, 234];
  console.log(`Số nhỏ nhất trong mảng là ${Math.min(...valueNumber)}`);
};
question3();

// Tìm số dương nhỏ nhất trong mảng
console.log("------------------Bài tập 4------------------");
const question4 = () => {
  let valueNumber = [-128, -126, -124, -123, -50, -1, 2, 3, 8, 100, 234];
  let soDuongNhoNhat = [];
  for (let r = 0; r < valueNumber.length; r++) {
    if (0 < valueNumber[r]) {
      soDuongNhoNhat.push(valueNumber[r]);
    }
  }
  console.log(`Số nhỏ nhất trong mảng là ${Math.min(...soDuongNhoNhat)}`);
};
question4();

// Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
console.log("------------------Bài tập 5------------------");
const question5 = () => {
  let valueNumber = [-128, 12, 4, -126, -123, -50, -1, 2, 3, 8, 100, 234, 245];
  let numberChoice = [];
  for (let m = 0; m < valueNumber.length; m++) {
    if (valueNumber[m] % 2 == 0) {
      numberChoice.push(valueNumber[m]);
      numberChoice.sort((a, b) => a - b);
    }
  }
  console.log(`Số chẵn cuối cùng trong mảng là ${numberChoice.pop()}`);
};
question5();

// Sắp xếp mảng theo thứ tự tăng dần
console.log("------------------Bài tập 7------------------");
const question7 = () => {
  let valueNumber = [-128, 6, 8, -123, -50, -1, 2, 3, 8, 100, 234];
  console.log(`Dãy số chưa sắp xếp: ${valueNumber}`);
  console.log(`Dãy số đã sắp xếp: ${valueNumber.sort((a, b) => a - b)}`);
};
question7();

// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
console.log("------------------Bài tập 10------------------");
const question10 = () => {
  let valueNumber = [-128, -126, -124, -123, -50, -1, 2, 3, 8, 100, 234];
  let countSoAm = [];
  let countSoDuong = [];
  for (let n = 0; n < valueNumber.length; n++) {
    if (0 > valueNumber[n]) {
      countSoAm.push(valueNumber[n]);
    }
    if (valueNumber[n] > 0) {
      countSoDuong.push(valueNumber[n]);
    }
  }
  if (countSoAm.length > countSoDuong.length) {
    console.log(
      `Số âm là ${countSoAm.length} nhiều hơn số dương ${countSoDuong.length}`
    );
  } else if (countSoAm.length < countSoDuong.length) {
    console.log(
      `Số dương là ${countSoDuong.length} nhiều hơn số âm ${countSoAm.length}`
    );
  } else if ((countSoAm.length = countSoDuong.length)) {
    console.log(
      `Số dương là ${countSoDuong.length} bằng với số âm ${countSoAm.length}`
    );
  }
};
question10();

// Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
console.log("------------------Bài tập 8------------------");
const question8 = () => {
  let valueNumber = [-128, 6, 8, -123, -50, -1, 2, 4, 3, 5, 8, 100, 234];
  let sNT = [];
  let numArr;
  for (let i = 0; i < valueNumber.length; i++) {
    if (0 < valueNumber[i]) {
      console.log(valueNumber[i])
      return numArr = valueNumber[i]
    }
  }
  console.log(numArr)
  if (2 == numArr) {
    console.log(`Số nguyên tố đầu tiên trong mảng là 2`);
  }
  if (numArr % numArr == 0) {
    sNT.push(numArr);
    console.log(`Số nguyên tố đầu tiên trong mảng là ${sNT.shift()}`);
  } else {
    console.log(-1);
  }
};
question8();
