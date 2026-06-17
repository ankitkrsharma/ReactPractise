import { useState, useEffect } from "react";

const WindowResizeTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Window Width: {width}px</h2>

      <h3
        style={{
          color: width < 800 ? "blue" : "green",
        }}
      >
        {width < 800 ? "Mobile View" : "Desktop View"}
      </h3>
    </div>
  );
};

export default WindowResizeTracker;