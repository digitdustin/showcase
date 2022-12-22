import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion as m } from "framer-motion";
import { availableSocials } from "../../constants/testData";

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
  //find element in availableSocials with network name, then get color of that entry

  const color = availableSocials.find(
    (social) => social.network === network
  )?.color;

  return (
    <m.div layout="position" className="relative">
      <m.div
        style={{
          backgroundColor: monochromatic
            ? monochromaticColor
            : color || "#000000",
        }}
        className={`relative z-20 flex cursor-pointer items-center transition ${
          extend
            ? "w-full justify-start space-x-2 rounded-md py-2 px-4"
            : "w-auto justify-center rounded-full"
        } ${
          editorStyle === "grotesque"
            ? "-translate-y-[3px] -translate-x-[3px] border-2 border-dark-800 hover:translate-y-0 hover:translate-x-0"
            : "hover:-translate-y-1"
        }`}
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
};

export default SocialLink;
