import { takeLatest, all, put, delay, call } from "redux-saga/effects";
import * as authType from "redux/types/auth.type";
import * as uiAction from "redux/actions/ui.action";
import Api from "helpers/Api";
import * as authAction from "redux/actions/auth.action";

function* createUser({ payload }) {
  const { registerData } = payload;

  yield put(uiAction.changeLoadingStatus(true));

  const api = new Api();
  try {
    yield call(api.createUser, registerData);

    yield delay(2000);
    yield put(uiAction.changeLoadingStatus(false));

    yield put(
      uiAction.openDialog(
        "Success",
        "Register succeeded. Redirecting to login...",
      ),
    );

    yield delay(1000);
    location.href = "/login";
  } catch (error) {
    yield delay(2000);
    yield put(uiAction.changeLoadingStatus(false));

    if (error.response) {
      if (error.response.status === 500) {
        yield put(
          uiAction.openDialog(
            "Error",
            "Unknown Error. Please try again later!",
          ),
        );
      } else if (error.response.status === 409) {
        yield put(
          uiAction.openDialog(
            "Error",
            "Unknown Error. Please try again later!",
          ),
        );
      } else {
        const { errors } = error.response.data;
        const errorList = Object.values(errors).map((elm) => {
          return elm.join(" ,");
        });

        yield put(uiAction.openDialog("Error", errorList.join(". ")));
      }
    } else {
      yield put(
        uiAction.openDialog("Error", "Unknown Error. Please try again later!"),
      );
    }
  }
}

function* loginStart({ payload }) {
  const { loginData } = payload;

  yield put(uiAction.changeLoadingStatus(true));

  const api = new Api();
  try {
    const response = yield call(api.login, loginData);

    yield delay(2000);
    yield put(uiAction.changeLoadingStatus(false));

    const authToken = response.data;
    yield put(authAction.loginDone(authToken));

    yield put(uiAction.openDialog("Success", "Redirecting to home..."));

    yield delay(1000);
    location.href = "/";
  } catch (error) {
    yield delay(2000);
    yield put(uiAction.changeLoadingStatus(false));

    if (error.response) {
      const { data } = error.response;
      if (typeof data === "object") {
        const { errors } = error.response.data;

        const errorList = Object.values(errors).map((elm) => {
          return elm.join(" ,");
        });

        yield put(uiAction.openDialog("Error", errorList.join(". ")));
      } else {
        yield put(uiAction.openDialog("Error", data));
      }
    }
  }

  yield true;
}

function* authSaga() {
  yield all([
    takeLatest(authType.AUTH_CREATEUSER, createUser),
    takeLatest(authType.AUTH_LOGIN_START, loginStart),
  ]);
}

export default authSaga;
