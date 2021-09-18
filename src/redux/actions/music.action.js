import * as musicType from "redux/types/music.type";

export const searchYoutubeStart = (keyword, limit = 10) => {
  return {
    type: musicType.MUSIC_SEARCHYOUTUBE_START,
    payload: {
      limit,
      keyword,
    },
  };
};

export const searchYoutubeDone = (musicData) => {
  return {
    type: musicType.MUSIC_SEARCHYOUTUBE_DONE,
    payload: {
      musicData,
    },
  };
};

export const changePlayingStatus = (status) => {
  return {
    type: musicType.MUSIC_CHANGEPLAYINGSTATUS,
    payload: {
      status,
    },
  };
};

export const changeMuteStatus = (status) => {
  return {
    type: musicType.MUSIC_CHANGEMUTESTATUS,
    payload: {
      status,
    },
  };
};

export const changeVolume = (volume) => {
  return {
    type: musicType.MUSIC_CHANGEVOLUME,
    payload: {
      volume,
    },
  };
};

export const changeProgress = (played) => {
  return {
    type: musicType.MUSIC_CHANGEPROGRESS,
    payload: {
      played,
    },
  };
};

export const changeDuration = (duration) => {
  return {
    type: musicType.MUSIC_CHANGEDURATION,
    payload: {
      duration,
    },
  };
};

export const changeLoopStatus = (status) => {
  return {
    type: musicType.MUSIC_CHANGELOOPSTATUS,
    payload: {
      status,
    },
  };
};

export const changeSeekingStatus = (status) => {
  return {
    type: musicType.MUSIC_CHANGESEEKINGSTATUS,
    payload: {
      status,
    },
  };
};

export const loadMusic = (index) => {
  return {
    type: musicType.MUSIC_LOADMUSIC,
    payload: {
      index,
    },
  };
};

export const unloadMusic = () => {
  return {
    type: musicType.MUSIC_UNLOADMUSIC,
  };
};

export const addToList = (musicData) => {
  return {
    type: musicType.MUSIC_ADDTOLIST,
    payload: {
      musicData,
    },
  };
};

export const deleteMusic = (musicId) => {
  return {
    type: musicType.MUSIC_DELETEMUSIC,
    payload: {
      musicId,
    },
  };
};

export const getAllUserMusicStart = () => {
  return {
    type: musicType.MUSIC_GETALLUSERMUSIC_START,
  };
};

export const getAllUserMusicDone = (musicData) => {
  return {
    type: musicType.MUSIC_GETALLUSERMUSIC_DONE,
    payload: { musicData },
  };
};
