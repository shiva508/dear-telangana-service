import { useState } from "react";
import VideosHome from "../videos/VideosHome";
import classess from "./Home.module.css";
const Home = () => {
  const [groups, setGroups] = useState([
    {
      videoId: "65bf4560c7157f538f049e48",
      name: "Big Buck Bunny",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      cover: "string",
      starRating: "2.4",
      rating: "A",
      year: "2027",
      genre: "Revange",
      runtime: "120",
      cast: "Shiva,Nithya",
    },
    {
      videoId: "65bf4560c7157f538f049e48",
      name: "Big Buck Bunny",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      cover: "string",
      starRating: "2.4",
      rating: "A",
      year: "2027",
      genre: "Revange",
      runtime: "120",
      cast: "Shiva,Nithya",
    },
    {
      videoId: "65bf4560c7157f538f049e48",
      name: "Big Buck Bunny",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      cover: "string",
      starRating: "2.4",
      rating: "A",
      year: "2027",
      genre: "Revange",
      runtime: "120",
      cast: "Shiva,Nithya",
    },
  ]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);

  //   fetch("api/v1/video/all")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setGroups(data);
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={classess.mainContainer}>
      <h1 className={classess.quoteTitle}>
        Welcome DEAR COMRADE, see what we got for you!!!!
      </h1>
      <div className={classess.videoContainer}>
        {groups.map((group) => (
          <VideosHome video={group} />
        ))}
      </div>
    </div>
  );
};
export default Home;
