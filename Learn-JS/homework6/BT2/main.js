const billElectric = () => {
  const getIdValue = (myID) => document.getElementById(myID).value;
  let fullName = getIdValue("fullName");
  let valueKW = getIdValue("valueKW");
  let totalMoney = 0;
  const message = (idShowMessage) =>
    (document.getElementById(
      idShowMessage
    ).innerHTML = `Chào ${fullName}. Tiền điện tháng này của bạn là: ${new Intl.NumberFormat(
      "vn-VN",
      { style: "currency", currency: "VND" }
    ).format(totalMoney)}`);
  const below50KW = 500;
  const below100KW = 650;
  const below200KW = 850;
  const below350KW = 1100;
  const over350KW = 1300;

  if (valueKW <= 50) {
    totalMoney = valueKW * below50KW;
    message("showMessage");
  } else if (valueKW <= 100) {
    totalMoney = below50KW * 50 + (valueKW - 50) * below100KW;
    message("showMessage");
  } else if (valueKW <= 200) {
    totalMoney =
      below50KW * 50 + 50 * below100KW + (valueKW - 100) * below200KW;
    message("showMessage");
  } else if (valueKW <= 350) {
    totalMoney =
      below50KW * 50 +
      50 * below100KW +
      100 * below200KW +
      (valueKW - 200) * below350KW;
    message("showMessage");
  } else {
    totalMoney =
      below50KW * 50 +
      50 * below100KW +
      100 * below200KW +
      150 * below350KW +
      (valueKW - 350) * over350KW;
    message("showMessage");
  }
};
