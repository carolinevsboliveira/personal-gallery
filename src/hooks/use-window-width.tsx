import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowDimensions, setWindowDimensions] = useState(0);
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
