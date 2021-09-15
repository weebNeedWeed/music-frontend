import Container from "@material-ui/core/Container";
import React, { useEffect, useRef } from "react";
import useStyles from "./App.styles";
import { RenderRoutes } from "helpers/routes";
import Loading from "layouts/Loading/Loading.index";
import AppDialog from "components/AppDialog/AppDialog.index";
import ReactPlayer from "react-player/youtube";

function AppPresentaion(props) {
  const classes = useStyles();

  const {
    renderNav,
    isDisplayLayout,
    player,
    musicList,
    handlePlay,
    handleEnded,
    handlePause,
    handleProgress,
    handleDuration,
  } = props;

  const playerRef = useRef(null);
  useEffect(() => {
    if (player.seeking) {
      playerRef.current.seekTo(player.played);
    }
  }, [player.seeking, player.played]);

  const layoutClass = isDisplayLayout
    ? `${classes.page}--desktop`
    : `${classes.page}--nolayout`;

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className={classes.container}
    >
      {renderNav()}

      <div className={layoutClass}>{RenderRoutes()}</div>

      <Loading />

      <AppDialog />

      {player.choseMusic ? (
        <ReactPlayer
          ref={playerRef}
          url={musicList[player.index].youtubeUrl}
          width="0"
          height="0"
          playing={player.playing}
          loop={player.loop}
          controls={false}
          muted={player.muted}
          volume={player.volume}
          onPlay={handlePlay}
          onEnded={handleEnded}
          onPause={handlePause}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      ) : null}
    </Container>
  );
}

export default AppPresentaion;
