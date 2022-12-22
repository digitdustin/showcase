import React from "react";
import { useEditorStylesStore } from "../../stores/useEditorStylesStore";
import ColorPicker from "../ProjectModal/ColorPicker";
import SidePanel from "../shared/SidePanel";
import { Switch } from "@headlessui/react";
import { AnimateHeight } from "../shared/AnimateHeight";
import { heightAnim } from "../../constants/variants";
import { usePageContentStore } from "../../stores/usePageContentStore";
import { SocialIcon } from "react-social-icons";
import { Social } from "../../constants/editor/types";
import { PlusIcon } from "@heroicons/react/24/solid";

export const Toggle = ({
  enabled,
  setEnabled,
}: {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-indigo-500" : "bg-indigo-800"}
          relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

export const PanelHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-sm font-semibold text-dark-100">{title}</p>
    </div>
  );
};

export const PanelSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      <PanelHeader title={title} />
      <div className="flex flex-col space-y-2 rounded-md bg-dark-700 px-4 py-2">
        {children}
      </div>
    </div>
  );
};

const AdvancedSettings = ({
  open,
  setOpen,
  setSocialModalOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSocialModalOpen: (open: boolean) => void;
}) => {
  const {
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    extendedSocials,
    setExtendedSocials,
    headerCentered,
    setHeaderCentered,
    monochromaticSocials,
    setMonochromaticSocials,
    socialsColor,
    setSocialsColor,
  } = useEditorStylesStore((state) => state);

  const { socials, setSocials } = usePageContentStore((state) => state);

  return (
    <SidePanel
      title="Advanced Settings"
      panelOpen={open}
      setPanelOpen={setOpen}
    >
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
          <p className="text-sm text-dark-100">Full Width Social Links?</p>
          <Toggle enabled={extendedSocials} setEnabled={setExtendedSocials} />
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
              <ColorPicker
                color={socialsColor}
                setColor={setSocialsColor}
                position="right"
                size="24px"
              />
            </div>
          </AnimateHeight>
        </div>
      </PanelSection>
    </SidePanel>
  );
};

export default AdvancedSettings;
