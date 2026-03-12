import React, { useEffect, useRef } from "react";

const Snowfall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const snowflakes = useRef<HTMLDivElement[]>([]);
  const snowflakeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const particlesPerThousandPixels = 0.1;
  const fallSpeed = 1.25;
  const maxSnowflakes = 200;

  const containerWidth = useRef(0);
  const containerHeight = useRef(0);

  const resetSnowflake = (snowflake: HTMLDivElement) => {
    const size = Math.random() * 5 + 1;
    const width = containerWidth.current - size;
    const height = containerHeight.current;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * width}px`;
    snowflake.style.top = `-${size}px`;

    const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationTimingFunction = "linear";
    snowflake.style.animationName =
      Math.random() < 0.5 ? "fall" : "diagonal-fall";

    setTimeout(() => {
      if (parseInt(snowflake.style.top || "0", 10) < height) {
        resetSnowflake(snowflake);
      } else {
        snowflake.remove();
        snowflakes.current = snowflakes.current.filter((f) => f !== snowflake);
      }
    }, animationDuration * 1000);
  };

  const createSnowflake = () => {
    if (
      containerRef.current &&
      snowflakes.current.length < maxSnowflakes
    ) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflakes.current.push(snowflake);
      containerRef.current.appendChild(snowflake);
      resetSnowflake(snowflake);
    }
  };

  const generateSnowflakes = () => {
    const area = containerWidth.current * containerHeight.current;
    const numberOfParticles = Math.ceil(area / 1000) * particlesPerThousandPixels;
    const interval = 5000 / numberOfParticles;

    if (snowflakeIntervalRef.current) {
      clearInterval(snowflakeIntervalRef.current);
    }

    snowflakeIntervalRef.current = setInterval(() => {
      if (snowflakes.current.length < maxSnowflakes) {
        requestAnimationFrame(createSnowflake);
      }
    }, interval);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        containerWidth.current = width;
        containerHeight.current = height;
        generateSnowflakes();
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (snowflakeIntervalRef.current) {
        clearInterval(snowflakeIntervalRef.current);
      }
    };
  }, []);

  return <div className="snow-container" ref={containerRef}></div>;
};

export default Snowfall;

