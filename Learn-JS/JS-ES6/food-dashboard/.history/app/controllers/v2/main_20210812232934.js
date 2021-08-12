import ListFood from "./../../models/v2/ListFood.js";
import Food from "./../../models/v2/Food.js";

const getEle = (id) => document.getElementById(id);

// Khởi tạo đối tượng listFood từ lớp đối tượng
const listFood = new ListFood();
const addFoodList = new AddFood();
// Hàm render
const renderHTML = (arr) => {
  let html = "";
  arr.forEach((item) => {
    html += `
    <tr>
      <td>${item.id}</td>
      <td>${item.tenMon}</td>
      <td><img src="./../../assets/img/${item.hinhMon}"></td>
      <td>${item.loaiMon === "loai1" ? "Chay" : "Mặn"}</td>
      <td>${item.giaMon}</td>
      <td>${item.khuyenMai + "%"}</td>
      <td>${item.giaKhuyenMai}</td>
      <td>${item.tinhTrang === "0" ? "Hết" : "Còn"}</td>
      <td><button class="btn btn-success mr-2">Sửa</button><button class="btn btn-danger">Xóa</button></td>
    </tr>`;
  });
  getEle("tbodyFood").innerHTML = html;
};

// Hàm thêm món ăn
const addFood = () => {
  const _tenMon = getEle("tenMon").value;
  const _loaiMon = getEle("loai").value;
  const _giaMon = getEle("giaMon").value;
  const _khuyenMai = getEle("khuyenMai").value;
  const _tinhTrang = getEle("tinhTrang").value;
  let _hinhMon = "";
  if (getEle("hinhMon").files.length > 0) {
    _hinhMon = getEle("hinhMon").files[0].name;
  }
  const _moTa = getEle("moTa").value;

  // Khởi tạo đối tượng food từ lớp đối tượng food
  const food = new Food(
    "",
    _tenMon,
    _loaiMon,
    _giaMon,
    _khuyenMai,
    _moTa,
    _tinhTrang,
    _hinhMon
  );
  food.tinhGiaKhuyenMai();
};
// Khai báo hàm addFood với đối tượng Window
window.addFood = addFood;

getEle("btnThem").addEventListener("click", () => {
  document.getElementsByClassName(
    "modal-header"
  )[0].innerHTML = `<h4>Thêm món ăn</h4>`;
  const footer = `
  <button class="btn btn-success" onclick="addFood()">Thêm Món</button>
  `;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});

// Hàm lấy danh sách món ăn
const fetchData = () => {
  listFood
    .getListFoodApi()
    .then((result) => {
      renderHTML(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData();
