import { CameraIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useEditorStylesStore } from "../../../stores/useEditorStylesStore";
import { usePageContentStore } from "../../../stores/usePageContentStore";
import { handleFileUpload } from "../../../utils/images/imageUtils";
import Avatar from "../Avatar";
import TextareaAutosize from "react-textarea-autosize";
import SocialsList from "../SocialsList";
import Tooltip from "../../shared/Tooltip";
import { Frame } from "./Banners/Hearts";
import BaseBanner from "./Banners/BaseBanner";
import IconsBanner from "./Banners/IconsBanner/IconsBanner";

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
  const { backgroundColor, textColor, headerCentered, bannerType } =
    useEditorStylesStore((state) => state);

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
      }}
      className={`h-auto w-full rounded-md pb-4 transition-colors`}
    >
      <div>
        <BaseBanner
          socialModalOpen={socialModalOpen}
          setSocialModalOpen={setSocialModalOpen}
        />
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
