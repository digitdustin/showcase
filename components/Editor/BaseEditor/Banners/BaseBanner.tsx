import { CameraIcon } from "@heroicons/react/24/solid";
import React, { useMemo, useState } from "react";
import {
  IconsTheme,
  useEditorStylesStore,
} from "../../../../stores/useEditorStylesStore";
import { usePageContentStore } from "../../../../stores/usePageContentStore";
import { handleFileUpload } from "../../../../utils/images/imageUtils";
import Avatar from "../../Avatar";
import SocialsList from "../../SocialsList";
import TextareaAutosize from "react-textarea-autosize";
import hexRgb from "hex-rgb";
import { food } from "assets/lottie/bgs/food";
import { design } from "assets/lottie/bgs/design";
import Lottie from "react-lottie";
import IconPattern from "./IconsBanner/IconPattern";
//import Lottie from "lottie-react";

const BaseBanner = ({
  socialModalOpen,
  setSocialModalOpen,
}: {
  socialModalOpen: boolean;
  setSocialModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { name, setName, bio, setBio, bannerImage, setBannerImage } =
    usePageContentStore((state) => state);

  const {
    backgroundColor,
    textColor,
    headerCentered,
    bannerType,
    iconsBackgroundColor,
    iconsColor,
    iconsTheme,
  } = useEditorStylesStore((state) => state);

  const backgroundRgb = hexRgb(iconsBackgroundColor, { format: "array" }).map(
    (num) => num / 255
  );
  const textRgb = hexRgb(iconsColor, { format: "array" }).map(
    (num) => num / 255
  );

  const themes: { [key: string]: (bg: number[], fg: number[]) => Object } = {
    food: food,
    design: design,
  };

  const animationData: any = useMemo(
    () => themes[iconsTheme](backgroundRgb, textRgb),
    [iconsBackgroundColor, iconsColor, iconsTheme]
  );

  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingBio, setEditingBio] = useState<boolean>(false);
  return (
    <>
      <div className="relative h-52 w-full rounded-t-md">
        {bannerType === "icons" ? (
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t-md">
            <div
              style={{
                backgroundColor: iconsBackgroundColor,
              }}
              className="icon h-full"
            >
              <Lottie
                options={{
                  animationData: animationData,
                  loop: true,
                  autoplay: true,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="group absolute inset-0 z-10 flex h-full w-full items-center justify-center rounded-t-md transition hover:bg-black/30">
              <label
                htmlFor={"banner-image-upload"}
                className="flex h-full w-full cursor-pointer items-center justify-center"
              >
                <div className="opacity-0 transition group-hover:opacity-100">
                  <CameraIcon className="mx-auto h-5 w-5 text-white" />
                  <span className="font-sans text-sm font-semibold text-white">
                    Change Banner Image
                  </span>
                </div>
                <input
                  type="file"
                  id={"banner-image-upload"}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    handleFileUpload({
                      e,
                      setImage: setBannerImage,
                    });
                  }}
                />
              </label>
            </div>
            <img
              src={bannerImage}
              className={`absolute h-full w-full rounded-t-md object-cover`}
            />
          </>
        )}
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

export default BaseBanner;
