import MusicItem from "components/MusicItem/MusicItem.index";
import Title from "components/Title/Title.index";
import React from "react";

function Home() {
  return (
    <div>
      <Title gutterBottom>{"Featured Tracks"}</Title>
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
    </div>
  );
}

export default Home;
