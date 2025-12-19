import VideoTile from "./VideoTile";

export default function VideoGrid({ videos, onSelect }) {
  return (
    <main className="grid">
      {videos.map((v) => (
        <VideoTile key={v.id} video={v} onClick={() => onSelect(v)} />
      ))}
    </main>
  );
}
