import VideoTile from "./VideoTile";

export default function VideoGrid({ videos }) {
  return (
    <main className="grid">
      {videos.map((v) => (
        <VideoTile
          key={v.id}
          video={v}
          onClick={() => window.open(`https://www.youtube.com/watch?v=${v.id}`, "_blank")}
        />
      ))}
    </main>
  );
}
