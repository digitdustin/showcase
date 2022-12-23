import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion as m, Reorder, useDragControls } from "framer-motion";
import { availableSocials } from "../../constants/testData";
import { Social } from "../../constants/editor/types";
import {
  ArrowsUpDownIcon,
  ArrowsRightLeftIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Tooltip from "../shared/Tooltip";

const SocialLink = ({
  social,
  network,
  url,
  editorStyle,
  extend,
  monochromatic,
  monochromaticColor,
  roundedSocials,
}: {
  social: Social;
  network: string;
  url: string;
  editorStyle: string;
  extend: boolean;
  monochromatic: boolean;
  monochromaticColor: string;
  roundedSocials: boolean;
}) => {
  //find element in availableSocials with network name, then get color of that entry

  const color = availableSocials.find(
    (social) => social.network === network
  )?.color;

  const controls = useDragControls();

  return (
    <Reorder.Item key={network} value={social}>
      <m.div layout="position" className="group relative">
        <Tooltip position={extend ? "top" : "bottom"}>{url}</Tooltip>
        <m.div
          style={{
            backgroundColor: monochromatic
              ? monochromaticColor
              : color || "#000000",
          }}
          className={`relative z-20 flex cursor-pointer select-none items-center transition ${
            extend
              ? "w-full cursor-ns-resize justify-between rounded-md py-2 px-4"
              : `w-auto cursor-ew-resize justify-center ${
                  roundedSocials ? "rounded-full" : "rounded-md"
                }`
          } ${
            editorStyle === "grotesque"
              ? "-translate-y-[3px] -translate-x-[3px] border-2 border-dark-800 hover:translate-y-0 hover:translate-x-0"
              : "hover:-translate-y-1"
          }`}
        >
          <div className="relative flex items-center">
            <div className="absolute inset-0 z-20 bg-transparent"></div>
            <SocialIcon
              network={network}
              url={url}
              bgColor={monochromatic ? monochromaticColor : ""}
              fgColor="#ffffff"
              className="!h-10 !w-10"
              href={undefined}
            />
            {extend ? (
              <p className="ml-2 font-semibold text-white">{network}</p>
            ) : null}
          </div>
          {extend ? (
            <div className="flex aspect-square h-full items-center justify-center rounded-md">
              <Bars3Icon className="h-5 w-5 text-white" />
            </div>
          ) : null}
        </m.div>
        {editorStyle === "grotesque" && (
          <div
            className={`absolute inset-0 z-0 h-full w-full border-[6px] border-dark-800 ${
              extend
                ? "rounded-lg"
                : `${roundedSocials ? "rounded-full" : "rounded-md"}`
            }`}
          />
        )}
      </m.div>
    </Reorder.Item>
  );
};

export default SocialLink;
