import React, { useEffect, useRef, useState } from "react";

const AnimationAi = () => {
  const imageContainerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleAutomaticEffect = () => {
      // Trigger the animation by updating the state
      setAnimate(true);
    };

    // Simulate the effect after a delay (e.g., 2 seconds)
    const delay = 2000;
    const timeoutId = setTimeout(handleAutomaticEffect, delay);

    // Clean up the timeout to avoid unexpected behavior
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="App">
      <header className="App-header">
        <div
          className={`image-container ${animate ? "animate" : ""}`}
          ref={imageContainerRef}
        >
          <div className="image-piece piece1"></div>
          <div className="image-piece piece2"></div>
        </div>
      </header>
    </div>
  );
};

export default AnimationAi;
