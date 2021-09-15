import React from "react";
import MusicItemPresentation from "./MusicItem.presentation";
import { useDispatch } from "react-redux";
import * as musicAction from "redux/actions/music.action";

function MusicItem(props) {
  const dispatch = useDispatch();
  const { index } = props;

  const handlePlay = () => {
    dispatch(musicAction.loadMusic(index));
  };

  return <MusicItemPresentation {...props} handlePlay={handlePlay} />;
}

export default MusicItem;
