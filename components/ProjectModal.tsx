import { Dialog, Transition, Popover } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  WindowIcon,
  DevicePhoneMobileIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import ProjectBlock from "./ProjectBlock";
import { TwitterPicker } from "react-color";

const projectTypes = ["web", "app", "mobile"];

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
  const [projectLink, setProjectLink] = useState<string>("");
  const [projectColor, setProjectColor] = useState<string>("#000000");
  const [colorPickerOpen, setColorPickerOpen] = useState<boolean>(false);

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
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    What type of project is it?
                  </p>
                </div>
                {/* Project Type */}
                <div className="mt-2 flex space-x-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`${
                        projectType === type ? "bg-slate-100" : "bg-slate-50"
                      } w-1/3 rounded-md border transition hover:bg-slate-100 py-4 cursor-pointer items-center flex justify-center`}
                    >
                      {type === "web" && (
                        <WindowIcon className="h-6 w-6 text-slate-800" />
                      )}
                      {type === "app" && (
                        <DevicePhoneMobileIcon className="h-6 w-6 text-slate-800" />
                      )}
                      {type === "mobile" && (
                        <div className=" flex items-center space-x-2">
                          <WindowIcon className="h-6 w-6 text-slate-800" />
                          <p>+</p>
                          <DevicePhoneMobileIcon className="h-6 w-6 text-slate-800" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {/* Project Name */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Project Title</p>
                  <div className="w-full flex space-x-4 items-center mt-2 ">
                    <input
                      type="text"
                      placeholder="My Project"
                      className="w-full rounded-md border bg-slate-50 transition hover:bg-slate-100 py-2 px-4 items-center flex justify-center"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                    {/* ColorPicker */}
                    <Popover
                      style={{ backgroundColor: projectColor }}
                      className="relative h-10 w-10 !aspect-square rounded-md transition"
                    >
                      <Popover.Button
                        onClick={() => setColorPickerOpen(!colorPickerOpen)}
                        className="w-10 h-10"
                      ></Popover.Button>
                      <Transition
                        show={colorPickerOpen}
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute z-20 right-0">
                          <TwitterPicker
                            triangle="top-right"
                            onChange={(color: any) =>
                              setProjectColor(color.hex)
                            }
                          />
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </div>
                </div>
                {/* Project Link */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Project Link</p>
                  <div className="mt-2 w-full relative rounded-md border bg-slate-50 transition hover:bg-slate-100 items-center flex justify-start items-center">
                    <LinkIcon className="absolute left-4 my-auto h-5 w-5 text-slate-400" />
                    <input
                      className="py-2 w-full bg-transparent pr-4 pl-12 rounded-md"
                      type="text"
                      placeholder="https://example.com"
                      value={projectLink}
                      onChange={(e) => setProjectLink(e.target.value)}
                    />
                  </div>
                </div>
                {/* Preview */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Preview</p>
                  <div className="mt-2 w-full border rounded-md bg-slate-100 transition hover:bg-slate-200 p-4 items-center flex justify-center">
                    <div className="shadow-lg w-full h-full">
                      <ProjectBlock
                        type={projectType}
                        name={projectName}
                        color={projectColor}
                      />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
