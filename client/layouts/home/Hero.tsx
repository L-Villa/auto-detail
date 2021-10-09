import React, { useState, useEffect } from "react";

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const init1 = 1.15;
  const init2 = 0.85;
  const [pos, setPos] = useState({ y1: init1, y2: init2 });

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

  const handleMouseMove: { (e: React.MouseEvent): void } = (e) => {
    // Scale background image based on mouse position (both x and y axis)
    const { clientX, clientY } = e;
    const diagonalClient = Math.sqrt(clientX * clientX + clientY * clientY);
    const w = dimensions.width / 2;
    const h = dimensions.height / 2;
    const diagonal = Math.sqrt(w * w + h * h);
    const x = diagonal - diagonalClient;

    const large = Math.sqrt(
      map(Math.abs(x), 0, diagonal, 1, init1) *
        map(Math.abs(x), 0, diagonal, 1, init1) +
        map(Math.abs(x), 0, diagonal, 1, init1) *
          map(Math.abs(x), 0, diagonal, 1, init1)
    );
    const small = Math.sqrt(
      map(Math.abs(x), 0, diagonal, 1, init2) *
        map(Math.abs(x), 0, diagonal, 1, init2) +
        map(Math.abs(x), 0, diagonal, 1, init2) *
          map(Math.abs(x), 0, diagonal, 1, init2)
    );
    setPos({
      y1: large,
      y2: small,
    });
  };

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
  }, []);

  return (
    <section className="hero-section" onMouseMove={(e) => handleMouseMove(e)}>
      <video
        src="./assets/videos/beach.mp4"
        autoPlay
        loop
        muted
        style={{ transform: `scale(${pos.y1})` }}
      />
      <div className="small-video-container">
        <video
          src="./assets/videos/beach.mp4"
          autoPlay
          loop
          muted
          style={{ transform: `scale(${pos.y2})` }}
        />
      </div>
    </section>
  );
};

export default Hero;
