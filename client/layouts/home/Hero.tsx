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
        <div className="secondary-text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            neque tempora repellendus autem omnis provident
          </p>
          <div className="stats">
            <div className="block">
              <h4>15+</h4>
              <div className="sub">years of experience</div>
            </div>
            <div className="block">
              <h4>3k+</h4>
              <div className="sub">happy customers</div>
            </div>
          </div>
        </div>
        <div className="main-text">
          <h2>Detail</h2>
          <h2>Driven</h2>
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
