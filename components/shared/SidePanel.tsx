import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface SidePanelProps {
  panelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const SidePanel = ({
  panelOpen,
  setPanelOpen,
  title,
  children,
}: SidePanelProps) => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const panelContent = useRef<HTMLDivElement>(null);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!setPanelOpen || keyCode !== 27) return;
      setPanelOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div
        ref={panelContent}
        className={`absolute inset-0 z-[60] transform shadow-xl transition-transform ease-in-out md:left-auto md:w-1/2 md:max-w-sm xl:-right-0 xl:left-auto xl:max-w-sm ${
          panelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="scrollbar-none relative top-[57px] h-[calc(100vh-57px)] w-full shrink-0 overflow-hidden overflow-y-auto overflow-x-hidden border-dark-700 bg-dark-800 p-4 md:border-l">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-white">{title}</h1>
            <button
              ref={closeBtn}
              onClick={() => setPanelOpen(false)}
              className="group z-50"
            >
              <div className="flex p-2">
                <XMarkIcon className="h-6 w-6 text-dark-500 transition group-hover:text-dark-400" />
              </div>
            </button>
          </div>
          <div className="flex flex-col overflow-y-visible text-white">
            {children}
          </div>
        </div>
      </div>
      <div
        onClick={() => setPanelOpen(false)}
        className={`fixed z-50 h-full w-full transition md:bg-black/20 xl:pointer-events-none xl:bg-transparent ${
          panelOpen ? "opacity-100" : "opacity-0"
        } ${panelOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      />
    </>
  );
};

export default SidePanel;
