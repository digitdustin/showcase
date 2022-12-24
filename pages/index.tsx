import { useState, useRef, useLayoutEffect, useEffect } from "react";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { CameraIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  AdjustmentsHorizontalIcon,
  QueueListIcon,
  Squares2X2Icon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { ColorCombo, colorCombos } from "../constants/testData";
import { appearAnim } from "../constants/variants";
import {
  EditorStyle,
  useEditorStylesStore,
} from "../stores/useEditorStylesStore";
import EditorHeader from "../components/shared/EditorHeader";
import Tooltip from "../components/shared/Tooltip";
import ColorComboSelector from "../components/ProjectModal/ColorComboSelector";
import { handleFileUpload } from "../utils/images/imageUtils";
import Avatar from "../components/Editor/Avatar";
import AdvancedSettings from "../components/Editor/AdvancedSettings/AdvancedSettings";
import SocialsModal from "../components/Editor/SocialsModal/SocialsModal";
import { usePageContentStore } from "../stores/usePageContentStore";
import { Toaster } from "react-hot-toast";
import FontDropdown from "../components/Editor/FontDropdown";
import BaseEditor from "../components/Editor/BaseEditor/BaseEditor";
import GlassEditor from "../components/Editor/GlassEditor/GlassEditor";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

const Divider = () => <div className="h-full w-[2px] bg-indigo-50/20" />;

export default function Home() {
  const {
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    font,
    extendedSocials,
    setExtendedSocials,
  } = useEditorStylesStore((state) => state);

  const { pageTheme, setPageTheme } = usePageContentStore((state) => state);

  const [projects, setProjects] = useState([]);

  const [projectModalOpen, setProjectModalOpen] = useState<boolean>(false);
  const [socialModalOpen, setSocialModalOpen] = useState<boolean>(false);

  const [colorCombo, setColorCombo] = useState<ColorCombo>(colorCombos[0]);
  const [invertColors, setInvertColors] = useState<boolean>(false);

  const [advancedSettingsOpen, setAdvancedSettingsOpen] =
    useState<boolean>(false);

  const [avatarShape, setAvatarShape] = useState<"circle" | "square">("circle");

  return (
    <div className="relative flex h-screen min-h-screen w-full flex-col overflow-hidden bg-slate-50">
      <Toaster />
      {/* Logo Header */}
      <EditorHeader />

      {/* Project Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      <SocialsModal
        isOpen={socialModalOpen}
        onClose={() => {
          setSocialModalOpen(false);
        }}
      />
      <div className={`flex h-full w-full overflow-hidden`}>
        <div
          className={`flex h-full w-full flex-col transition-all ${
            advancedSettingsOpen && "xl:mr-[24rem]"
          }`}
        >
          {/* Settings Header */}
          <div className="flex w-full items-center justify-center border-b border-b-dark-600 bg-dark-800 px-6 py-2">
            {/* Font Select */}
            <div className="flex h-full space-x-2">
              <div className="flex items-center space-x-2 text-white">
                <button
                  onClick={() => setExtendedSocials(!extendedSocials)}
                  className={`group relative flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md font-sans transition hover:bg-dark-700 ${
                    extendedSocials ? "bg-dark-700" : ""
                  }`}
                >
                  <Tooltip position="bottom">
                    {extendedSocials ? "Collapse" : "Extend"}&nbsp;Socials
                  </Tooltip>
                  {extendedSocials ? (
                    <Squares2X2Icon className="h-5 w-5" />
                  ) : (
                    <QueueListIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <Divider />
              <div className="flex items-center space-x-2 text-white">
                <FontDropdown />
              </div>
              <Divider />
              <div className="flex items-center space-x-2 text-white">
                <ColorComboSelector
                  invert={invertColors}
                  selectedCombo={colorCombo}
                  setSelectedCombo={setColorCombo}
                />
                <button
                  onClick={() => {
                    setTextColor(backgroundColor);
                    setBackgroundColor(textColor);
                    setInvertColors(!invertColors);
                  }}
                  className={`group relative flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md font-sans transition ease-in-out hover:bg-dark-700`}
                >
                  <Tooltip position="bottom">Invert Colors</Tooltip>
                  <ArrowPathIcon
                    className={`h-5 w-5 transition ${
                      invertColors ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Divider />
              <div className="flex items-center space-x-2 text-white">
                <button
                  onClick={() => setPageTheme("flat")}
                  className={`${
                    pageTheme === "flat" ? "bg-dark-700" : ""
                  } group relative flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md font-sans transition hover:bg-dark-700`}
                >
                  <Tooltip position="bottom">Flat</Tooltip>
                  <div className="h-4 w-4 rounded-sm bg-white" />
                </button>
                <button
                  onClick={() => setPageTheme("brutalist")}
                  className={`${
                    pageTheme === "brutalist" ? "bg-dark-700" : ""
                  } group relative flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md font-sans transition hover:bg-dark-700`}
                >
                  <Tooltip position="bottom">Brutalist</Tooltip>
                  <div
                    style={{
                      boxShadow: "2px 2px 0 0px #fff",
                    }}
                    className="h-4 w-4 rounded-sm border-2 border-white"
                  />
                </button>
                <button
                  onClick={() => setPageTheme("glass")}
                  className={`${
                    pageTheme === "glass" ? "bg-dark-700" : ""
                  } group relative flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md font-sans transition hover:bg-dark-700`}
                >
                  <Tooltip position="bottom">Glass</Tooltip>
                  <div
                    style={{
                      background:
                        "radial-gradient(circle at 100% 100%, #333, #333 50%, #eee 75%, #333333 75%)",
                    }}
                    className="h-4 w-4 rounded-sm border"
                  />
                </button>
              </div>
              <Divider />
              <button
                onClick={() => setAdvancedSettingsOpen(!advancedSettingsOpen)}
                className={`group relative flex aspect-square cursor-pointer items-center justify-center rounded-md px-3 py-2 font-mono text-white transition hover:bg-dark-700`}
              >
                <Tooltip position="bottom">Advanced Settings</Tooltip>
                <AdjustmentsHorizontalIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            className={`h-auto w-full overflow-y-auto bg-slate-200 p-4 ${font.className}`}
          >
            <AnimatePresence mode="wait">
              {pageTheme === "flat" || pageTheme === "brutalist" ? (
                <AnimatedEditorContainer key="base">
                  <BaseEditor
                    projectModalOpen={projectModalOpen}
                    setProjectModalOpen={setProjectModalOpen}
                    socialModalOpen={socialModalOpen}
                    setSocialModalOpen={setSocialModalOpen}
                  />
                </AnimatedEditorContainer>
              ) : (
                <AnimatedEditorContainer key="glass">
                  <GlassEditor
                    projectModalOpen={projectModalOpen}
                    setProjectModalOpen={setProjectModalOpen}
                    socialModalOpen={socialModalOpen}
                    setSocialModalOpen={setSocialModalOpen}
                  />
                </AnimatedEditorContainer>
              )}
            </AnimatePresence>
          </div>
        </div>
        <AdvancedSettings
          open={advancedSettingsOpen}
          setOpen={setAdvancedSettingsOpen}
          setSocialModalOpen={setSocialModalOpen}
        />
      </div>
    </div>
  );
}

const AnimatedEditorContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <m.div
      variants={appearAnim}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </m.div>
  );
};
