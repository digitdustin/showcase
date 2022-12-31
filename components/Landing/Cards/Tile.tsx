import { forwardRef, useEffect, useRef } from "react";

type TileProps = {
  children: React.ReactNode;
  col?: number;
  row?: number;
  perspective?: boolean;
  dark?: boolean;
  perspectiveDist?: number;
};

export const Tile = forwardRef<HTMLDivElement, TileProps>(
  (
    {
      children,
      col = 1,
      row = 1,
      perspective = false,
      dark = false,
      perspectiveDist = 400,
    },
    ref
  ) => {
    useEffect(() => {
      function setupTile() {
        if (!wrapperRef.current) return;
        wrapperRef.current.setAttribute(
          "style",
          `--ts: ${wrapperRef.current.getBoundingClientRect().width}px;
         font-size: ${wrapperRef.current.getBoundingClientRect().width}px;
         grid-column: span calc(${col} * var(--gridBase));
         grid-row: span calc(${row} * var(--gridBase));
        `
        );
      }

      function handleResize() {
        setupTile();
      }
      window.addEventListener("resize", handleResize);

      setupTile();
    });

    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
      <div ref={wrapperRef} className="tileWrapper">
        <div
          className="view"
          ref={ref}
          style={{
            background: dark ? "hsla(0, 0%, 13%, 1)" : "#fafafa",
            perspective: perspective ? `${perspectiveDist * 2}px` : "none",
            touchAction: "none",
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

export const s = (number: number) => {
  return `calc(var(--ts) * ${number})`;
};
