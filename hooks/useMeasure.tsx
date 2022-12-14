import ResizeObserver from "resize-observer-polyfill";
import React, { useState, useEffect, RefObject } from "react";
import { useCallbackRef } from "./useCallbackRef";

export const useMeasure: (ref: RefObject<any>) => any = (
  ref: RefObject<any>
) => {
  const [element, attachRef] = useCallbackRef<any>();
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    function onResize([entry]: any) {
      setBounds({
        height: entry.contentRect.height,
      });
    }

    const observer = new ResizeObserver(onResize);

    if (element && element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  useEffect(() => {
    attachRef(ref);
  }, [attachRef, ref]);

  return bounds;
};
