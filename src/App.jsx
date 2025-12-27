import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import VideoGrid from "./components/VideoGrid";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/videos.json`)
      .then((r) => r.json())
      .then((d) => setVideos(d));
  }, []);

  return (
    <>
      <Intro />
      <VideoGrid videos={videos} />
    </>
  );
}
