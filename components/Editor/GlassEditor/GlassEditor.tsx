import { CameraIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { usePageContentStore } from "../../../stores/usePageContentStore";
import { handleFileUpload } from "../../../utils/images/imageUtils";
import Avatar from "../Avatar";
import TextareaAutosize from "react-textarea-autosize";
import SocialsList from "../SocialsList";
import { Gradient } from "../../../components/shared/Gradient";
import Tooltip from "../../shared/Tooltip";
import GlassSocialsList from "./GlassSocialsList";
import { useGlassStyleStore } from "../../../stores/useGlassStyleStore";
import GlassAvatar from "./GlassAvatar";

const GlassEditor = ({
  projectModalOpen,
  setProjectModalOpen,
  socialModalOpen,
  setSocialModalOpen,
}: {
  projectModalOpen: boolean;
  setProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  socialModalOpen: boolean;
  setSocialModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { textColor } = useGlassStyleStore((state) => state);

  const { name, setName, bio, setBio, bannerImage, setBannerImage } =
    usePageContentStore((state) => state);

  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingBio, setEditingBio] = useState<boolean>(false);

  useEffect(() => {
    if (window && document) {
      // Create your instance
      const gradient = new Gradient();

      // Call `initGradient` with the selector to your canvas
      //@ts-ignore
      gradient.initGradient("#gradient-canvas");
    }
  }, []);

  return (
    <div
      style={{
        color: textColor,
      }}
      className={`relative h-auto w-full rounded-md pb-4 transition-colors`}
    >
      <canvas id="gradient-canvas" className="absolute" data-transition-in />
      <div className="relative mx-auto h-52 w-full max-w-4xl ">
        <GlassAvatar />
      </div>
      <div
        style={{
          height: "calc(100% - 208px)",
          background:
            "linear-gradient(180deg, rgba(3, 47, 70, 0.4) 0%, rgba(3, 47, 70, .9) 400px)",
        }}
        className="absolute left-0 top-0 mt-52 w-full rounded-md"
      ></div>
      <div
        className={`mx-auto mb-8 w-auto max-w-4xl px-8 pt-24 pb-8 text-center transition-all sm:px-10 md:px-20`}
      >
        <input
          type="text"
          className={`w-full rounded-md text-2xl font-semibold opacity-90 transition-all hover:bg-sky-400/20 hover:p-2 sm:text-3xl ${
            editingName ? "bg-sky-400/20 p-2" : "bg-transparent"
          } text-center`}
          onFocus={() => setEditingName(true)}
          onBlur={() => setEditingName(false)}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextareaAutosize
          className={`mt-4 h-auto w-full resize-none rounded-md text-base opacity-90 transition-all hover:bg-sky-400/20 hover:px-2 sm:text-lg ${
            editingBio ? "bg-sky-400/20 px-2" : "bg-transparent"
          } text-center`}
          spellCheck="false"
          onFocus={() => setEditingBio(true)}
          onBlur={() => setEditingBio(false)}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <GlassSocialsList setSocialModalOpen={setSocialModalOpen} />
      </div>
      <div className="mx-auto mb-8 w-full max-w-4xl space-y-4 px-8 opacity-90 sm:px-10 md:px-20">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <button
            onClick={() => setProjectModalOpen(true)}
            className="flex items-center space-x-2 rounded-md border-2 border-white bg-gradient-to-br from-indigo-400 to-fuchsia-400 py-2 px-4 font-sans text-sm text-white opacity-90 shadow-md shadow-indigo-800/20 transition hover:shadow-lg hover:shadow-indigo-800/20"
          >
            <p>Add Project</p>
            <PlusIcon className="h-4 w-4 text-white" />
          </button>
        </div>
        <div
          style={{
            color: textColor,
          }}
          className="flex w-full flex-col items-center justify-center space-y-2 rounded-md p-4 py-8 transition"
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
  );
};

export default GlassEditor;
