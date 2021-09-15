import React from "react";
import ReactPlayer from "react-player/youtube";

function About() {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="0"
        height="0"
        playing={playing}
        onPlay={() => setPlaying(true)}
      />
      <button onClick={() => setPlaying(!playing)}>{playing.toString()}</button>
    </div>
  );
}

export default About;
