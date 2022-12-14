import React, { useState, useCallback, ReactNode, RefCallback } from "react";

export function useCallbackRef<T>(): [T | null, (node: T | null) => void] {
  const [ref, setRef] = useState<T | null>(null);
  const fn = useCallback((node: T | null) => {
    setRef(node);
  }, []);

  return [ref, fn];
}
