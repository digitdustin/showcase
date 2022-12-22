import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion as m } from "framer-motion";

const bgColors: { [key: string]: string } = {
  github: "#24292E",
  twitter: "#06ACED",
  linkedin: "#027FB1",
  youtube: "#FF3333",
  email: "#7F7F7F",
};

const SocialLink = ({
  network,
  url,
  editorStyle,
  extend,
  monochromatic,
  monochromaticColor,
}: {
  network: string;
  url: string;
  editorStyle: string;
  extend: boolean;
  monochromatic: boolean;
  monochromaticColor: string;
}) => {
  return (
    <m.div layout="position" className="relative">
      <m.div
        style={{
          backgroundColor: monochromatic
            ? monochromaticColor
            : bgColors[network] || "#000000",
        }}
        className={`relative z-20 flex -translate-y-[3px] -translate-x-[3px] cursor-pointer items-center transition hover:translate-y-0 hover:translate-x-0 ${
          extend
            ? "w-full justify-start space-x-2 rounded-md py-2 px-4"
            : "w-auto justify-center rounded-full"
        } ${editorStyle === "grotesque" ? "border-2 border-dark-800" : ""}`}
      >
        <SocialIcon
          network={network}
          url={url}
          bgColor={monochromatic ? monochromaticColor : ""}
          fgColor="#ffffff"
          className="!h-10 !w-10"
        />
        {extend ? <p className="font-semibold text-white">{network}</p> : null}
      </m.div>
      {editorStyle === "grotesque" && (
        <div
          className={`absolute inset-0 z-0 h-full w-full border-[6px] border-dark-800 ${
            extend ? "rounded-lg" : "rounded-full"
          }`}
        />
      )}
    </m.div>
  );
  if (extend) {
    return (
      <div className="relative">
        <div
          style={{
            backgroundColor: bgColors[network] || "#000000",
          }}
          className={`relative z-20 flex w-full -translate-y-[3px] -translate-x-[3px] cursor-pointer items-center justify-start space-x-4 
          rounded-lg py-2 px-4 transition hover:translate-y-0 hover:translate-x-0 ${
            editorStyle === "grotesque" ? "border-2 border-dark-800" : ""
          }`}
        >
          <SocialIcon
            network={network}
            url={url}
            fgColor="#ffffff"
            className="!h-10 !w-10"
          />
          <p className="font-semibold text-white">{network}</p>
        </div>
        {editorStyle === "grotesque" && (
          <div
            className={`absolute inset-0 z-0 h-full w-full rounded-lg border-[6px] border-dark-800`}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className="relative flex rounded-full bg-white transition hover:-translate-y-[3px]">
        <SocialIcon
          network={network}
          url={url}
          fgColor="#ffffff"
          className={`!h-10 !w-10 transition ${
            editorStyle === "grotesque"
              ? "z-10 -translate-y-[3px] -translate-x-[3px] rounded-full border-2 border-dark-800 hover:translate-y-0 hover:translate-x-0"
              : "opacity-80 hover:opacity-100"
          }`}
        />
        {editorStyle === "grotesque" && (
          <div
            className={`absolute inset-0 z-0 h-10 w-10 rounded-full border-[6px] border-dark-800`}
          />
        )}
      </div>
    );
  }
};

export default SocialLink;
