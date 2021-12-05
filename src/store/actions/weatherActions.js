import { SEARCH_CITY } from "../constant/weatherConstant";
import { weatherServices } from "../services";

export const findNameCity = (data) => {
  return weatherServices
    .searchCity(data)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        return data;
      }
    })
    .catch((err) => console.log(err.response));
};
export const searchCity = (data) => async (dispatch) => {
  weatherServices
    .searchCity(data)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        dispatch({
          type: SEARCH_CITY,
          payload: data[0],
        });
      }
    })
    .catch((err) => console.log(err.response));
};
export const getWeather = (woeid, date) => {
  return weatherServices
    .getWeather(woeid, date)
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        return data[0];
      }
      // eslint-disable-next-line eqeqeq
    })
    .catch((err) => console.log(err.response));
};
