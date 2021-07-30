const rank = () => {
  if (workHour >= 192) {
    return "Nhân viên xuất săc";
  }
  if (workHour >= 176) {
    return "Nhân viên giỏi";
  }
  if (workHour >= 160) {
    return "Nhân viên khá";
  }
  if (workHour < 160) {
    return "Nhân viên trung bình";
  }
};
