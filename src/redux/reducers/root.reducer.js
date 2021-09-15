import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import musicReducer from "./music.reducer";
import uiReducer from "./ui.reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  music: musicReducer,
});

export default rootReducer;
