import * as musicType from "redux/types/music.type";

const initialState = {
  list: [],
  player: {
    playing: false,
    index: 0,
    choseMusic: false,
    volume: 1.0,
    muted: false,
    played: 0,
    duration: 0,
    loop: false,
    seeking: false,
  },
};

const musicReducer = (state = initialState, action) => {
  const stateClone = { ...state };

  switch (action.type) {
    case musicType.MUSIC_SEARCHYOUTUBE_DONE:
      stateClone.list = action.payload.musicData;
      return stateClone;
    case musicType.MUSIC_CHANGEPLAYINGSTATUS:
      stateClone.player.playing = action.payload.status;
      return stateClone;
    case musicType.MUSIC_CHANGEMUTESTATUS:
      stateClone.player.muted = action.payload.status;
      return stateClone;
    case musicType.MUSIC_CHANGEVOLUME:
      stateClone.player.volume = parseFloat(action.payload.volume);
      return stateClone;
    case musicType.MUSIC_CHANGEPROGRESS:
      stateClone.player.played = parseFloat(action.payload.played);
      return stateClone;
    case musicType.MUSIC_CHANGEDURATION:
      stateClone.player.duration = action.payload.duration;
      return stateClone;
    case musicType.MUSIC_CHANGELOOPSTATUS:
      stateClone.player.loop = action.payload.status;
      return stateClone;
    case musicType.MUSIC_CHANGESEEKINGSTATUS:
      stateClone.player.seeking = action.payload.status;
      return stateClone;

    case musicType.MUSIC_LOADMUSIC:
      stateClone.player = {
        ...initialState.player,
        choseMusic: true,
        index: action.payload.index,
      };

      return stateClone;

    case musicType.MUSIC_UNLOADMUSIC:
      stateClone.player = { ...initialState.player };

      return stateClone;

    default:
      return { ...state };
  }
};

export default musicReducer;
