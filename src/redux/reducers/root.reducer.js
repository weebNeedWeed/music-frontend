import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import uiReducer from "./ui.reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

export default rootReducer;
