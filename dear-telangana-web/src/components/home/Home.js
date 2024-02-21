import { useState } from "react";
import VideosHome from "../videos/VideosHome";
import Header from "../header/Header";

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
    <div className="flex flex-row justify-center items-center bg-slate-900 h-5/6 max-w-screen-2xl		">
      <h1 className="self-center font-black text-slate-100">
        Loving your country is not only about saying BHARAT MATHA KI HAI but
        also live with kindness
      </h1>
      {groups.map((group) => (
        <div className="bg-white shadow rounded m-2">
          <VideosHome video={group} />
        </div>
      ))}
    </div>
  );
};
export default Home;
