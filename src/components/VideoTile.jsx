export default function VideoTile({ video, onClick }) {
  return (
    <div className="tile" onClick={onClick}>
      <img src={video.thumbnail} alt={video.title} />
      <div className="tile-title">{video.title}</div>
    </div>
  );
}
