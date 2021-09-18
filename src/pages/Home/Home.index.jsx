import Title from "components/Title/Title.index";
import React, { useEffect } from "react";
import MusicList from "components/MusicList/MusicList.index";
import { useDispatch } from "react-redux";
import * as musicAction from "redux/actions/music.action";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(musicAction.searchYoutubeStart("trending songs", 15));
  }, [dispatch]);

  return (
    <div>
      <Title gutterBottom>{"Trendings"}</Title>
      <MusicList actionAdd />
    </div>
  );
}

export default Home;
