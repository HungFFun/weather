import { combineReducers } from "redux";
import weatherReducer from "./weatherReducers";

const rootReducer = combineReducers({
  weather: weatherReducer,
});
export default rootReducer;
