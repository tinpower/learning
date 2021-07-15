let month = document.getElementById("inputMonth").value;


function calendar(){
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      console.log("Co 31 ngay");
      break;
    }
    case 2: {
      console.log("Co 28 ngay");
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      console.log("Co 30 ngay");
      break;
    }
    default : {
       
    }
  }
}
