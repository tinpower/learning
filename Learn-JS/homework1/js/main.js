function radioChoice() {
  let car = document.getElementById("car").checked;
  let motorbikle = document.getElementById("motorbike").checked;
  let truck = document.getElementById("truck").checked;
  let result;

  if (car) {
    result = "car";
  } else if (motorbikle) {
    result = "motorbikle";
  } else if (truck) {
    result = "truck";
  }
  return result;
}

function moneyMethod() {
  let valueKm = document.getElementById("fillKM").value;
  let valueWaiting = document.getElementById("fillWaitingTime").value;
  valueKm = parseFloat(valueKm);
  valueWaiting = parseFloat(valueWaiting);
  let totalMoney = 0;
  let resultRadioChoice = radioChoice();
  let showMoney;
  switch (resultRadioChoice) {
    case "car":
      if (valueKm <= 1) {
        totalMoney = valueKm * 8000 + valueWaiting * 2000;
      } else if (1 < valueKm && valueKm <= 20) {
        totalMoney = valueKm * 12000 + valueWaiting * 2000;
      } else if (20 <= valueKm) {
        totalMoney = valueKm * 10000 + valueWaiting * 2000;
      }
      break;
    case "motorbikle":
      if (valueKm <= 1) {
        totalMoney = valueKm * 6000 + valueWaiting * 1000;
      } else if (1 < valueKm && valueKm <= 20) {
        totalMoney = valueKm * 8000 + valueWaiting * 1000;
      } else if (20 <= valueKm) {
        totalMoney = valueKm * 9000 + valueWaiting * 1000;
      }
      break;
    case "truck":
      if (valueKm <= 1) {
        totalMoney = valueKm * 15000 + valueWaiting * 2000;
      } else if (1 < valueKm && valueKm <= 20) {
        totalMoney = valueKm * 19000 + valueWaiting * 2000;
      } else if (20 <= valueKm) {
        totalMoney = valueKm * 16000 + valueWaiting * 2000;
      }
      break;
  }
  console.log(totalMoney);
  // document.getElementById('showMoney').innerHTML = totalMoney;
}
