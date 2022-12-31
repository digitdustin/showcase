import { useState, useLayoutEffect, useRef } from "react";

type ParentSize = [React.MutableRefObject<HTMLDivElement | null>, number];

export const useParentSize = (): ParentSize => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

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

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [parentRef, width];
};
