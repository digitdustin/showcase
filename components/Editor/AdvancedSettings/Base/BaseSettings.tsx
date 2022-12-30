import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { heightAnim } from "../../../../constants/variants";
import { useEditorStylesStore } from "../../../../stores/useEditorStylesStore";
import { usePageContentStore } from "../../../../stores/usePageContentStore";
import ColorPicker from "../../../ProjectModal/ColorPicker";
import { AnimateHeight } from "../../../shared/AnimateHeight";
import { PanelSection, Toggle } from "../SettingsPanel";
import IconsDropdown from "../IconsDropdown";

const BaseSettings = ({
  setSocialModalOpen,
}: {
  setSocialModalOpen: (open: boolean) => void;
}) => {
  const {
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    headerCentered,
    setHeaderCentered,
    bannerType,
    setBannerType,
    iconsColor,
    setIconsColor,
    iconsBackgroundColor,
    setIconsBackgroundColor,
  } = useEditorStylesStore((state) => state);

  return (
    <>
      <PanelSection title="Page">
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark-100">Background Color:</p>
          <div className="rounded-[7px] border border-dark-500">
            <ColorPicker
              color={backgroundColor}
              setColor={setBackgroundColor}
              position="right"
              size="24px"
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark-100">Text Color:</p>
          <div className="rounded-[7px] border border-dark-500">
            <ColorPicker
              color={textColor}
              setColor={setTextColor}
              position="right"
              size="24px"
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark-100">Center Content?</p>
          <Toggle enabled={headerCentered} setEnabled={setHeaderCentered} />
        </div>
      </PanelSection>
      <PanelSection title="Banner">
        <div className="flex flex-col py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-dark-100">Icon Banner?</p>
            <Toggle
              enabled={bannerType === "icons"}
              setEnabled={() =>
                setBannerType(bannerType === "icons" ? "image" : "icons")
              }
            />
          </div>
          <AnimateHeight
            variants={heightAnim}
            isVisible={bannerType === "icons"}
          >
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-dark-100">Icon Theme</p>
              <div className="rounded-[7px] border border-dark-500">
                <IconsDropdown />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-dark-100">Icon Outline Color</p>
              <div className="rounded-[7px] border border-dark-500">
                <ColorPicker
                  color={iconsColor}
                  setColor={setIconsColor}
                  position="right"
                  size="24px"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-dark-100">Icon Background Color</p>
              <div className="rounded-[7px] border border-dark-500">
                <ColorPicker
                  color={iconsBackgroundColor}
                  setColor={setIconsBackgroundColor}
                  position="right"
                  size="24px"
                />
              </div>
            </div>
          </AnimateHeight>
        </div>
      </PanelSection>
    </>
  );
};

export default BaseSettings;
