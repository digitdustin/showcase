import React from "react";
import { ProjectType } from "./ProjectModal/ProjectModal";

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
      className="w-full aspect-[9/4] overflow-hidden transition bg-red-500 rounded-md relative"
    >
      <div className="relative flex h-full w-1/2 items-end py-6 pl-6">
        <p className="w-full text-[100%] font-semibold text-white">{name}</p>
      </div>
      {type === "web" && (
        <div className="absolute top-5 -right-[2px] h-full w-[60%] rounded-md">
          <img
            className="h-full w-full bg-no-repeat object-cover object-left rounded-md"
            src={webImage}
            alt={name}
          />
        </div>
      )}
      {type === "app" && (
        <div className="absolute top-5 right-12 h-full w-[30%] rounded-md">
          <img
            className="h-full w-full top-0 bg-no-repeat object-cover object-top rounded-md"
            src={mobileImage}
            alt={name}
          />
        </div>
      )}
      {type === "mobile" && (
        <div>
          <div className="absolute top-5 -right-[2px] h-full w-[75%] sm:w-[60%] rounded-md">
            <img
              className="h-full w-full bg-no-repeat object-cover object-left rounded-md"
              src={webImage}
              alt={name}
            />
          </div>
          <div className="absolute shadow-2xl top-10 right-48 h-full w-[30%] rounded-md">
            <img
              className="h-full shadow-2xl w-full top-0 bg-no-repeat object-cover object-top rounded-md"
              src={mobileImage}
              alt={name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;
