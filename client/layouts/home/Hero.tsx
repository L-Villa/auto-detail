import React, { useState, useEffect } from "react";

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const initialScaleLarge = 1.15;
  const initialScaleSmall = 0.85;
  const [scale, setScale] = useState({
    large: initialScaleLarge,
    small: initialScaleSmall,
  });

  // map number between new range
  const map = (
    number: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ): number => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const handleBackgroundScaling: { (e: React.MouseEvent): void } = (e) => {
    // scale background image based on mouse position (both x and y axis)
    const { clientX, clientY } = e;
    const w = dimensions.width / 2;
    const h = dimensions.height / 2;

    // x and y dependance
    const total = w + h;
    const diff = total - (clientX + clientY);
    const largeBackground = map(Math.abs(diff), 0, total, 1, initialScaleLarge);
    const smallBackground = map(Math.abs(diff), 0, total, 1, initialScaleSmall);

    setScale({
      large: largeBackground,
      small: smallBackground,
    });
  };

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
  }, []);

  return (
    <section
      className="hero-section no-margin"
      onMouseMove={(e) => handleBackgroundScaling(e)}
    >
      <video
        src="./assets/videos/beach.mp4"
        autoPlay
        loop
        muted
        style={{ transform: `scale(${scale.large})` }}
      />
      <div className="small-video-container">
        <div className="main-text">
          <h2>Let's make your car look like new.</h2>
          <p>
            Use our new customer dashboard to intuitively book your next
            appointment
          </p>
          <button>Book Now</button>
        </div>
        <div className="secondary-text">
          <div className="block">
            <h2>15+</h2>
            <p>years of experience</p>
          </div>
          <div className="block">
            <h2>500+</h2>
            <p>happy clients</p>
          </div>
        </div>
        <video
          src="./assets/videos/beach.mp4"
          autoPlay
          loop
          muted
          style={{ transform: `scale(${scale.small})` }}
        />
      </div>
    </section>
  );
};

export default Hero;
