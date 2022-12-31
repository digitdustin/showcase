import { useState, useRef, useLayoutEffect, useEffect } from "react";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { CameraIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  AdjustmentsHorizontalIcon,
  QueueListIcon,
  Squares2X2Icon,
  ArrowPathIcon,
  PaintBrushIcon,
  AtSymbolIcon,
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
import SocialsModal from "../components/Editor/SocialsModal/SocialsModal";
import { usePageContentStore } from "../stores/usePageContentStore";
import { Toaster } from "react-hot-toast";
import FontDropdown from "../components/Editor/FontDropdown";
import BaseEditor from "../components/Editor/BaseEditor/BaseEditor";
import GlassEditor from "../components/Editor/GlassEditor/GlassEditor";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";
import MobileHeader from "components/shared/MobileHeader";
import WebHeader from "components/shared/WebHeader";
import SettingsPanel from "../components/Editor/AdvancedSettings/SettingsPanel";
import { useControlsStore } from "stores/useControlsStore";

export default function Editor() {
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

  const { settingsOpen, setSettingsOpen, setActiveSettingsPanel } =
    useControlsStore();

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
      <MobileHeader />
      <WebHeader />
      <div className={`flex h-full w-full overflow-hidden`}>
        <div
          className={`flex h-full w-full flex-col transition-all md:ml-[4.5rem] ${
            settingsOpen && "lg:ml-[28.5rem]"
          }`}
        >
          {/* Settings Header */}
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
        <SettingsPanel setSocialModalOpen={setSocialModalOpen} />
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
