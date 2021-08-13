export default class Food {
  constructor(
    _id,
    _tenMon,
    _loaiMon,
    _giaMon,
    _khuyenMai,
    _tinhTrang,
    _hinhMon,
    _giaKhuyenMai,
    _moTa
  ) {
    this.id = _id;
    this.tenMon = _tenMon;
    this.loaiMon = _loaiMon;
    this.giaMon = _giaMon;
    this.khuyenMai = _khuyenMai;
    this.hinhMon = _hinhMon;
    this.mota = _moTa;
    this.giaKhuyenMai = 0;
    this.tinhTrang = _tinhTrang;
  }
  tinhGiaKhuyenMai() {
    this.giaKhuyenMai = this.giaMon * ((100 - this.khuyenMai) / 100);
  }
}
