import { ClipboardIcon } from "@heroicons/react/24/outline";
import React from "react";
import HeaderLogo from "./HeaderLogo";

const EditorHeader = () => {
  return (
    <div className="h-16 w-full border-b border-b-dark-700 bg-dark-900">
      <div className="mx-auto flex h-full w-full items-center justify-between px-6">
        <div className="flex items-center">
          <div className="mr-4 h-7 w-7 rounded-full">
            <HeaderLogo />
          </div>
          <h1 className="mr-2 text-lg font-semibold text-white">Showcase</h1>
          <p className="rounded-sm bg-gradient-to-br from-fuchsia-400 to-indigo-400 px-1 py-px text-xs font-semibold">
            PRO
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="group hidden cursor-pointer justify-between rounded-md border border-indigo-50/20 bg-indigo-50/10 text-sm text-white/70 sm:flex">
            <p className="py-1 px-6">showcase.co/digitdustin</p>
            <div className="flex items-center justify-center rounded-r-[5px] border-l border-l-indigo-50/20 bg-indigo-50/10 px-2 transition group-hover:bg-indigo-50/20">
              <ClipboardIcon className="h-4 w-4 text-white/70" />
            </div>
          </div>
          <button className="group relative flex items-center justify-center overflow-hidden rounded-lg p-[2px] text-white/90 transition duration-500 hover:text-white">
            <div className="absolute inset-0 z-10 h-full w-full scale-[4] bg-gradient-to-br from-black to-transparent transition duration-500 group-hover:rotate-180" />
            <div className="absolute inset-0 scale-[4] bg-fuchsia-400  transition-all duration-500 group-hover:bg-indigo-400"></div>
            <span className="z-10 rounded-md bg-dark-900 px-4 py-2 text-sm">
              Project Settings
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorHeader;
