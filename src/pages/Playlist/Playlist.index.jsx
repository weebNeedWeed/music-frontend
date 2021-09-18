import Title from "components/Title/Title.index";
import React, { useEffect } from "react";
import MusicList from "components/MusicList/MusicList.index";
import { useDispatch, useSelector } from "react-redux";
import * as musicAction from "redux/actions/music.action";
import { useHistory } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push("/");
    } else {
      dispatch(musicAction.getAllUserMusicStart());
    }
  }, [history, loggedIn, dispatch]);

  return (
    <div>
      <Title gutterBottom>{"My playlist"}</Title>
      <MusicList actionDelete />
    </div>
  );
}

export default Home;
