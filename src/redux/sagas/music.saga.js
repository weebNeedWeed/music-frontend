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
    yield put(
      uiAction.openDialog("Error", "Unknown error. Please try again later!"),
    );
  }
}

function* addTolist({ payload }) {
  const { imageUrl, name, youtubeUrl, uploaderName } = payload.musicData;

  const api = new Api();
  const authToken = localStorage.getItem("authToken");

  try {
    yield call(api.addMusic, {
      imageUrl,
      name,
      uploaderName,
      youtubeUrl,
      authToken,
    });

    yield put(
      uiAction.openDialog("Success", `Added "${name}" to your playlist!`),
    );
  } catch (error) {
    yield put(
      uiAction.openDialog("Error", "Unknown Error. Please try again later."),
    );
  }
}

function* deleteMusic({ payload }) {
  const { musicId } = payload;

  const api = new Api();
  const authToken = localStorage.getItem("authToken");

  try {
    yield call(api.deleteMusic, {
      musicId,
      authToken,
    });

    yield put(
      uiAction.openDialog("Success", `Deleted music with id = "${musicId}"`),
    );

    location.href = "/playlist";
  } catch (error) {
    yield put(
      uiAction.openDialog("Error", "Unknown Error. Please try again later."),
    );
  }
}

function* getAllUserMusicStart() {
  const authToken = localStorage.getItem("authToken");

  const api = new Api();
  try {
    const response = yield call(api.getAllUserMusic, { authToken });

    yield put(musicAction.getAllUserMusicDone(response.data));

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
    takeLatest(musicType.MUSIC_ADDTOLIST, addTolist),
    takeLatest(musicType.MUSIC_DELETEMUSIC, deleteMusic),
    takeLatest(musicType.MUSIC_GETALLUSERMUSIC_START, getAllUserMusicStart),
  ]);
}

export default musicSaga;
