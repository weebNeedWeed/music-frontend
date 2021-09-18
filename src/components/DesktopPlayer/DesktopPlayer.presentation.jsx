import useStyles from "./DesktopPlayer.styles";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ReplayIcon from "@material-ui/icons/Replay";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PauseIcon from "@material-ui/icons/Pause";
import AppSilder from "components/AppSlider/AppSilder.index";
import Duration from "components/Duration/Duration.index";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Slide from "@material-ui/core/Slide";

function DesktopPlayerPresentation(props) {
  const classes = useStyles();
  const {
    duration,
    muted,
    played,
    playing,
    volume,
    loop,
    choseMusic,
    handleTogglePlaying,
    handleToggleMute,
    handleSeek,
    handleSeekMouseUp,
    handleChangeVolume,
    handleToggleLoop,
    handleSkipNext,
    handleSkipNextMouseUp,
    handleSkipPrevious,
    handleSkipPreviousMouseUp,
    musicData,
    handleGoYoutube,
  } = props;

  if (choseMusic) {
    return (
      <Slide direction="up" in={choseMusic} mountOnEnter unmountOnExit>
        <div className={classes.player}>
          <div className={`${classes.player}__info`}>
            <Avatar
              className={`${classes.player}__image`}
              variant="rounded"
              src={musicData.imageUrl}
            />

            <span
              className={`${classes.player}__text`}
              onClick={handleGoYoutube}
            >
              {"Go youtube!"}
            </span>
          </div>

          <div className={`${classes.player}__main`}>
            <ReplayIcon
              className={`${classes.player}__icon`}
              onClick={handleToggleLoop}
              style={{ color: loop ? "#F51E38" : "white" }}
            />

            <SkipPreviousIcon
              className={`${classes.player}__icon`}
              onClick={handleSkipPrevious}
              onMouseUp={handleSkipPreviousMouseUp}
            />

            <Avatar
              className={`${classes.player}__play`}
              style={{ backgroundColor: "rgba(245, 30, 56, 0.3)" }}
              onClick={handleTogglePlaying}
            >
              {!playing ? <PlayArrowIcon /> : <PauseIcon />}
            </Avatar>

            <SkipNextIcon
              className={`${classes.player}__icon`}
              onClick={handleSkipNext}
              onMouseUp={handleSkipNextMouseUp}
            />

            <Duration
              style={{ marginLeft: "40px", marginRight: "11px" }}
              seconds={played * duration}
              className={`${classes.player}__duration`}
            />

            <AppSilder
              style={{ width: "40%" }}
              className={`${classes.player}__slider`}
              value={played}
              onChange={handleSeek}
              onChangeCommitted={handleSeekMouseUp}
              max={0.999999}
              step={1 / duration}
              min={0}
            />

            <Duration
              seconds={duration}
              style={{ marginLeft: "12px" }}
              className={`${classes.player}__duration`}
            />

            {muted ? (
              <VolumeOffIcon
                className={`${classes.player}__icon`}
                style={{ marginLeft: "20px" }}
                onClick={handleToggleMute}
              />
            ) : (
              <VolumeUpIcon
                className={`${classes.player}__icon`}
                style={{ marginLeft: "20px" }}
                onClick={handleToggleMute}
              />
            )}

            <AppSilder
              style={{ width: "10%", marginLeft: "12px" }}
              className={`${classes.player}__slider`}
              value={volume}
              max={0.999999}
              min={0}
              onChange={handleChangeVolume}
              step={0.01}
            />
          </div>
        </div>
      </Slide>
    );
  } else {
    return null;
  }
}

export default DesktopPlayerPresentation;
