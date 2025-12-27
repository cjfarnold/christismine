import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import VideoGrid from "./components/VideoGrid";
//import VideoModal from "./components/VideoModal";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/videos.json`)
      .then((r) => r.json())
      .then((d) => setVideos(d));
  }, []);

  return (
    <>
      <Intro />
      <VideoGrid videos={videos} onSelect={setSelected} />
      {selected && (
        <VideoModal video={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
