import React from "react";
import DesktopPlayerPresentation from "./DesktopPlayer.presentation";
import { useSelector, useDispatch } from "react-redux";
import * as musicAction from "redux/actions/music.action";

function DesktopPlayer() {
  const dispatch = useDispatch();
  const selectMusicState = useSelector((state) => state.music);
  const musicData = selectMusicState.list[selectMusicState.player.index];

  const handleTogglePlaying = () => {
    dispatch(musicAction.changePlayingStatus(!selectMusicState.player.playing));
  };

  const handleToggleMute = () => {
    dispatch(musicAction.changeMuteStatus(!selectMusicState.player.muted));
    if (selectMusicState.player.muted) {
      dispatch(musicAction.changeVolume(0));
    } else {
      dispatch(musicAction.changeVolume(0.999999));
    }
  };

  const handleSeek = (event, newValue) => {
    dispatch(musicAction.changeSeekingStatus(true));
    dispatch(musicAction.changeProgress(newValue));
  };

  const handleSeekMouseUp = () => {
    dispatch(musicAction.changeSeekingStatus(false));
  };

  const handleChangeVolume = (event, newValue) => {
    dispatch(musicAction.changeVolume(newValue));
  };

  const handleToggleLoop = () => {
    dispatch(musicAction.changeLoopStatus(!selectMusicState.player.loop));
  };

  const skipSecond = 5;
  const handleSkipNext = () => {
    dispatch(musicAction.changeSeekingStatus(true));

    let skipNextValue =
      skipSecond / selectMusicState.player.duration +
      selectMusicState.player.played;

    if (skipNextValue > 0.999999) skipNextValue = 0.999999;

    dispatch(musicAction.changeProgress(skipNextValue));
  };

  const handleSkipNextMouseUp = () => {
    setTimeout(() => {
      dispatch(musicAction.changeSeekingStatus(false));
    }, 200);
  };

  const handleSkipPrevious = () => {
    let skipPreviousValue =
      selectMusicState.player.played -
      skipSecond / selectMusicState.player.duration;

    if (skipPreviousValue < 0) skipPreviousValue = 0;

    dispatch(musicAction.changeSeekingStatus(true));
    dispatch(musicAction.changeProgress(skipPreviousValue));
  };

  const handleSkipPreviousMouseUp = () => {
    setTimeout(() => {
      dispatch(musicAction.changeSeekingStatus(false));
    }, 200);
  };

  const handleGoYoutube = () => {
    window.open(musicData.youtubeUrl, "_blank").focus();
  };

  return (
    <DesktopPlayerPresentation
      {...selectMusicState.player}
      musicData={musicData}
      handleTogglePlaying={handleTogglePlaying}
      handleToggleMute={handleToggleMute}
      handleSeek={handleSeek}
      handleSeekMouseUp={handleSeekMouseUp}
      handleChangeVolume={handleChangeVolume}
      handleToggleLoop={handleToggleLoop}
      handleSkipNext={handleSkipNext}
      handleSkipNextMouseUp={handleSkipNextMouseUp}
      handleSkipPrevious={handleSkipPrevious}
      handleSkipPreviousMouseUp={handleSkipPreviousMouseUp}
      handleGoYoutube={handleGoYoutube}
    />
  );
}

export default DesktopPlayer;
