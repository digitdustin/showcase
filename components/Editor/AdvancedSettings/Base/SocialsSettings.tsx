import { PlusIcon } from "@heroicons/react/24/solid";
import ColorPicker from "components/ProjectModal/ColorPicker";
import { AnimateHeight } from "components/shared/AnimateHeight";
import { heightAnim } from "constants/variants";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { useEditorStylesStore } from "stores/useEditorStylesStore";
import { usePageContentStore } from "stores/usePageContentStore";
import { PanelSection, Toggle } from "../SettingsPanel";

const SocialsSettings = ({
  setSocialModalOpen,
}: {
  setSocialModalOpen: (open: boolean) => void;
}) => {
  const { socials, setSocials } = usePageContentStore();

  const {
    monochromaticSocials,
    setMonochromaticSocials,
    socialsColor,
    setSocialsColor,
    roundedSocials,
    setRoundedSocials,
    extendedSocials,
    setExtendedSocials,
  } = useEditorStylesStore();

  return (
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
                  <p className="truncate text-sm text-dark-100">{social.url}</p>
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
      <div className="flex flex-col py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-dark-100">Full Width Social Links?</p>
          <Toggle enabled={extendedSocials} setEnabled={setExtendedSocials} />
        </div>
        <AnimateHeight
          variants={heightAnim}
          isVisible={extendedSocials === false}
        >
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-dark-100">Rounded Socials</p>
            <Toggle enabled={roundedSocials} setEnabled={setRoundedSocials} />
          </div>
        </AnimateHeight>
      </div>
      <div className="flex flex-col py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-dark-100">Monochromatic Link Colors?</p>
          <Toggle
            enabled={monochromaticSocials}
            setEnabled={setMonochromaticSocials}
          />
        </div>
        <AnimateHeight
          variants={heightAnim}
          isVisible={monochromaticSocials === true}
        >
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-dark-100">Social Color</p>
            <div className="rounded-[7px] border border-dark-500">
              <ColorPicker
                color={socialsColor}
                setColor={setSocialsColor}
                position="right"
                size="24px"
              />
            </div>
          </div>
        </AnimateHeight>
      </div>
    </PanelSection>
  );
};

export default SocialsSettings;
