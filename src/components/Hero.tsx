import { useState, useEffect } from "react";
import { ArrowDown, ArrowDownToLine } from "lucide-react";

function Hero() {
  const [animate, setAnimate] = useState(false);

  // Triggers title text animation once on page load
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Dotgrid
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  //Calculates mouse position relative to the section - Used for CSS radial hover effect
  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    requestAnimationFrame(() => {
      setMousePosition({ x, y });
    });
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <section
      className={`hero ${isHovering ? "is-hovering" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
          "--hover-strength": isHovering ? 1 : 0,
        } as React.CSSProperties
      }
    >
      <div className="dot-grid" aria-hidden="true"></div>

      <div className="hero-content-container">
        <p className="job-title">Frontend Developer & UI Designer</p>
        <h1 className={`hero-title ${animate ? "animate" : ""}`}>
          <span className="hero-title-base">Rickard Engström</span>
          <span className="hero-title-shimmer" aria-hidden="true">
            Rickard Engström
          </span>
        </h1>
        <p className="hero-desc">
          I enjoy building modern, responsive websites and turning ideas into
          clean, intuitive user interfaces.
        </p>
        <div className="hero-buttons-container">
          <a href="#projects" className="hero-button">
            View Projects <ArrowDown />
          </a>
          <a
            href="/cv.pdf"
            className="hero-button hero-button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <ArrowDownToLine />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
