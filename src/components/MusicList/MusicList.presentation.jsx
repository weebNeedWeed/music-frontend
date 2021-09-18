import MusicItem from "components/MusicItem/MusicItem.index";
import React from "react";

function MusicListPresentation({ musicList, getActionList }) {
  return (
    <>
      {musicList.map((elm, index) => (
        <MusicItem
          key={index}
          {...elm}
          index={index}
          actionList={getActionList(index)}
        />
      ))}
    </>
  );
}

export default MusicListPresentation;
