import { CameraIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useEditorStylesStore } from "../../../stores/useEditorStylesStore";
import { usePageContentStore } from "../../../stores/usePageContentStore";
import { handleFileUpload } from "../../../utils/images/imageUtils";
import Avatar from "../Avatar";
import TextareaAutosize from "react-textarea-autosize";
import SocialsList from "../SocialsList";
import Tooltip from "../../shared/Tooltip";

const BaseEditor = ({
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
  const {
    backgroundColor,
    textColor,
    headerCentered,
    avatarShape,
    setAvatarShape,
    editorStyle,
  } = useEditorStylesStore((state) => state);

  const { name, setName, bio, setBio, bannerImage, setBannerImage } =
    usePageContentStore((state) => state);

  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingBio, setEditingBio] = useState<boolean>(false);

  return (
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
        <SocialsList setSocialModalOpen={setSocialModalOpen} />
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
  );
};

export default BaseEditor;
