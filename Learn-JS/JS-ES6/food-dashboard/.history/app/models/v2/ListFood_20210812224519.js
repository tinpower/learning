export default class ListFood {
  getListFoodApi() {
    return axios({
      url: "https://61111686c38a0900171f0fe6.mockapi.io/Food",
      method: "GET",
    });
  }
}
