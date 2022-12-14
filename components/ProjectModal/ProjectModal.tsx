import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { ArrowLeftIcon, LinkIcon } from "@heroicons/react/24/outline";
import ProjectBlock from "../ProjectBlock";
import IconInput from "./IconInput";
import Input from "./Input";
import ColorPicker from "./ColorPicker";
import useSiteShot from "../../hooks/useSiteShot";
import Seaweed from "../../assets/seaweed.jpeg";
import Modal from "../shared/Modal";
import TypeSelector from "./TypeSelector";
import TextArea from "./TextArea";
import { motion as m } from "framer-motion";
import { AnimateHeight } from "../shared/AnimateHeight";
import { useEffect } from "react";
import { Palette } from "react-palette";

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
  const [projectDescription, setProjectDescription] = useState<string>("");

  const [projectUrl, setProjectUrl] = useState<string>(""); // for display in inputs
  const [projectLink, setProjectLink] = useState<string>(""); // for fetching screenshot

  const [projectColor, setProjectColor] = useState<string>("#000000");
  const [colorPickerOpen, setColorPickerOpen] = useState<boolean>(false);

  const [showEditControls, setShowEditControls] = useState<boolean>(false);

  // TESTING
  const [testImageURL, setTestImageURL] = useState<string>(
    "https://d3alngem7je9z2.cloudfront.net/screenshots/overflow.jpg"
  );
  const [testMobileImageURL, setTestMobileImageURL] = useState<string>(
    "https://i.pinimg.com/474x/be/41/a4/be41a4e54efa55280ba05576788e5ab9.jpg"
  );

  // REAL
  const [webImageURL, setWebImageURL] = useState<string>("");
  const [mobileImageURL, setMobileImageURL] = useState<string>("");

  const getProjectInfo = () => {
    setProjectLink(projectUrl);
  };

  const siteShot = useSiteShot(projectLink);

  const variants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    collapsed: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    if (siteShot.status === "loaded") {
      setShowEditControls(true);
      setWebImageURL(siteShot.payload.webImage);
      setMobileImageURL(siteShot.payload.mobileImage);
    }
  }, [siteShot.status]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Dialog.Panel className="w-full max-w-xl transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
        >
          {showEditControls ? (
            <div className="flex items-center">
              <div
                className="h-6 w-6 mr-2 flex items-center cursor-pointer"
                onClick={() => setShowEditControls(false)}
              >
                <ArrowLeftIcon className="h-5 w-5 text-blue-500" />
              </div>
              Edit Project
            </div>
          ) : (
            "Add Project"
          )}
        </Dialog.Title>
        <AnimateHeight
          variants={variants}
          isVisible={showEditControls === true}
        >
          <div className="mt-4">
            <p className="text-sm text-gray-500">Preview</p>
            <div className="mt-2 w-full border rounded-md bg-slate-100 transition hover:bg-slate-200 p-4 items-center flex justify-center">
              <div className="shadow-lg w-full h-full">
                <ProjectBlock
                  type={projectType}
                  name={projectName}
                  color={projectColor}
                  webImage={webImageURL}
                  mobileImage={mobileImageURL}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Palette src={webImageURL}>
              {({ data, loading, error }) => {
                if (loading) return <></>;
                if (error) return <></>;
                const { vibrant } = data;
                if (vibrant) {
                  setProjectColor(vibrant);
                }
              }}
            </Palette>
            <p className="text-sm text-gray-500 mb-2">Card Color</p>
            <ColorPicker
              color={projectColor}
              setColor={setProjectColor}
              open={colorPickerOpen}
              setOpen={setColorPickerOpen}
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Project Type</p>
            <TypeSelector
              projectTypes={projectTypes}
              selectedType={projectType}
              setType={setProjectType}
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Description</p>
            <TextArea
              value={projectDescription}
              placeholder="Project Description"
              setValue={setProjectDescription}
            />
          </div>
          <div className="mt-4">
            <button className="w-full rounded-md text-center transition min-h-[44px] bg-blue-500 hover:bg-blue-600 py-3 group">
              <p className="text-white text-sm">Add Project</p>
            </button>
          </div>
        </AnimateHeight>
        <AnimateHeight
          variants={variants}
          isVisible={showEditControls === false}
        >
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Project Title</p>
            <Input
              value={projectName}
              placeholder="Project Title"
              type="text"
              setValue={setProjectName}
            />
          </div>

          {/* Project Link */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Project URL:</p>
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
        </AnimateHeight>
      </Dialog.Panel>
    </Modal>
  );
};

export default ProjectModal;
