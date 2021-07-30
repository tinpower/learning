document.getElementById("submit").addEventListener("click", hienThi);

function hienThi() {
  // var maSV = document.getElementById("txtMaSV");
  // var tenSV = document.getElementById("txtTenSV");
  // var loaiSV = document.getElementById("loaiSV");
  // var diemToan = document.getElementById("txtDiemToan");
  // var diemVan = document.getElementById("txtDiemVan");

  // Lấy data từ UI và tạo object sinhVien
  var sinhVien = {
    // properties
    maSV: document.getElementById("txtMaSV").value,
    tenSV: document.getElementById("txtTenSV").value,
    loaiSV: document.getElementById("loaiSV").value,
    diemToan: +document.getElementById("txtDiemToan").value,
    diemVan: +document.getElementById("txtDiemVan").value,

    // methods
    tinhDTB: function () {
      return (this.diemToan + this.diemVan) / 2;
    },
    xepLoai: function () {
      var dtb = this.tinhDTB();

      if (dtb > 8) {
        return "Giỏi";
      }

      if (dtb > 6.5) {
        return "Khá";
      }

      if (dtb > 5) {
        return "Trung Bình";
      }

      if (dtb > 3.5) {
        return "Yếu";
      }

      return "Kém";
    },
  };

  // Hiển thị thông tin lên UI trở lại
  document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
  document.getElementById("spanTenSV").innerHTML = sinhVien.tenSV;
  document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  document.getElementById("spanDTB").innerHTML = sinhVien.tinhDTB();
  document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai();
}
