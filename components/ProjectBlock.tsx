import { CameraIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { ProjectType } from "./ProjectModal/ProjectModal";

const ChangeImageOverlay = ({
  setImage,
  mobile,
}: {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  mobile?: boolean;
}) => {
  const label = mobile ? "upload-mobile" : "upload-web";
  return (
    <div className="group absolute inset-0 h-full w-full">
      <label
        htmlFor={label}
        className="flex h-full w-full cursor-pointer items-center justify-center rounded-md transition hover:bg-black/40"
      >
        <div className="flex flex-col items-center space-x-2 opacity-0 transition group-hover:opacity-100">
          <CameraIcon className="h-5 w-5 text-white" />
          <span className="text-center font-sans text-sm font-semibold text-white">
            Change Image
          </span>
          {mobile ? (
            <span className="text-center font-sans text-xs font-semibold text-white">
              (375x812)
            </span>
          ) : (
            <span className="text-center font-sans text-xs font-semibold text-white">
              (1280x800)
            </span>
          )}
        </div>
        <input
          type="file"
          id={label}
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  setImage(reader.result);
                }
              };
            }
          }}
        />
      </label>
    </div>
  );
};

const ProjectBlock = ({
  name,
  link,
  color,
  webImage,
  mobileImage,
  type,
  setWebImage,
  setMobileImage,
}: {
  name?: string;
  link?: string;
  color?: string;
  webImage?: string;
  mobileImage?: string;
  type?: ProjectType;
  setWebImage: React.Dispatch<React.SetStateAction<string>>;
  setMobileImage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative aspect-[9/4] w-full overflow-hidden rounded-md bg-red-500 transition"
    >
      <div className="relative flex h-full w-1/2 items-end py-6 pl-6">
        <p className="w-full text-[100%] font-semibold text-white">{name}</p>
      </div>
      {type === "web" && (
        <div className="absolute top-5 -right-[2px] h-full w-[60%] rounded-md">
          <div className="relative h-full w-full">
            <ChangeImageOverlay setImage={setWebImage} />
            <img
              className="h-full w-full rounded-md bg-no-repeat object-cover object-left"
              src={webImage}
              alt={name}
            />
          </div>
        </div>
      )}
      {type === "app" && (
        <div className="absolute top-5 right-12 h-full w-[30%] rounded-md">
          <div className="relative h-full w-full">
            <ChangeImageOverlay setImage={setMobileImage} mobile />
            <img
              className="top-0 h-full w-full rounded-md bg-no-repeat object-cover object-top"
              src={mobileImage}
              alt={name}
            />
          </div>
        </div>
      )}
      {type === "mobile" && (
        <div>
          <div className="absolute top-5 -right-[2px] h-full w-[75%] rounded-md sm:w-[60%]">
            <div className="relative h-full w-full">
              <ChangeImageOverlay setImage={setWebImage} />
              <img
                className="h-full w-full rounded-md bg-no-repeat object-cover object-left"
                src={webImage}
                alt={name}
              />
            </div>
          </div>
          <div className="absolute top-10 right-48 h-full w-[30%] rounded-md shadow-2xl">
            <div className="relative h-full w-full">
              <ChangeImageOverlay setImage={setMobileImage} mobile />
              <img
                className="top-0 h-full w-full rounded-md bg-no-repeat object-cover object-top shadow-2xl"
                src={mobileImage}
                alt={name}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;
