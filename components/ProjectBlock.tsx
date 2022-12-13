import React from "react";
import { ProjectType } from "./ProjectModal";

const ProjectBlock = ({
  name,
  link,
  color,
  webImage,
  mobileImage,
  type,
}: {
  name?: string;
  link?: string;
  color?: string;
  webImage?: string;
  mobileImage?: string;
  type?: ProjectType;
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full aspect-[9/4] transition bg-red-500 rounded-md relative"
    >
      <div className="relative flex h-full w-1/2 items-end py-6 pl-6">
        <p className="w-full text-[100%] font-semibold text-white">{name}</p>
      </div>
    </div>
  );
};

export default ProjectBlock;
