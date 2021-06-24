// BAI TAP 2

function resultSum5() {
  let sum = 0;
  let num1 = document.getElementById("number-1").value;
  num1 = parseFloat(num1);
  let num2 = document.getElementById("number-2").value;
  num2 = parseFloat(num2);
  let num3 = document.getElementById("number-3").value;
  num3 = parseFloat(num3);
  let num4 = document.getElementById("number-4").value;
  num4 = parseFloat(num4);
  let num5 = document.getElementById("number-5").value;
  num5 = parseFloat(num5);
  sum = (num1 + num2 + num3 + num4 + num5) / 5;
  // console.log(sum);
  document.getElementById("showResult").innerHTML = sum;
}

// BAI TAP 3

function changeCurency() {
  let valueUSD = document.getElementById("moneyUSD").value;
  valueUSD = parseFloat(valueUSD);
  let valueExchange = 0;
  valueExchange = valueUSD * 23500;
  document.getElementById("showVND").innerHTML = valueExchange + "VND";
}

// BAI TAP 3 - BONUS

function resultChoiceCurency() {
  let choiceVND = document.getElementById("choiceVND").checked;
  let choiceUSD = document.getElementById("choiceUSD").checked;
  let result;

  if (choiceVND) {
    result = "choiceVND";
  } else if (choiceUSD) {
    result = "choiceUSD";
  }
  return result;
}

function changeCurency2Unit() {
  let valueMoney = document.getElementById("money").value;
  valueMoney = parseFloat(valueMoney);
  let valueExchange2Unit = 0;

  switch (resultChoiceCurency()) {
    case "choiceVND":
      valueExchange2Unit = valueMoney / 23500;
      document.getElementById("showMoney").innerHTML =
        "$" + new Intl.NumberFormat("en-US").format(valueExchange2Unit);
      break;
    case "choiceUSD":
      valueExchange2Unit = valueMoney * 23000;
      document.getElementById("showMoney").innerHTML =
        "đ" + new Intl.NumberFormat("vi-VN").format(valueExchange2Unit);
      break;
  }
  // document.getElementById('showMoney').innerHTML = valueExchange2Unit
}

// BAI TAP 4

let valuePerimeter = 0;
let valueAcgreage = 0;
let valueWidth = document.getElementById("width").value;
valueWidth = parseFloat(valueWidth);
let valueLength = document.getElementById("length").value;
valueLength = parseFloat(valueLength);

function resultPerimeter() {
  // METHOD
  if (valueWidth > valueLength) {
    document.getElementById("showResultRectangle").innerHTML =
      "Vui lòng điền chiều dài lớn hơn chiều rộng";
  } else {
    valuePerimeter = (valueWidth + valueLength) * 2;
    document.getElementById("showResultRectangle").innerHTML =
      "Chu vi hình chữ nhật là: " + valuePerimeter;
  }
}

function resultAcgreage() {
  // METHOD
  if (valueWidth > valueLength) {
    document.getElementById("showResultRectangle").innerHTML =
      "Vui lòng điền chiều dài lớn hơn chiều rộng";
  } else {
    valueAcgreage = valueWidth * valueLength;
    document.getElementById("showResultRectangle").innerHTML =
      "Diện tích hình chữ nhật là: " + valueAcgreage;
  }
}

function result2Unit() {
  let number2Unit = document.getElementById("ten").value;
  number2Unit = parseInt(number2Unit);
  let total2Unit = 0;
  let numberUnit = number2Unit % 10;
  let numberTen = number2Unit / 10;
  numberTen = Math.floor(numberTen);
  if (9 < number2Unit < 100) {
    total2Unit = numberTen + numberUnit;
    document.getElementById('showResult2Unit').innerHTML = "Ký số hàng chục là " + numberTen + "<br />" + "Ký số hàng đơn vị là " + numberUnit + "<br />" + "Tổng 2 ký số là " + total2Unit;
  } else if ( number2Unit < 9) {
    document.getElementById('showResult2Unit').innerHTML = "Vui lòng nhập số lớn hơn 9 và nhỏ hơn 100"
  } else if (number2Unit > 100){
    document.getElementById('showResult2Unit').innerHTML = "Vui lòng nhập số lớn hơn 9 và nhỏ hơn 100" 
  }
}
