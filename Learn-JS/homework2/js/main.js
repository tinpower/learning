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
  let choiceVND = document.getElementById('choiceVND').checked;
  let choiceUSD = document.getElementById('choiceUSD').checked;
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
      document.getElementById('showMoney').innerHTML = "$" + new Intl.NumberFormat('en-US').format(valueExchange2Unit); 
      break;
    case "choiceUSD":
      valueExchange2Unit = valueMoney * 23000;
      document.getElementById('showMoney').innerHTML = "đ" + new Intl.NumberFormat('vi-VN').format(valueExchange2Unit); 
      break;
  }
  // document.getElementById('showMoney').innerHTML = valueExchange2Unit
}
