import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  motion as m,
  MotionStyle,
  Reorder,
  useDragControls,
} from "framer-motion";
import { availableSocials } from "../../constants/testData";
import { Social } from "../../constants/editor/types";
import {
  ArrowsUpDownIcon,
  ArrowsRightLeftIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Tooltip from "../shared/Tooltip";
import { useEditorStylesStore } from "../../stores/useEditorStylesStore";

const SocialLink = ({
  social,
  network,
  url,
}: {
  social: Social;
  network: string;
  url: string;
}) => {
  //find element in availableSocials with network name, then get color of that entry

  const color = availableSocials.find(
    (social) => social.network === network
  )?.color;

  const {
    editorStyle,
    extendedSocials,
    monochromaticSocials,
    socialsColor,
    roundedSocials,
  } = useEditorStylesStore((state) => state);

  const socialStyle: () => MotionStyle = () => {
    switch (editorStyle) {
      default:
        return {
          backgroundColor: monochromaticSocials
            ? socialsColor
            : color || "#000000",
        };
    }
  };

  const iconColor = () => {
    switch (editorStyle) {
      case "flat":
      case "brutalist":
        return monochromaticSocials ? socialsColor : "";
      default:
        return socialsColor;
    }
  };

  return (
    <Reorder.Item key={network} value={social}>
      <m.div layout="position" className="group relative">
        <Tooltip position={extendedSocials ? "top" : "bottom"}>{url}</Tooltip>
        <m.div
          style={socialStyle()}
          className={`relative z-20 flex cursor-pointer select-none items-center transition ${
            extendedSocials
              ? "w-full justify-between rounded-md py-2 px-4"
              : `w-auto justify-center ${
                  roundedSocials ? "rounded-full" : "rounded-md"
                }`
          } ${
            editorStyle === "brutalist"
              ? "-translate-y-[3px] -translate-x-[3px] border-2 border-dark-800 hover:translate-y-0 hover:translate-x-0"
              : "hover:-translate-y-1"
          }`}
        >
          <div className={`relative flex items-center`}>
            <div className="absolute inset-0 z-20 bg-transparent"></div>
            <SocialIcon
              network={network}
              url={url}
              bgColor="transparent"
              fgColor="#ffffff"
              className="!h-10 !w-10"
              href={undefined}
            />
            {extendedSocials ? (
              <p className="ml-2 font-semibold text-white">{network}</p>
            ) : null}
          </div>
          {extendedSocials ? (
            <div className="flex aspect-square h-full cursor-ns-resize items-center justify-center rounded-md">
              <Bars3Icon className="h-5 w-5 text-white" />
            </div>
          ) : null}
        </m.div>
        {editorStyle === "brutalist" && (
          <div
            className={`absolute inset-0 z-0 h-full w-full border-[6px] border-dark-800 ${
              extendedSocials
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
