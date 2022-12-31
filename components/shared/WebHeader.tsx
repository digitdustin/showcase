import {
  AdjustmentsHorizontalIcon,
  AtSymbolIcon,
  PaintBrushIcon,
  QueueListIcon,
  RectangleStackIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import SettingsPanel from "components/Editor/AdvancedSettings/SettingsPanel";
import React, { useState } from "react";
import { settingsPanels, useControlsStore } from "stores/useControlsStore";
import { toTitleCase } from "utils/text/textUtils";
import Tooltip from "./Tooltip";

const Divider = () => <div className="h-[2px] w-full bg-indigo-50/20" />;

const WebHeader = () => {
  const {
    settingsOpen,
    setSettingsOpen,
    setActiveSettingsPanel,
    activeSettingsPanel,
  } = useControlsStore();
  return (
    <div
      className={`absolute left-0 top-[57px] z-[100] hidden h-[calc(100vh-57px)] w-[4.5rem] flex-col items-center justify-start border-r border-r-dark-600 bg-dark-800 p-2 md:flex`}
    >
      <div className="flex h-full w-full flex-col space-y-2">
        <div className="flex flex-col items-center space-y-2 text-white">
          {settingsPanels.map((panel) => (
            <button
              onClick={() => {
                setSettingsOpen(true);
                setActiveSettingsPanel(panel.name);
              }}
              className={`flex w-full flex-col items-center justify-center space-y-2 rounded-md p-1 font-sans transition`}
            >
              <div
                className={`group relative aspect-square cursor-pointer rounded-2xl border border-dark-700 bg-dark-700 p-3 transition ${
                  activeSettingsPanel === panel.name
                    ? "border-indigo-500 bg-indigo-800/20"
                    : ""
                } `}
              >
                <Tooltip position="right">{toTitleCase(panel.name)}</Tooltip>
                {React.createElement(panel.icon, {
                  // @ts-ignore
                  className: "h-5 w-5",
                })}
              </div>
              <p className="text-xs text-dark-100">{toTitleCase(panel.name)}</p>
            </button>
          ))}
        </div>
        <Divider />
        <button
          onClick={() => setSettingsOpen(!settingsOpen)}
          className={`group relative flex aspect-square cursor-pointer items-center justify-center rounded-md px-3 py-2 font-mono text-white transition hover:bg-dark-700`}
        >
          <Tooltip position="right">Advanced Settings</Tooltip>
          <AdjustmentsHorizontalIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default WebHeader;
