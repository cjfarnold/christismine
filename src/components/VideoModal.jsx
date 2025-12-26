export default function VideoModal({ video, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-media">
          <img
            src={`${import.meta.env.BASE_URL}${video.fullImage}`}
            alt={video.title}
            onClick={() =>
              window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")
            }
          />

          <button
            className="modal-play"
            onClick={(e) => {
              e.stopPropagation();
              window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank");
            }}
            aria-label="Open video on YouTube"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M8 5v14l11-7z"></path>
            </svg>
            <span>View</span>
          </button>
        </div>

        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
