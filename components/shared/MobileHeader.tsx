import {
  AdjustmentsHorizontalIcon,
  AtSymbolIcon,
  PaintBrushIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { SwatchIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useControlsStore } from "stores/useControlsStore";
import Tooltip from "./Tooltip";

const Divider = () => <div className="h-full w-[2px] bg-indigo-50/20" />;

const MobileHeader = () => {
  const {
    settingsOpen,
    setSettingsOpen,
    setActiveSettingsPanel,
    activeSettingsPanel,
  } = useControlsStore();
  return (
    <div
      className={`left-0 flex w-full items-center justify-center border-b border-b-dark-600 bg-dark-800 px-6 py-2 md:hidden`}
    >
      <div className="flex h-full space-x-2">
        <div className="flex items-center space-x-2 text-white">
          <button
            onClick={() => {
              setSettingsOpen(true);
              setActiveSettingsPanel("theme");
            }}
            className={`${
              activeSettingsPanel === "theme"
                ? "border border-indigo-500 bg-indigo-800/20"
                : ""
            } group relative flex h-full cursor-pointer items-center justify-center rounded-md border-indigo-500 px-3 font-sans transition hover:border hover:bg-indigo-800/20`}
          >
            <SwatchIcon className="mr-2 h-4 w-4" />
            <p className="text-sm">Theme</p>
          </button>
          <button
            onClick={() => {
              setSettingsOpen(true);
              setActiveSettingsPanel("links");
            }}
            className={`${
              activeSettingsPanel === "links"
                ? "border-indigo-500 bg-indigo-800/20"
                : ""
            } group relative flex h-full cursor-pointer items-center justify-center rounded-md border-indigo-500 px-3 font-sans transition hover:border hover:bg-indigo-800/20`}
          >
            <QueueListIcon className="mr-2 h-4 w-4" />
            <p className="text-sm">Links</p>
          </button>
          <button
            onClick={() => {
              setSettingsOpen(true);
              setActiveSettingsPanel("style");
            }}
            className={`${
              activeSettingsPanel === "style"
                ? "border-indigo-500 bg-indigo-800/20"
                : ""
            } group relative flex h-full cursor-pointer items-center justify-center rounded-md border-indigo-500 px-3 font-sans transition hover:border hover:bg-indigo-800/20`}
          >
            <PaintBrushIcon className="mr-2 h-4 w-4" />
            <p className="text-sm">Style</p>
          </button>
          <button
            onClick={() => {
              setSettingsOpen(true);
              setActiveSettingsPanel("socials");
            }}
            className={`${
              activeSettingsPanel === "socials"
                ? "border-indigo-500 bg-indigo-800/20"
                : ""
            } group relative flex h-full cursor-pointer items-center justify-center rounded-md border-indigo-500 px-3 font-sans transition hover:border hover:bg-indigo-800/20`}
          >
            <AtSymbolIcon className="mr-2 h-4 w-4" />
            <p className="text-sm">Socials</p>
          </button>
        </div>
        <Divider />
        <button
          onClick={() => setSettingsOpen(!settingsOpen)}
          className={`group relative flex aspect-square cursor-pointer items-center justify-center rounded-md px-3 py-2 font-mono text-white transition`}
        >
          <AdjustmentsHorizontalIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
