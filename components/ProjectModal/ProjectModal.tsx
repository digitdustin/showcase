import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import ProjectBlock from "../ProjectBlock";
import IconInput from "./IconInput";
import Input from "./Input";
import ColorPicker from "./ColorPicker";
import useSiteShot from "../../hooks/useSiteShot";
import Seaweed from "../../assets/seaweed.jpeg";

const projectTypes = ["web", "app", "mobile"];
const tabs = ["Import from URL", "Build from Scratch"];

export type ProjectType = typeof projectTypes[number];

const ProjectModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [projectType, setProjectType] = useState<ProjectType>("web");
  const [projectName, setProjectName] = useState<string>("");

  const [projectUrl, setProjectUrl] = useState<string>(""); // for display in inputs
  const [projectLink, setProjectLink] = useState<string>(""); // for fetching screenshot

  const [projectColor, setProjectColor] = useState<string>("#000000");
  const [colorPickerOpen, setColorPickerOpen] = useState<boolean>(false);

  const getProjectInfo = () => {
    setProjectLink(projectUrl);
  };

  const siteShot = useSiteShot(projectLink);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                onClick={() => setColorPickerOpen(false)}
                className="w-full max-w-xl transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Project
                </Dialog.Title>
                {/* Project Name */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Project Title + Color</p>
                  <div className="w-full flex space-x-4 items-center mt-2 ">
                    <Input
                      value={projectName}
                      placeholder="Project Title"
                      type="text"
                      setValue={setProjectName}
                    />
                    <ColorPicker
                      color={projectColor}
                      setColor={setProjectColor}
                      open={colorPickerOpen}
                      setOpen={setColorPickerOpen}
                    />
                  </div>
                </div>
                {/* Project Link */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Project URL:</p>
                  <IconInput
                    icon={LinkIcon}
                    value={projectUrl}
                    placeholder="https://example.com"
                    type="text"
                    setValue={setProjectUrl}
                  />
                </div>
                <div className="mt-4">
                  <button
                    onClick={getProjectInfo}
                    className="w-full rounded-md text-center transition min-h-[44px] bg-blue-500 hover:bg-blue-600 py-3 group"
                  >
                    {siteShot.status === "loading" ? (
                      <div className="bouncing-loader">
                        <div className="" />
                        <div className="" />
                        <div className="" />
                      </div>
                    ) : (
                      <p className="text-white text-sm">Generate</p>
                    )}
                  </button>
                </div>
                {siteShot.status === "loaded" && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Preview</p>
                    <div className="mt-2 w-full border rounded-md bg-slate-100 transition hover:bg-slate-200 p-4 items-center flex justify-center">
                      <div className="shadow-lg w-full h-full">
                        <ProjectBlock
                          type={projectType}
                          name={projectName}
                          color={projectColor}
                          webImage={`${siteShot.payload.image}`}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
