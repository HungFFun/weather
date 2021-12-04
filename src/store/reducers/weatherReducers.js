import { SEARCH_CITY, GET_WEATHER } from "../constant/weatherConstant";

const initialState = {
  city: {},
  weather: [],
  loading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CITY: {
      return {
        ...state,
        city: action.payload,
        loading: false,
      };
    }
    case GET_WEATHER: {
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default weatherReducer;
