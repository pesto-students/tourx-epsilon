import { combineReducers } from "redux";
import welcomeGuide from "./reducers/welcomeGuide";
import category from "./reducers/category";

export default combineReducers({
  welcomeGuide,
  category,
});
