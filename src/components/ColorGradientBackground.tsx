import React, { useEffect } from "react";
import Granim from "granim";
import "./GradientBackground.css";

function ColorGradientBackground() {
  // Initialize Granim with useEffect hook
  useEffect(() => {
    var granimInstance = new Granim({
      element: "#canvas-basic",
      direction: "left-right",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#ff9966", "#ff5e62"],
            ["#00F260", "#0575E6"],
            ["#e1eec3", "#f05053"],
          ],
          transitionSpeed: 10000000,
        },
      },
    });

    // Clean up Granim instance
    return () => {
      granimInstance.destroy();
    };
  }, []);

  // Render the component
  return (
    <div className="gradientBackground">
      <canvas id="canvas-basic"></canvas>
      <a href="index.html" className="logoMask">
        Granim.js
      </a>
    </div>
  );
}

export default ColorGradientBackground;
