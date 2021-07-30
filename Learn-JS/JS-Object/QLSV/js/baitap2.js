function SinhVien(
  maSV,
  tenSV,
  email,
  matKhau,
  ngaySinh,
  khoaHoc,
  diemToan,
  diemLy,
  diemHoa
) {
  this.maSV = maSV;
  this.tenSV = tenSV;
  this.email = email;
  this.matKhau = matKhau;
  this.ngaySinh = ngaySinh;
  this.khoaHoc = khoaHoc;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
}

SinhVien.prototype.tinhDTB = function () {
  return (this.diemToan + this.diemLy + this.diemHoa) / 3;
};

// DOM và gắn event
document.getElementById("btnThem").addEventListener("click", themSinhVien);
document
  .getElementById("btnCapNhat")
  .addEventListener("click", capNhatSinhVien);
document.getElementById("btnReset").addEventListener("click", resetForm);
document
  .getElementById("tbodySinhVien")
  .addEventListener("click", delegationTable);

var dssv = [];

function themSinhVien() {
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var ngaySinh = document.getElementById("txtNgaySinh").value;
  var khoaHoc = document.getElementById("khSV").value;
  var diemToan = +document.getElementById("txtDiemToan").value;
  var diemLy = +document.getElementById("txtDiemLy").value;
  var diemHoa = +document.getElementById("txtDiemHoa").value;

  var sinhVien = new SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );
  console.log(sinhVien);

  dssv.push(sinhVien);
  console.log(dssv);

  hienThi();
  resetForm();
}

function capNhatSinhVien() {
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var ngaySinh = document.getElementById("txtNgaySinh").value;
  var khoaHoc = document.getElementById("khSV").value;
  var diemToan = +document.getElementById("txtDiemToan").value;
  var diemLy = +document.getElementById("txtDiemLy").value;
  var diemHoa = +document.getElementById("txtDiemHoa").value;

  var sinhVien = new SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );

  dssv = dssv.map(function (sv) {
    if (sv.maSV === maSV) {
      return sinhVien;
    }
    return sv;
  });

  hienThi();
<<<<<<< HEAD
  resetForm();
=======
  resetForm()
>>>>>>> 5ba2d2da0245f2dbe58313586991c0e7467d5f96
}

function hienThi() {
  var tbody = document.getElementById("tbodySinhVien");
  var html = "";
  for (var i = 0; i < dssv.length; i += 1) {
    var sv = dssv[i];
    html += `
      <tr>
        <td>${sv.maSV}</td>
        <td>${sv.tenSV}</td>
        <td>${sv.email}</td>
        <td>${sv.ngaySinh}</td>
        <td>${sv.khoaHoc}</td>
        <td>${sv.tinhDTB().toFixed(2)}</td>
        <td>
          <button class="btn btn-primary" data-action="select" data-masv="${
            sv.maSV
          }">Update</button>
          <button class="btn btn-danger" data-action="delete" data-masv="${
            sv.maSV
          }">Delete</button>
        </td>
      </tr>
    `;
  }

  tbody.innerHTML = html;
}

function resetForm() {
  updateForm({});
<<<<<<< HEAD
  document.getElementById("txtMaSV").disabled = false;
=======
  document.getElementById("txtMaSV").disabled = false
>>>>>>> 5ba2d2da0245f2dbe58313586991c0e7467d5f96
}

function updateForm(sinhVien) {
  document.getElementById("txtMaSV").value = sinhVien.maSV || "";
  document.getElementById("txtTenSV").value = sinhVien.tenSV || "";
  document.getElementById("txtEmail").value = sinhVien.email || "";
  document.getElementById("txtPass").value = sinhVien.matKhau || "";
  document.getElementById("txtNgaySinh").value = sinhVien.ngaySinh || "";
  document.getElementById("khSV").value = sinhVien.khoaHoc || "";
  document.getElementById("txtDiemToan").value = sinhVien.diemToan || "";
  document.getElementById("txtDiemLy").value = sinhVien.diemLy || "";
  document.getElementById("txtDiemHoa").value = sinhVien.diemHoa || "";
}

// Tất cả sự kiện trong javascript đều trả ra 1 đối tượng Event, ta có thể lấy đối tượng event này thông qua tham số của hàm callback khi lắng nghe event
function delegationTable(event) {
  // event: Đối tượng Event cung cấp các tham số để ta xử lý...
  // event.target: Trả ra element gốc phát sinh ra sự kiện
  console.log(event.target);

  var maSV = event.target.getAttribute("data-masv");
  var action = event.target.getAttribute("data-action");

  if (action === "select") {
    chonSinhVien(maSV);
  }

  if (action === "delete") {
    xoaSinhVien(maSV);
  }
}

function xoaSinhVien(maSV) {
  dssv = dssv.filter(function (sv) {
    return sv.maSV !== maSV;
  });

  hienThi();
}

function chonSinhVien(maSV) {
  var sinhVien = dssv.find(function (sv) {
    return sv.maSV === maSV;
  });

  // disabled input maSV để người dùng k sửa đc
  document.getElementById("txtMaSV").disabled = true;

  updateForm(sinhVien);
}
