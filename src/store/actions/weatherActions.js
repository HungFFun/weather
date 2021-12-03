import { SEARCH_CITY } from "../constant/weatherConstant";
import { weatherServices } from "../services";
export const searchCity = (data) => async (dispatch) => {
  weatherServices
    .searchCity(data)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        dispatch({
          type: SEARCH_CITY,
          payload: data,
        });
      }
    })
    .catch((err) => console.log(err.response));
};
