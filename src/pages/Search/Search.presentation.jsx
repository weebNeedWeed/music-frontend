import MusicList from "components/MusicList/MusicList.index";
import Title from "components/Title/Title.index";
import React from "react";

function SearchPresentation({ keyword }) {
  return (
    <div>
      <Title gutterBottom>{`${10} results for: ${keyword}`}</Title>
      <MusicList />
    </div>
  );
}

export default SearchPresentation;
