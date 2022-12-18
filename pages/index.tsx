import { useState, useRef, useLayoutEffect } from "react";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import HeaderLogo from "../components/shared/HeaderLogo";
import {
  CameraIcon,
  PlusIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { testBio, testName } from "../constants/testData";
import TextareaAutosize from "react-textarea-autosize";
import { useEditorStylesStore } from "../stores/useEditorStylesStore";
import EditorHeader from "../components/shared/EditorHeader";

const SOCIAL_CLASSNAME =
  "opacity-80 transition hover:opacity-100 hover:-translate-y-[3px]";
const SOCIAL_STYLE = { height: 40, width: 40 };

const fontClassMap = {
  default: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
};

export default function Home() {
  const editorStyle = useEditorStylesStore((state) => state.editorStyle);
  const setEditorStyle = useEditorStylesStore((state) => state.setEditorStyle);

  const [projects, setProjects] = useState([]);
  const [name, setName] = useState(testName);
  const [bio, setBio] = useState(testBio);
  const [editingName, setEditingName] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-slate-50">
      {/* Logo Header */}
      <EditorHeader />
      {/* Settings Header */}
      <div className="flex w-full items-center justify-between border-b border-b-dark-600 bg-dark-800 px-6 py-2">
        {/* Settings Header */}
        <div></div>
        {/* Font Select */}
        <div className="flex items-center space-x-2 text-white">
          <p
            onClick={() => setEditorStyle("default")}
            className={`${
              editorStyle === "default" ? "bg-dark-700" : ""
            } cursor-pointer rounded-md px-3 py-2 font-sans transition hover:bg-dark-700`}
          >
            Aa
          </p>
          <p
            onClick={() => setEditorStyle("serif")}
            className={`${
              editorStyle === "serif" ? "bg-dark-700" : ""
            } cursor-pointer rounded-md px-3 py-2 font-serif transition hover:bg-dark-700`}
          >
            Aa
          </p>
          <p
            onClick={() => setEditorStyle("mono")}
            className={`${
              editorStyle === "mono" ? "bg-dark-700" : ""
            } cursor-pointer rounded-md px-3 py-2 font-mono transition hover:bg-dark-700`}
          >
            Aa
          </p>
        </div>
      </div>
      {/* Project Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      <div
        className={`h-full w-full bg-slate-200 p-4 ${fontClassMap[editorStyle]}`}
      >
        {/* Header */}
        <div className="h-full w-full rounded-md bg-white">
          <div className="relative h-52 w-full rounded-t-md bg-red-500">
            {/* Change Banner Image */}
            <div className="group absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-t-md transition hover:bg-black/30">
              <div className="flex items-center space-x-2 opacity-0 transition group-hover:opacity-100">
                <CameraIcon className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  Change Banner Image
                </span>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1411253803/photo/universal-linkedin-banner-with-pink-sunset-over-the-alps-for-any-profession.jpg?b=1&s=170667a&w=0&k=20&c=V3-D3Hc47eMkqbyPDOvQRqcsCrwZPTckg_1OdDWYoS8="
              className="absolute h-full w-full rounded-t-md object-cover"
            />
            <div className="relative mx-auto h-52 w-full max-w-4xl">
              <div className="absolute -bottom-20 left-1/2 z-20 h-36 w-36 -translate-x-1/2 rounded-full border-4 border-white bg-slate-600 md:left-20 md:translate-x-0">
                {/* Change Avatar Image */}
                <div className="group group absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full transition hover:bg-black/30">
                  <CameraIcon className="h-5 w-5 text-white opacity-0 transition group-hover:opacity-100" />
                </div>
                <img
                  src="https://github.com/digitdustin.png"
                  className="h-full w-full rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mb-8 w-full max-w-4xl px-8 pt-24 pb-8 sm:px-10 md:px-20">
            <input
              type="text"
              className={`w-full rounded-md text-center text-4xl font-semibold text-slate-800 transition-all hover:bg-slate-100 hover:p-2 md:w-auto md:text-left ${
                editingName ? "bg-slate-100 p-2" : ""
              }`}
              onFocus={() => setEditingName(true)}
              onBlur={() => setEditingName(false)}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextareaAutosize
              className={`mt-4 h-auto w-full resize-none rounded-md text-center text-lg text-slate-800 transition-all hover:bg-slate-100 hover:px-2 md:text-left ${
                editingBio ? "bg-slate-100 px-2" : ""
              }`}
              spellCheck="false"
              onFocus={() => setEditingBio(true)}
              onBlur={() => setEditingBio(false)}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <div className="mt-4 flex flex-row justify-center space-x-3  md:justify-start">
              <SocialIcon
                network="github"
                url="https://github.com/digitdustin"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="linkedin"
                url="https://linkedin.com/in/dustinkarp"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="twitter"
                url="https://twitter.com/dkarpart"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="youtube"
                url="https://youtube.com/channel/UC8yGvmSxpuglOAnE6gF4LwA"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="email"
                url="mailto:dustinkarp52@gmail.com"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
            </div>
          </div>
          <div className="mx-auto mb-8 w-full max-w-4xl space-y-4 py-8 px-8 sm:px-10 md:px-20">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-slate-800">
                Projects
              </h1>
              <button
                onClick={() => setProjectModalOpen(true)}
                className="flex items-center space-x-2 rounded-md bg-gradient-to-br from-indigo-400 to-fuchsia-400 py-2 px-4 font-sans text-sm text-white"
              >
                <p>Add Project</p>
                <PlusIcon className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-2 rounded-md bg-slate-100 p-4 py-8 transition">
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
