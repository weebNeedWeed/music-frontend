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

function DesktopPlayerPresentation() {
  const classes = useStyles();

  return (
    <div className={classes.player}>
      <div className={`${classes.player}__info`}>
        <Avatar
          className={`${classes.player}__image`}
          variant="rounded"
          src="https://i.ytimg.com/vi/sqljo295DkE/mqdefault.jpg"
        />

        <span className={`${classes.player}__text`}>{"Go youtube!"}</span>
      </div>

      <div className={`${classes.player}__main`}>
        <ReplayIcon className={`${classes.player}__icon`} />

        <SkipPreviousIcon className={`${classes.player}__icon`} />

        <Avatar
          className={`${classes.player}__play`}
          style={{ backgroundColor: "rgba(245, 30, 56, 0.3)" }}
        >
          <PauseIcon />
        </Avatar>

        <SkipNextIcon className={`${classes.player}__icon`} />

        <Duration
          style={{ marginLeft: "40px", marginRight: "11px" }}
          seconds={5}
          className={`${classes.player}__duration`}
        />

        <AppSilder
          style={{ width: "40%" }}
          className={`${classes.player}__slider`}
        />

        <Duration
          seconds={123}
          style={{ marginLeft: "12px" }}
          className={`${classes.player}__duration`}
        />

        <VolumeUpIcon
          style={{ marginLeft: "20px" }}
          className={`${classes.player}__icon`}
        />

        <AppSilder
          style={{ width: "10%", marginLeft: "12px" }}
          className={`${classes.player}__slider`}
        />
      </div>
    </div>
  );
}

export default DesktopPlayerPresentation;
