import React, { ReactNode } from "react";

const Tooltip = ({
  children,
  position = "top",
  interactive = false,
}: {
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  interactive?: boolean;
}) => {
  const positionClasses = {
    bottom: {
      box: "left-1/2 -translate-x-1/2 top-full mt-2",
      svg: "left-0 bottom-full rotate-180",
    },
    top: {
      box: "left-1/2 -translate-x-1/2 bottom-full mb-2",
      svg: "left-0 top-full",
    },
    left: {
      box: "top-1/2 -translate-y-1/2 right-full mr-2",
      svg: "hidden",
    },
    right: {
      box: "top-1/2 -translate-y-1/2 left-full ml-2",
      svg: "hidden",
    },
  };

  return (
    <div
      className={`absolute z-10 w-auto whitespace-nowrap rounded-lg bg-black py-2 px-3 text-center font-sans text-xs text-white opacity-0 transition group-hover:opacity-100 ${
        positionClasses[position].box
      } ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {children}
      <svg
        className={`absolute h-2 w-full text-black ${positionClasses[position].svg}`}
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xmlSpace="preserve"
      >
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  );
};

export default Tooltip;
