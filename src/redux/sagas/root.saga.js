import uiSaga from "./ui.saga";
import { all, fork } from "redux-saga/effects";
import authSaga from "./auth.saga";

export default function* rootSaga() {
  yield all([fork(uiSaga), fork(authSaga)]);
}
