import React from "react";
import { useEditorStylesStore } from "../../../stores/useEditorStylesStore";
import ColorPicker from "../../ProjectModal/ColorPicker";
import SidePanel from "../../shared/SidePanel";
import { Switch } from "@headlessui/react";
import { AnimateHeight } from "../../shared/AnimateHeight";
import {
  appearAnim,
  heightAnim,
  settingsAnim,
} from "../../../constants/variants";
import { usePageContentStore } from "../../../stores/usePageContentStore";
import { SocialIcon } from "react-social-icons";
import { Social } from "../../../constants/editor/types";
import { PlusIcon } from "@heroicons/react/24/solid";
import ThemeDropdown from "./ThemeDropdown";
import BaseSettings from "./Base/BaseSettings";
import { motion as m, AnimatePresence } from "framer-motion";
import GlassSettings from "./Glass/GlassSettings";

export const RangeInput = ({
  value,
  setValue,
  min,
  max,
  step,
}: {
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="h-2 w-1/2 rounded-sm bg-dark-500 "
    />
  );
};

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
    <m.div variants={appearAnim} className="mt-2 flex flex-col">
      <PanelHeader title={title} />
      <div className="flex flex-col space-y-2 rounded-md bg-dark-700 px-4 py-2">
        {children}
      </div>
    </m.div>
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
  const { pageTheme } = usePageContentStore();
  return (
    <SidePanel
      title="Advanced Settings"
      panelOpen={open}
      setPanelOpen={setOpen}
    >
      <div className="flex flex-col">
        <PanelHeader title="Theme" />
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark-100">Page Theme:</p>
          <div className="rounded-[7px] border border-dark-500">
            <ThemeDropdown />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {pageTheme === "flat" || pageTheme === "brutalist" ? (
          <SettingsTransitionContainer key="flat">
            <BaseSettings setSocialModalOpen={setSocialModalOpen} />
          </SettingsTransitionContainer>
        ) : (
          <SettingsTransitionContainer key="glass">
            <GlassSettings setSocialModalOpen={setSocialModalOpen} />
          </SettingsTransitionContainer>
        )}
      </AnimatePresence>
    </SidePanel>
  );
};

const SettingsTransitionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <m.div
      variants={settingsAnim}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </m.div>
  );
};

export default AdvancedSettings;
