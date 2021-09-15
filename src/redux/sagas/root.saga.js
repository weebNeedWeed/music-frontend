import uiSaga from "./ui.saga";
import { all, fork } from "redux-saga/effects";
import authSaga from "./auth.saga";
import musicSaga from "./music.saga";

function* rootSaga() {
  yield all([fork(uiSaga), fork(authSaga), fork(musicSaga)]);
}

export default rootSaga;
