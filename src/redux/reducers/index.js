import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";

const reducers = combineReducers({
  favorite: favoritesReducer,
});

export default reducers;
