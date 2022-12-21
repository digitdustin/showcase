import React from "react";
import { useEditorStylesStore } from "../../stores/useEditorStylesStore";
import ColorPicker from "../ProjectModal/ColorPicker";
import SidePanel from "../shared/SidePanel";
import { Switch } from "@headlessui/react";

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
      className={`${enabled ? "bg-indigo-800" : "bg-indigo-500"}
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
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const textColor = useEditorStylesStore((state) => state.textColor);
  const setTextColor = useEditorStylesStore((state) => state.setTextColor);
  const backgroundColor = useEditorStylesStore(
    (state) => state.backgroundColor
  );
  const setBackgroundColor = useEditorStylesStore(
    (state) => state.setBackgroundColor
  );
  const extendedSocials = useEditorStylesStore(
    (state) => state.extendedSocials
  );
  const setExtendedSocials = useEditorStylesStore(
    (state) => state.setExtendedSocials
  );

  return (
    <SidePanel
      title="Advanced Settings"
      panelOpen={open}
      setPanelOpen={setOpen}
    >
      <PanelSection title="Colors">
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark-100">Background Color:</p>
          <div className="rounded-[7px] border border-dark-500">
            <ColorPicker
              color={backgroundColor}
              setColor={setBackgroundColor}
              position="right"
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
            />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Socials">
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark-100">Extend Socials?</p>
          <Toggle enabled={extendedSocials} setEnabled={setExtendedSocials} />
        </div>
      </PanelSection>
    </SidePanel>
  );
};

export default AdvancedSettings;
