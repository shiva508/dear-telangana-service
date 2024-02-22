import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
const VideoPlayes = () => {
  return (
    <div
      style={{
        width: 900,
        height: 800,
        paddingTop: 20,
        margin: "0 auto",
      }}
    >
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
};
export default VideoPlayes;
