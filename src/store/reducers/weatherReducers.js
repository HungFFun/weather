import { SEARCH_CITY } from "../constant/weatherConstant";

const initialState = {
  city: {},
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

    default:
      return state;
  }
};

export default weatherReducer;
