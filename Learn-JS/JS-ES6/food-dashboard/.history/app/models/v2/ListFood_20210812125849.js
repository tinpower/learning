class ListFodd {
  getListFoodApi() {
    return axios({
      url: "https://61111686c38a0900171f0fe6.mockapi.io/Food",
      method: "GET",
    });
  }
  postListFoodApi() {
    return axios({
      url: "https://61111686c38a0900171f0fe6.mockapi.io/Food",
      method: "POST",
    });
  }
}

export default ListFodd;
