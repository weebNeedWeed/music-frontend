import React from "react";
import { useSelector } from "react-redux";
import MusicListPresentation from "./MusicList.presentation";

function MusicList() {
  const selectMusicList = useSelector((state) => state.music.list);

  return <MusicListPresentation musicList={selectMusicList} />;
}

export default MusicList;
