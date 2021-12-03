import axios from "../../services/axios";
class weatherServices {
  searchCity = (city) => {
    return axios.request({
      method: "GET",
      url: `/location/search/?query=${city}`,
    });
  };
  getWeather = (woeid, date) => {
    return axios.request({
      method: "GET",
      url: `/location/${woeid}/${date}`,
    });
  };
}
export default weatherServices;
