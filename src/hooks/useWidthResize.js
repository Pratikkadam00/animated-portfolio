import { useState, useEffect } from "react";

const useWidthResize = (callback) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        callback(); // Call the callback when width exceeds 768px
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call it initially in case the window starts with width > 768px
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [callback]);

  return width;
};

export default useWidthResize;
