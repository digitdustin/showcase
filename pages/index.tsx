import { useState, useRef, useLayoutEffect, useEffect } from "react";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { CameraIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  AdjustmentsHorizontalIcon,
  QueueListIcon,
  Squares2X2Icon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import {
  ColorCombo,
  colorCombos,
  testBio,
  testName,
  testSocials,
} from "../constants/testData";
import TextareaAutosize from "react-textarea-autosize";
import {
  EditorStyle,
  useEditorStylesStore,
} from "../stores/useEditorStylesStore";
import EditorHeader from "../components/shared/EditorHeader";
import { Social } from "../constants/editor/types";
import Tooltip from "../components/shared/Tooltip";
import SocialLink from "../components/Editor/SocialLink";
import ColorComboSelector from "../components/ProjectModal/ColorComboSelector";
import { handleFileUpload } from "../utils/images/imageUtils";
import Avatar from "../components/Editor/Avatar";
import AdvancedSettings from "../components/Editor/AdvancedSettings";
import SocialsModal from "../components/Editor/SocialsModal/SocialsModal";
import { motion as m } from "framer-motion";
import { usePageContentStore } from "../stores/usePageContentStore";
import { Toaster } from "react-hot-toast";
import { notify } from "../utils/toast/toastUtils";

interface FontStyle {
  [key: string]: {
    fontClass: string;
    label: string;
    value: EditorStyle;
  };
}

const fontClassMap: FontStyle = {
  default: {
    fontClass: "!font-sans",
    label: "Default",
    value: "default",
  },
  serif: {
    fontClass: "!font-serif",
    label: "Serif",
    value: "serif",
  },
  mono: {
    fontClass: "!font-mono",
    label: "Mono",
    value: "mono",
  },
  grotesque: {
    fontClass: "!font-grotesque",
    label: "Brutalist",
    value: "grotesque",
  },
};

const Divider = () => <div className="h-full w-[2px] bg-indigo-50/20" />;

export default function Home() {
  const {
    editorStyle,
    setEditorStyle,
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    extendedSocials,
    setExtendedSocials,
    monochromaticSocials,
    setMonochromaticSocials,
    socialsColor,
    setSocialsColor,
    headerCentered,
    setHeaderCentered,
  } = useEditorStylesStore((state) => state);

  const {
    name,
    setName,
    bio,
    setBio,
    socials,
    setSocials,
    bannerImage,
    setBannerImage,
    avatarImage,
    setAvatarImage,
  } = usePageContentStore((state) => state);

  const [projects, setProjects] = useState([]);

  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingBio, setEditingBio] = useState<boolean>(false);

  const [projectModalOpen, setProjectModalOpen] = useState<boolean>(false);
  const [socialModalOpen, setSocialModalOpen] = useState<boolean>(false);

  const [colorCombo, setColorCombo] = useState<ColorCombo>(colorCombos[0]);
  const [invertColors, setInvertColors] = useState<boolean>(false);

  const [advancedSettingsOpen, setAdvancedSettingsOpen] =
    useState<boolean>(false);

  const [avatarShape, setAvatarShape] = useState<"circle" | "square">("circle");

  return (
    <div className="relative flex h-screen min-h-screen w-full flex-col bg-slate-50">
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
        onClose={() => setSocialModalOpen(false)}
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
                {Object.values(fontClassMap).map((font) => {
                  return (
                    <button
                      key={font.value}
                      onClick={() => setEditorStyle(font.value)}
                      className={`${
                        editorStyle === font.value ? "bg-dark-700" : ""
                      } group relative aspect-square w-10 cursor-pointer rounded-md font-sans transition hover:bg-dark-700 ${
                        fontClassMap[editorStyle].fontClass
                      }`}
                    >
                      <Tooltip position="bottom">{font.label}</Tooltip>
                      Aa
                    </button>
                  );
                })}
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
            className={`h-auto w-full overflow-y-auto bg-slate-200 p-4 ${fontClassMap[editorStyle].fontClass}`}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor,
                color: textColor,
              }}
              className={`h-auto w-full rounded-md pb-4 transition-colors`}
            >
              <div className="relative h-52 w-full rounded-t-md">
                {/* Change Banner Image */}
                <div className="group absolute inset-0 z-10 flex h-full w-full items-center justify-center rounded-t-md transition hover:bg-black/30">
                  <label
                    htmlFor={"banner-image-upload"}
                    className="flex h-full w-full cursor-pointer items-center justify-center"
                  >
                    <div className="opacity-0 transition group-hover:opacity-100">
                      <CameraIcon className="mx-auto h-5 w-5 text-white" />
                      <span className="font-sans text-sm font-semibold text-white">
                        Change Banner Image
                      </span>
                    </div>
                    <input
                      type="file"
                      id={"banner-image-upload"}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        handleFileUpload({
                          e,
                          setImage: setBannerImage,
                        });
                      }}
                    />
                  </label>
                </div>
                <img
                  src={bannerImage}
                  className={`absolute h-full w-full rounded-t-md object-cover`}
                />

                <div className="relative mx-auto h-52 w-full max-w-4xl">
                  <Avatar
                    avatarShape={avatarShape}
                    setAvatarShape={setAvatarShape}
                    avatarImage={avatarImage}
                    setAvatarImage={setAvatarImage}
                    editorStyle={editorStyle}
                  />
                </div>
              </div>
              <div
                className={`mx-auto mb-8 w-auto max-w-4xl px-8 pt-24 pb-8 transition-all sm:px-10 md:px-20 ${
                  headerCentered ? "text-center" : "text-left"
                }`}
              >
                <input
                  type="text"
                  className={`w-full rounded-md text-2xl font-semibold transition-all hover:bg-sky-400/20 hover:p-2 ${
                    editingName ? "bg-sky-400/20 p-2" : "bg-transparent"
                  } ${headerCentered ? "text-center" : "text-left"}`}
                  onFocus={() => setEditingName(true)}
                  onBlur={() => setEditingName(false)}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextareaAutosize
                  className={`mt-4 h-auto w-full resize-none rounded-md text-base transition-all hover:bg-sky-400/20 hover:px-2 sm:text-lg ${
                    editingBio ? "bg-sky-400/20 px-2" : "bg-transparent"
                  } ${headerCentered ? "text-center" : "text-left"}`}
                  spellCheck="false"
                  onFocus={() => setEditingBio(true)}
                  onBlur={() => setEditingBio(false)}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <div
                  className={`mt-4 flex ${
                    extendedSocials ? "w-full flex-col space-y-3" : "space-x-3"
                  } ${headerCentered ? "justify-center" : "justify-start"}`}
                >
                  {socials.map((social) => (
                    <SocialLink
                      key={social.network}
                      network={social.network}
                      url={social.url}
                      extend={extendedSocials}
                      monochromatic={monochromaticSocials}
                      monochromaticColor={socialsColor}
                      editorStyle={editorStyle}
                    />
                  ))}
                  <m.div layout="position" className="group relative">
                    <Tooltip position="bottom">Add Social Link</Tooltip>
                    <PlusIcon
                      onClick={() => setSocialModalOpen(true)}
                      className="h-10 w-10 cursor-pointer rounded-full border-2 border-white bg-white bg-gradient-to-br from-indigo-400 to-fuchsia-400 p-1 text-white shadow-md transition hover:shadow-lg"
                    />
                  </m.div>
                </div>
              </div>
              <div className="mx-auto mb-8 w-full max-w-4xl space-y-4 px-8 sm:px-10 md:px-20">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold">Projects</h1>
                  <button
                    onClick={() => setProjectModalOpen(true)}
                    className="flex items-center space-x-2 rounded-md border-2 border-white bg-gradient-to-br from-indigo-400 to-fuchsia-400 py-2 px-4 font-sans text-sm text-white shadow-md shadow-indigo-800/20 transition hover:shadow-lg hover:shadow-indigo-800/20"
                  >
                    <p>Add Project</p>
                    <PlusIcon className="h-4 w-4 text-white" />
                  </button>
                </div>
                <div
                  style={{
                    color: textColor,
                  }}
                  className="flex w-full flex-col items-center justify-center space-y-2 rounded-md p-4 py-8 opacity-80 transition"
                >
                  <button className="group relative">
                    <Tooltip position="top">Add Project</Tooltip>
                    <PlusIcon
                      onClick={() => setProjectModalOpen(true)}
                      className="h-8 w-8 cursor-pointer rounded-full border-2 border-white bg-white bg-gradient-to-br from-indigo-400 to-fuchsia-400 p-1 text-white shadow-md transition hover:shadow-lg"
                    />
                  </button>
                  <p className="ml-2 text-center font-sans">
                    You currently have no projects... Click add to create one!
                  </p>
                </div>
              </div>
            </div>
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
