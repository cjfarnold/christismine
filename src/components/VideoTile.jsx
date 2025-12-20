export default function VideoTile({ video, onClick }) {
  return (
    <div className="tile" onClick={onClick}>
      <img src={`${import.meta.env.BASE_URL}${video.thumbnail}`} alt={video.title} />
      <div className="tile-title">{video.title}</div>
    </div>
  );
}
