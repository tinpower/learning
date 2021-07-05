//BAI 1
const arangeNumber = () => {
  let firstNumber = parseInt(document.getElementById("firstNumber").value);
  let secondNumber = parseInt(document.getElementById("secondNumber").value);
  let thirdNumber = parseInt(document.getElementById("thirdNumber").value);

  if (firstNumber > secondNumber && secondNumber > thirdNumber) {
    document.getElementById(
      "showResult"
    ).innerHTML = `Sẵp xếp theo thứ tự tăng dần: ${thirdNumber} < ${secondNumber} < ${firstNumber}`;
  } else if (secondNumber > firstNumber && firstNumber > thirdNumber) {
    document.getElementById(
      "showResult"
    ).innerHTML = `Sẵp xếp theo thứ tự tăng dần: ${thirdNumber} < ${firstNumber} < ${secondNumber}`;
  } else if (thirdNumber > firstNumber && firstNumber > secondNumber) {
    document.getElementById(
      "showResult"
    ).innerHTML = `Sẵp xếp theo thứ tự tăng dần: ${secondNumber} < ${firstNumber} < ${thirdNumber}`;
  } else if (thirdNumber > secondNumber && secondNumber > firstNumber) {
    document.getElementById(
      "showResult"
    ).innerHTML = `Sẵp xếp theo thứ tự tăng dần: ${firstNumber} < ${secondNumber} < ${thirdNumber}`;
  } else if (secondNumber > thirdNumber && thirdNumber > firstNumber) {
    document.getElementById(
      "showResult"
    ).innerHTML = `Sẵp xếp theo thứ tự tăng dần: ${firstNumber} < ${thirdNumber} < ${secondNumber}`;
  } else if (firstNumber > secondNumber && thirdNumber > secondNumber) {
    document.getElementById(
      "showResult"
    ).innerHTML = `Sẵp xếp theo thứ tự tăng dần: ${secondNumber} < ${thirdNumber} < ${firstNumber}`;
  }
};

//BAI 2
const useComputer = () => {
  let mom = document.getElementById("mom").checked;
  let dad = document.getElementById("dad").checked;
  let brother = document.getElementById("brother").checked;
  let sister = document.getElementById("sister").checked;

  if (mom) {
    return (document.getElementById(
      "answerQuestion"
    ).innerHTML = `Chào mẹ, Chúc buổi sáng tốt lành`);
  } else if (dad) {
    return (document.getElementById(
      "answerQuestion"
    ).innerHTML = `Chào ba, Chúc buổi sáng tốt lành`);
  } else if (brother) {
    return (document.getElementById(
      "answerQuestion"
    ).innerHTML = `Chào anh, Chúc buổi sáng tốt lành`);
  } else {
    return (document.getElementById(
      "answerQuestion"
    ).innerHTML = `Chào em, Chúc buổi sáng tốt lành`);
  }
};

//BAI 3
const findNumber = () => {
  let number = parseInt(document.getElementById("number").value);
  return (showResultNumber =
    number % 2 == 0
      ? (document.getElementById(
          "showResultNumber"
        ).innerHTML = `${number} là số chẳn`)
      : (document.getElementById(
          "showResultNumber"
        ).innerHTML = `${number} là số lẻ`));
};

//BAI 4
const findTriangle = () => {
  let firstLine = document.getElementById("firstLine").value;
  let secondLine = document.getElementById("secondLine").value;
  let thirdLine = document.getElementById("thirdLine").value;

  if (firstLine == secondLine && firstLine != thirdLine) {
    return (document.getElementById("showResultTriangle").innerHTML =
      "Đây là tam giác cân");
  } else if (firstLine != secondLine && secondLine == thirdLine) {
    return (document.getElementById("showResultTriangle").innerHTML =
      "Đây là tam giác cân");
  } else if (firstLine == thirdLine && secondLine != firstLine) {
    return (document.getElementById("showResultTriangle").innerHTML =
      "Đây là tam giác cân");
  }
  else if (firstLine == secondLine && firstLine == thirdLine) {
    return (document.getElementById("showResultTriangle").innerHTML =
      "Đây là tam giác đều");
  } else (
    Math.pow(firstLine, 2) + Math.pow(secondLine, 2) ==
    Math.pow(thirdLine, 2)
  )
    return (document.getElementById("showResultTriangle").innerHTML =
      "Đây là tam giác vuông");
};
