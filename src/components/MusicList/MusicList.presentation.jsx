import MusicItem from "components/MusicItem/MusicItem.index";
import React from "react";

function MusicListPresentation({ musicList }) {
  return (
    <>
      {musicList.map((elm, index) => (
        <MusicItem key={index} {...elm} index={index} />
      ))}
    </>
  );
}

export default MusicListPresentation;
