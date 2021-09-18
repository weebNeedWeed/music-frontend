import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppPresentaion from "./App.presentation";
import DesktopNav from "layouts/DesktopNav/DesktopNav.index";
import * as authAction from "redux/actions/auth.action";
import { useHistory } from "react-router-dom";
import Api from "helpers/Api";
import * as uiAction from "redux/actions/ui.action";
import * as musicAction from "redux/actions/music.action";

function App() {
  const history = useHistory();
  const selectAllState = useSelector((state) => state);
  const dispatch = useDispatch();

  const selectMusicState = selectAllState.music;
  const selectDisplayLayout = selectAllState.ui.displayLayout;

  const { player, list } = selectMusicState;

  useEffect(() => {
    (async () => {
      dispatch(authAction.changeLoginStatus(true));

      const authToken = localStorage.getItem("authToken");
      const authTimestamp = localStorage.getItem("authTimestamp");

      if (!authToken) {
        dispatch(authAction.changeLoginStatus(false));
      } else {
        dispatch(authAction.changeLoginStatus(true));

        if (Date.now() - authTimestamp < 7200000) {
          const api = new Api();

          try {
            const response = await api.checkUser({ authToken });

            dispatch(
              authAction.updateUserData({
                id: response.data.userId,
                email: response.data.email,
                username: response.data.username,
              }),
            );

            dispatch(authAction.changeLoginStatus(true));
          } catch (error) {
            dispatch(authAction.changeLoginStatus(false));

            localStorage.clear();

            dispatch(
              uiAction.openDialog(
                "Error",
                "Please log in to your account again!",
              ),
            );

            history.push("/login");
          }
        } else {
          dispatch(authAction.changeLoginStatus(false));

          dispatch(
            uiAction.openDialog(
              "Error",
              "Please log in to your account again!",
            ),
          );

          localStorage.clear();
          history.push("/login");
        }
      }
    })();
  }, [dispatch, history]);

  const renderNav = () => {
    if (selectDisplayLayout) {
      return <DesktopNav />;
    } else {
      return null;
    }
  };

  const handlePlay = () => {
    dispatch(musicAction.changePlayingStatus(true));
  };

  const handlePause = () => {
    dispatch(musicAction.changePlayingStatus(false));
  };

  const handleEnded = () => {
    dispatch(musicAction.changePlayingStatus(player.loop));
  };

  const handleProgress = ({ played }) => {
    if (!player.seeking) {
      dispatch(musicAction.changeProgress(played));
    }
  };

  const handleDuration = (duration) => {
    dispatch(musicAction.changeDuration(duration));
  };

  return (
    <AppPresentaion
      isDisplayLayout={selectDisplayLayout}
      renderNav={renderNav}
      player={player}
      musicList={list}
      handlePlay={handlePlay}
      handleEnded={handleEnded}
      handlePause={handlePause}
      handleProgress={handleProgress}
      handleDuration={handleDuration}
    />
  );
}

export default App;
