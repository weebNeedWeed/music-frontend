import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MusicListPresentation from "./MusicList.presentation";
import * as musicAction from "redux/actions/music.action";

function MusicList(props) {
  const dispatch = useDispatch();
  const selectMusicList = useSelector((state) => state.music.list);
  const { actionAdd, actionDelete } = props;

  const getActionList = (index) => {
    let actionList = [];

    if (actionAdd) {
      const actionObject = {
        handleClick: () => {
          dispatch(musicAction.addToList(selectMusicList[index]));
        },
        title: "Add to list",
      };

      actionList.push(actionObject);
    }

    if (actionDelete) {
      const actionObject = {
        handleClick: () => {
          dispatch(musicAction.deleteMusic(selectMusicList[index].musicId));
        },
        title: "Delete",
      };

      actionList.push(actionObject);
    }

    return actionList;
  };

  return (
    <MusicListPresentation
      musicList={selectMusicList}
      getActionList={getActionList}
    />
  );
}

export default MusicList;
