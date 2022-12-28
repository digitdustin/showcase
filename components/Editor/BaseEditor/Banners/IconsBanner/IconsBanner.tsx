import { CameraIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState, useMemo } from "react";
import { useEditorStylesStore } from "../../../../../stores/useEditorStylesStore";
import { usePageContentStore } from "../../../../../stores/usePageContentStore";
import { handleFileUpload } from "../../../../../utils/images/imageUtils";
import Avatar from "../../../Avatar";
import SocialsList from "../../../SocialsList";
import TextareaAutosize from "react-textarea-autosize";

import { food } from "assets/lottie/bgs/food";
//import food from "assets/lottie/bgs/food.json";
import IconPattern from "./IconPattern";
import Lottie from "lottie-react";
import hexRgb from "hex-rgb";

const IconsBanner = ({
  setSocialModalOpen,
}: {
  setSocialModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { name, setName, bio, setBio, bannerImage, setBannerImage } =
    usePageContentStore((state) => state);

  const { headerCentered, iconsBackgroundColor, iconsColor } =
    useEditorStylesStore((state) => state);

  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingBio, setEditingBio] = useState<boolean>(false);

  const backgroundRgb = hexRgb(iconsBackgroundColor, { format: "array" }).map(
    (num) => num / 255
  );
  const textRgb = hexRgb(iconsColor, { format: "array" }).map(
    (num) => num / 255
  );

  const animationData = useMemo(
    () => food(backgroundRgb, textRgb),
    [iconsBackgroundColor, iconsColor]
  );

  return (
    <>
      <div className="relative h-52 w-full rounded-t-md">
        <div className="icon flex h-full w-full items-center justify-center overflow-hidden rounded-t-md">
          <div
            style={{
              backgroundColor: iconsBackgroundColor,
            }}
            className="aspect-[504/60] h-full"
          >
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{
                minHeight: "208px",
                height: "100%",
                width: "auto",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-4xl">
        <div
          className={`absolute -bottom-20 z-30 ${
            headerCentered
              ? "left-1/2 -translate-x-1/2"
              : "left-8 translate-x-0 sm:left-10 md:left-20"
          }`}
        >
          <Avatar />
        </div>
      </div>
      <div
        className={`mx-auto mb-8 w-auto max-w-4xl px-8 pt-24 pb-8 transition-all sm:px-10 md:px-20 ${
          headerCentered ? "text-center" : "text-left"
        }`}
      >
        <input
          type="text"
          className={`w-full rounded-md text-2xl font-semibold transition-all hover:bg-sky-400/20 hover:p-2 ${
            editingName ? "bg-sky-400/20 p-2" : "bg-transparent"
          } ${headerCentered ? "text-center" : "text-left"}`}
          onFocus={() => setEditingName(true)}
          onBlur={() => setEditingName(false)}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextareaAutosize
          className={`mt-4 h-auto w-full resize-none rounded-md text-base transition-all hover:bg-sky-400/20 hover:px-2 sm:text-lg ${
            editingBio ? "bg-sky-400/20 px-2" : "bg-transparent"
          } ${headerCentered ? "text-center" : "text-left"}`}
          spellCheck="false"
          onFocus={() => setEditingBio(true)}
          onBlur={() => setEditingBio(false)}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <SocialsList setSocialModalOpen={setSocialModalOpen} />
      </div>
    </>
  );
};

export default IconsBanner;
