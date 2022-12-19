import { useState, useRef, useLayoutEffect } from "react";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import HeaderLogo from "../components/shared/HeaderLogo";
import {
  CameraIcon,
  PlusIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import {
  AdjustmentsHorizontalIcon,
  QueueListIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import {
  backgroundColors,
  testBio,
  testName,
  testSocials,
  textColors,
} from "../constants/testData";
import TextareaAutosize from "react-textarea-autosize";
import {
  EditorStyle,
  useEditorStylesStore,
} from "../stores/useEditorStylesStore";
import EditorHeader from "../components/shared/EditorHeader";
import { Social } from "../constants/editor/types";
import Tooltip from "../components/shared/Tooltip";
import ColorPicker from "../components/ProjectModal/ColorPicker";
import SocialLink from "../components/Editor/SocialLink";

interface FontStyle {
  [key: string]: {
    fontClass: string;
    label: string;
    value: EditorStyle;
  };
}

const fontClassMap: FontStyle = {
  default: {
    fontClass: "font-sans",
    label: "Default",
    value: "default",
  },
  serif: {
    fontClass: "font-serif",
    label: "Serif",
    value: "serif",
  },
  mono: {
    fontClass: "font-mono",
    label: "Mono",
    value: "mono",
  },
  grotesque: {
    fontClass: "font-grotesque",
    label: "Brutalist",
    value: "grotesque",
  },
};

const Divider = () => <div className="h-full w-px bg-indigo-50/10" />;

export default function Home() {
  const editorStyle = useEditorStylesStore((state) => state.editorStyle);
  const setEditorStyle = useEditorStylesStore((state) => state.setEditorStyle);
  const textColor = useEditorStylesStore((state) => state.textColor);
  const setTextColor = useEditorStylesStore((state) => state.setTextColor);
  const backgroundColor = useEditorStylesStore(
    (state) => state.backgroundColor
  );
  const setBackgroundColor = useEditorStylesStore(
    (state) => state.setBackgroundColor
  );

  const [projects, setProjects] = useState([]);
  const [name, setName] = useState<string>(testName);
  const [bio, setBio] = useState<string>(testBio);
  const [bannerImage, setBannerImage] = useState<string>(
    "https://media.istockphoto.com/id/1411253803/photo/universal-linkedin-banner-with-pink-sunset-over-the-alps-for-any-profession.jpg?b=1&s=170667a&w=0&k=20&c=V3-D3Hc47eMkqbyPDOvQRqcsCrwZPTckg_1OdDWYoS8="
  );
  const [avatarImage, setAvatarImage] = useState<string>(
    "https://github.com/digitdustin.png"
  );
  const [socials, setSocials] = useState<Social[]>(testSocials);
  const [extendSocials, setExtendSocials] = useState<boolean>(false);

  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingBio, setEditingBio] = useState<boolean>(false);

  const [projectModalOpen, setProjectModalOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen min-h-screen w-full flex-col bg-slate-50">
      {/* Logo Header */}
      <EditorHeader />
      {/* Settings Header */}
      <div className="flex w-full items-center justify-center border-b border-b-dark-600 bg-dark-800 px-6 py-2">
        {/* Settings Header */}
        <div></div>
        {/* Font Select */}
        <div className="flex h-full space-x-2">
          <div className="flex items-center space-x-2 text-white">
            <div className="editor-color-picker group relative">
              <ColorPicker
                position="left"
                color={textColor}
                setColor={setTextColor}
                colors={textColors}
              />
              <Tooltip position="top">Text Color</Tooltip>
              <p className="center-vertical center-horizontal pointer-events-none absolute font-grotesque text-sm underline mix-blend-difference">
                A
              </p>
            </div>
            <div className="editor-color-picker group relative">
              <ColorPicker
                position="left"
                color={backgroundColor}
                setColor={setBackgroundColor}
                colors={backgroundColors}
              />
              <Tooltip position="top">Background Color</Tooltip>

              <div className="center-vertical center-horizontal pointer-events-none absolute h-3 w-3 rounded-sm border-2 border-dotted border-white mix-blend-difference" />
            </div>
          </div>
          <Divider />
          <div className="flex items-center space-x-2 text-white">
            <button
              onClick={() => setExtendSocials(!extendSocials)}
              className={`group relative flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md font-sans transition hover:bg-dark-700 ${
                extendSocials ? "bg-dark-700" : ""
              }`}
            >
              <Tooltip position="bottom">
                {extendSocials ? "Collapse" : "Extend"}&nbsp;Socials
              </Tooltip>
              {extendSocials ? (
                <Squares2X2Icon className="h-5 w-5" />
              ) : (
                <QueueListIcon className="h-5 w-5" />
              )}
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
                  } group relative aspect-square w-10 cursor-pointer rounded-md font-sans transition hover:bg-dark-700`}
                >
                  <Tooltip position="bottom">{font.label}</Tooltip>
                  Aa
                </button>
              );
            })}
          </div>
          <Divider />
          <p
            className={`flex cursor-pointer items-center rounded-md px-3 py-2 font-mono text-white transition hover:bg-dark-700`}
          >
            <AdjustmentsHorizontalIcon className="h-4 w-4" />
          </p>
        </div>
      </div>
      {/* Project Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
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
            <div className="group absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-t-md transition hover:bg-black/30">
              <div className="flex items-center space-x-2 opacity-0 transition group-hover:opacity-100">
                <CameraIcon className="h-5 w-5 text-white" />
                <span className="font-sans text-sm font-semibold text-white">
                  Change Banner Image
                </span>
              </div>
            </div>
            <img
              src={bannerImage}
              className={`absolute h-full w-full rounded-t-md object-cover`}
            />
            <div className="relative mx-auto h-52 w-full max-w-4xl">
              <div
                style={{
                  borderColor:
                    editorStyle === "grotesque" ? textColor : "white",
                }}
                className={`absolute -bottom-20 left-1/2 z-20 h-36 w-36 -translate-x-1/2 rounded-full border-4 bg-slate-600 md:left-20 md:translate-x-0 ${
                  editorStyle === "grotesque"
                    ? "border-dark-700"
                    : "border-white"
                }`}
              >
                {/* Change Avatar Image */}
                <div className="group group absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full transition hover:bg-black/30">
                  <CameraIcon className="h-5 w-5 text-white opacity-0 transition group-hover:opacity-100" />
                </div>
                <img src={avatarImage} className="h-full w-full rounded-full" />
              </div>
            </div>
          </div>
          <div className="mx-auto mb-8 w-full max-w-4xl px-8 pt-24 pb-8 sm:px-10 md:px-20">
            <input
              type="text"
              className={`w-full rounded-md text-center text-2xl font-semibold transition-all hover:bg-sky-400/20 hover:p-2 md:w-auto md:text-left ${
                editingName ? "bg-sky-400/20 p-2" : "bg-transparent"
              }`}
              onFocus={() => setEditingName(true)}
              onBlur={() => setEditingName(false)}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextareaAutosize
              className={`mt-4 h-auto w-full resize-none rounded-md text-center text-base transition-all hover:bg-sky-400/20 hover:px-2 sm:text-lg md:text-left ${
                editingBio ? "bg-sky-400/20 px-2" : "bg-transparent"
              }`}
              spellCheck="false"
              onFocus={() => setEditingBio(true)}
              onBlur={() => setEditingBio(false)}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <div
              className={`mt-4 flex ${
                extendSocials
                  ? "w-full flex-col space-y-3"
                  : "justify-center space-x-3 md:justify-start"
              }`}
            >
              {socials.map((social) => (
                <SocialLink
                  key={social.network}
                  network={social.network}
                  url={social.url}
                  extend={extendSocials}
                  editorStyle={editorStyle}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto mb-8 w-full max-w-4xl space-y-4 px-8 sm:px-10 md:px-20">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Projects</h1>
              <button
                onClick={() => setProjectModalOpen(true)}
                className="flex items-center space-x-2 rounded-md bg-gradient-to-br from-indigo-400 to-fuchsia-400 py-2 px-4 font-sans text-sm text-white"
              >
                <p>Add Project</p>
                <PlusIcon className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-2 rounded-md bg-white/20 p-4 py-8 transition">
              <PlusCircleIcon className="h-8 w-8 text-slate-400" />
              <p className="ml-2 text-center font-sans text-slate-500">
                You currently have no projects... Click add to create one!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
