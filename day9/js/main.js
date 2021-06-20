console.log("log");

var message = "Hello co ba";
console.log(message);

console.log(message);
console.log(message);
console.log(message);

var ab = 3;
var ac = 4;

var bc = Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));

console.log("Canh huyen:", bc);

var n = 456;

var soHangTram = n / 100;
var soHangChuc = n - soHangTram * 100;
var soHangDonVi = n - soHangTram - soHangChuc;

var sum =
  Math.floor(soHangTram) +
  Math.floor(soHangChuc / 10) +
  Math.floor(soHangDonVi);

console.log(sum);

// var tenPhim = 'Iron Man';
// var ticketSold = 50;
// var price = 85000;
// var totalBeforeTax = ticketSold * price;
// var tax = 15;
// var totalAfterTax = totalBeforeTax - (totalBeforeTax / tax);

// console.log('Xuat phim', tenPhim + " " + 'Tien sau thue la:', Math.round(totalAfterTax));

function computing(tenPhim, ticketSold) {
  var tenPhim;
  var ticketSold;
  var price = 85000;
  var totalBeforeTax = ticketSold * price;
  var tax = 10;
  var totalAfterTax = totalBeforeTax - totalBeforeTax / tax;

  document.getElementById("demo").innerHTML = text;
}
