import { useState, useLayoutEffect, useRef } from "react";

export const useParentSize = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const handleSetWidth = () => {
      if (parentRef.current) {
        setWidth(parentRef.current.offsetWidth);
      }
    };

    function handleResize() {
      handleSetWidth();
    }

    window.addEventListener("resize", handleResize);

    handleSetWidth();
  }, []);

  return [parentRef, width];
};
