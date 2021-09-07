import { takeLatest, put, delay } from "redux-saga/effects";
import * as uiType from "redux/types/ui.type";
import * as uiAction from "redux/actions/ui.action";

function* changeLayoutStatus() {
  yield put(uiAction.changeLoadingStatus(true));
  yield delay(0);
  yield put(uiAction.changeLoadingStatus(false));
}

export default function* uiSaga() {
  yield takeLatest(uiType.UI_CHANGELAYOUTSTATUS, changeLayoutStatus);
}
