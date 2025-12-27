export default function Intro() {
  return (
    <header className="intro">
      <div className="intro-content">
        <h1>Dear Reader, Welcome!</h1>
        <p>
          This is a collection of my Christian-themed poetry — written from my
          own walk with Christ — poignant moments of longing, gratitude,
          struggle, and grace — brought to life against a backdrop of deep
          reflection and personal spiritual growth that every believer
          experiences in their own walk with Jesus.
        </p>

        <p>
          It is my hope that as you browse through my collection you would be
          both refreshed and inspired to draw closer to Him in a deeper, more
          intimate walk as you experience His enduring love.
        </p>
        <p>
          Jacqueline Arnold
          <br />
          Author ~ Christ is Mine
          <br />
          <a href="mailto:christismine.jac@gmail.com">
            christismine.jac@gmail.com
          </a>
        </p>
      </div>
      <img
        src="/cropped_circle_image.png"
        alt="Header"
        className="intro-image"
        loading="lazy"
      />
    </header>
  );
}
