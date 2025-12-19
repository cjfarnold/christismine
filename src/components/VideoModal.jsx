export default function VideoModal({ video, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img
          src={video.fullImage}
          alt={video.title}
          onClick={() =>
            window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")
          }
        />
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
