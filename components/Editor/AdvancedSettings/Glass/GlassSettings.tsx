import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { heightAnim } from "../../../../constants/variants";
import { useGlassStyleStore } from "../../../../stores/useGlassStyleStore";
import { usePageContentStore } from "../../../../stores/usePageContentStore";
import ColorPicker from "../../../ProjectModal/ColorPicker";
import { AnimateHeight } from "../../../shared/AnimateHeight";
import { PanelSection, RangeInput, Toggle } from "../AdvancedSettings";

const GlassSettings = ({
  setSocialModalOpen,
}: {
  setSocialModalOpen: (open: boolean) => void;
}) => {
  const {
    backgroundColors,
    setBackgroundColors,
    textColor,
    setTextColor,
    roundedSocials,
    setRoundedSocials,
    showOverlay,
    setShowOverlay,
    overlayColor,
    setOverlayColor,
    overlayOpacity,
    setOverlayOpacity,
    fadeOverlay,
    setFadeOverlay,
    overlayBlur,
    setOverlayBlur,
  } = useGlassStyleStore((state) => state);

  const { socials, setSocials } = usePageContentStore((state) => state);

  const setMeshColor = (index: number, color: string) => {
    const newColors = [...backgroundColors];
    newColors[index] = color;
    setBackgroundColors(newColors);
  };

  return (
    <>
      <PanelSection title="Page">
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
        {Array.from({ length: 4 }, (_: string, i: number) => (
          <div key={i} className="flex items-center justify-between py-2">
            <p className="text-sm text-dark-100">Mesh Color {i + 1}:</p>
            <div className="rounded-[7px] border border-dark-500">
              <ColorPicker
                color={backgroundColors[i]}
                setColor={(color: string) => setMeshColor(i, color)}
                position="right"
                size="24px"
              />
            </div>
          </div>
        ))}
        <div className="flex flex-col py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-dark-100">Show Overlay:</p>
            <Toggle enabled={showOverlay} setEnabled={setShowOverlay} />
          </div>
          <AnimateHeight variants={heightAnim} isVisible={showOverlay}>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-dark-100">Overlay Color</p>
              <div className="rounded-[7px] border border-dark-500">
                <ColorPicker
                  color={overlayColor}
                  setColor={setOverlayColor}
                  position="right"
                  size="24px"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-dark-100">Overlay Blur: </p>

              <RangeInput
                value={overlayBlur}
                setValue={setOverlayBlur}
                min={0}
                max={50}
                step={1}
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-dark-100">Overlay Opacity: </p>

              <RangeInput
                value={overlayOpacity}
                setValue={setOverlayOpacity}
                min={0}
                max={1}
                step={0.01}
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-dark-100">Fade Overlay? </p>
              <Toggle enabled={fadeOverlay} setEnabled={setFadeOverlay} />
            </div>
          </AnimateHeight>
        </div>
      </PanelSection>
      <PanelSection title="Socials">
        {/* List of active socials */}
        <div className="flex w-full items-center justify-between rounded-sm">
          {socials.length > 0 ? (
            <div className="flex w-full flex-col divide-y divide-dark-400">
              {socials.map((social) => (
                <div
                  key={social.network}
                  className="flex w-full items-center justify-between space-x-2 py-1"
                >
                  <SocialIcon
                    network={social.network}
                    className="!h-8 !w-8"
                    fgColor="white"
                    bgColor="transparent"
                  />
                  <div className="flex w-full items-center space-x-2 truncate">
                    <p className="truncate text-sm text-dark-100">
                      {social.url}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSocials(
                        socials.filter((s) => s.network !== social.network)
                      );
                    }}
                    className="text-sm text-indigo-500 hover:text-indigo-400"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => setSocialModalOpen(true)}
                className="flex w-full items-center justify-center pt-2 text-sm text-indigo-500 hover:text-indigo-400"
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Social
              </button>
            </div>
          ) : (
            <div className="flex w-full flex-col">
              <p className="py-2 text-center text-sm text-dark-100">
                No Socials Added
              </p>
              <button
                onClick={() => setSocialModalOpen(true)}
                className="flex w-full items-center justify-center pt-2 text-sm text-indigo-500 hover:text-indigo-400"
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Social
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark-100">Rounded Social Links:</p>
          <Toggle enabled={roundedSocials} setEnabled={setRoundedSocials} />
        </div>
      </PanelSection>
    </>
  );
};

export default GlassSettings;
