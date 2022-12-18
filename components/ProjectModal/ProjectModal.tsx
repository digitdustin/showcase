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

const ModalLabel = ({ label }: { label: string }) => (
  <p className="mb-2 text-sm text-gray-500">{label}</p>
);

const ModalSection = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4">{children}</div>
);

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
                className="mr-2 flex h-6 w-6 cursor-pointer items-center"
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
          <ModalSection>
            <ModalLabel label="Preview" />
            <div className="flex w-full items-center justify-center rounded-md border bg-slate-100 p-4 transition hover:bg-slate-200">
              <div className="h-full w-full shadow-lg">
                <ProjectBlock
                  type={projectType}
                  name={projectName}
                  color={projectColor}
                  webImage={testImageURL}
                  mobileImage={testMobileImageURL}
                  setWebImage={setTestImageURL}
                  setMobileImage={setTestMobileImageURL}
                />
              </div>
            </div>
          </ModalSection>
          <ModalSection>
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
            <ModalLabel label="Card Color" />
            <ColorPicker
              color={projectColor}
              setColor={setProjectColor}
              open={colorPickerOpen}
              setOpen={setColorPickerOpen}
              position="left"
            />
          </ModalSection>
          <ModalSection>
            <ModalLabel label="Project Type" />
            <TypeSelector
              projectTypes={projectTypes}
              selectedType={projectType}
              setType={setProjectType}
            />
          </ModalSection>
          <ModalSection>
            <ModalLabel label="Description" />
            <TextArea
              value={projectDescription}
              placeholder="Project Description"
              setValue={setProjectDescription}
            />
          </ModalSection>
          <ModalSection>
            <button className="group min-h-[44px] w-full rounded-md bg-blue-500 py-3 text-center transition hover:bg-blue-600">
              <p className="text-sm text-white">Add Project</p>
            </button>
          </ModalSection>
        </AnimateHeight>
        <AnimateHeight
          variants={variants}
          isVisible={showEditControls === false}
        >
          <ModalSection>
            <ModalLabel label="Project Title" />
            <Input
              value={projectName}
              placeholder="Project Title"
              type="text"
              setValue={setProjectName}
            />
          </ModalSection>

          {/* Project Link */}
          <ModalSection>
            <ModalLabel label="Project URL:" />
            <IconInput
              icon={LinkIcon}
              value={projectUrl}
              placeholder="https://example.com"
              type="text"
              setValue={setProjectUrl}
            />
          </ModalSection>
          <ModalSection>
            <button
              onClick={getProjectInfo}
              className="group min-h-[44px] w-full rounded-md bg-gradient-to-r from-indigo-400 to-fuchsia-400 py-3 text-center transition"
            >
              {siteShot.status === "loading" ? (
                <div className="bouncing-loader">
                  <div className="" />
                  <div className="" />
                  <div className="" />
                </div>
              ) : (
                <p className="text-sm text-white">Generate</p>
              )}
            </button>
          </ModalSection>
        </AnimateHeight>
      </Dialog.Panel>
    </Modal>
  );
};

export default ProjectModal;
