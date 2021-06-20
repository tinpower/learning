function radioChoice() {
  let result;
  let choiceYes = document.getElementById("radio-yes").checked;
  let choiceNo = document.getElementById("radio-no").checked;

  if (choiceYes) {
    result = "radio-yes";
  } else if (choiceNo) {
    result = "radio-no";
  }
  return result;
}

function salaryMethod() {
  let valueDays = document.getElementById("fillDays").value;
  let totalSalary = 0;
  let resultOvertime = radioChoice();
  switch (resultOvertime) {
    case "radio-yes":
      totalSalary = valueDays * 400000;
      break;
    case "radio-no":
      totalSalary = valueDays * 300000;
      break;
  }
  document.getElementById('showSalary').innerHTML = totalSalary;
}

// BAI TAP 1
// function salaryMethod() {
//   let iDay = document.getElementById('day').value;
//   let oneDaySalary = 100000;
//   let totalSalary = oneDaySalary * parseFloat(iDay);
//   document.getElementById("showSalary").innerHTML = totalSalary;
// }

//   console.log(totalSalary)
// }

//  BAI TAP 2
// var number1 = 5;
// var number2 = 6;
// var number3 = 7;
// var number4 = 8;
// var number5 = 9;

// var midSum = (number1 + number2 + number3 + number4 + number5) / 5;
// console.log(midSum);

// BAI TAP 3
// var usdCurency = 5;
// var vndCurency = 23500;
// var exchangeVND = usdCurency * vndCurency;
// console.log(exchangeVND);

// BAI TAP 4
// var lengthNumber = 10;
// var widthNumber = 5;
// var acgreage = lengthNumber * widthNumber;
// var perimeter = (lengthNumber + widthNumber) * 2;
// console.log(acgreage, perimeter);

// BAI TAP 5
// var number = 47;
// var unit = number % 10;
// var ten = Math.floor(number / 10);
// var sum = unit + ten;
// console.log(sum);
