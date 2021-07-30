const NhanVien = function (maNV, tenNV, cCCD, email, soDienThoai, gioiTinh) {
  this.maNV = maNV;
  this.tenNV = tenNV;
  this.cCCD = cCCD;
  this.email = email;
  this.soDienThoai = soDienThoai;
  this.gioiTinh = gioiTinh;

};

NhanVien.prototype.thucHienCongViec = function () {
  return 10_000_000;
};

let nv1 = new NhanVien(
  "123",
  "Nguyen Tien Dat",
  "123456789",
  "khai@outlook.com",
  "0909552099",
  "Nam"
);
console.log(nv1);
nv1.thucHienCongViec;

// let nv2 = new NhanVien("1234", "Nguyen Dat", "123456", "khai@outlook.com", "0909552099", "Nam")
// console.log(nv2)

// const Message = function(text) {
//   this.text = text;
// }

// const helloMess = new Message("Hello")

// console.log(helloMess)

/* function NhanVien(maNV, tenNV, cCCD, email, soDienThoai, gioiTinh) {
  this.maNV = maNV;
  this.tenNV = tenNV;
  this.cCCD = cCCD;
  this.email = email;
  this.soDienThoai = soDienThoai;
  this.gioiTinh = gioiTinh;
}

NhanVien.prototype.thucHienCongViec = function () {
  return 10_000_000;
};
var nv1 = new NhanVien(
  "123",
  "Nguyen Tien Dat",
  "123456789",
  "khai@outlook.com",
  "0909552099",
  "Nam"
);
console.log(nv1);
nv1.thucHienCongViec; */
