import * as musicType from "redux/types/music.type";
import * as uiAction from "redux/actions/ui.action";
import * as musicAction from "redux/actions/music.action";
import { takeLatest, all, call, put } from "redux-saga/effects";
import Api from "helpers/Api";

function* searchYoutubeStart({ payload }) {
  const { keyword, limit } = payload;

  const api = new Api();
  try {
    const response = yield call(api.searchYoutube, { keyword, limit });

    yield put(musicAction.searchYoutubeDone(response.data));

    yield put(musicAction.unloadMusic());
  } catch (error) {
    console.log(error);
    yield put(
      uiAction.openDialog("Error", "Unknown error. Please try again later!"),
    );
  }
}

function* musicSaga() {
  yield all([
    takeLatest(musicType.MUSIC_SEARCHYOUTUBE_START, searchYoutubeStart),
  ]);
}

export default musicSaga;
