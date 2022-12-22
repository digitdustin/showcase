import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Modal from "../../shared/Modal";
import Input from "../../ProjectModal/Input";
import IconInput from "../../ProjectModal/IconInput";
import { availableSocials } from "../../../constants/testData";
import { SocialIcon } from "react-social-icons";
import Tooltip from "../../shared/Tooltip";

const projectTypes = ["web", "app", "mobile"];

export type ProjectType = typeof projectTypes[number];

const ModalLabel = ({ label }: { label: string }) => (
  <p className="mb-2 text-sm text-gray-500">{label}</p>
);

const ModalSection = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4">{children}</div>
);

const SocialsModal = ({
  isOpen,
  onClose,
  addSocialLink,
}: {
  isOpen: boolean;
  onClose: () => void;
  addSocialLink: (network: string, url: string) => void;
}) => {
  const [network, setNetwork] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Dialog.Panel className="w-full max-w-xl transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
        >
          Add Social Link
        </Dialog.Title>

        <ModalSection>
          <ModalLabel label="Social Network" />
          <div className="grid w-auto grid-cols-8 gap-1 sm:grid-cols-10">
            {availableSocials.map((social) => {
              return (
                <button
                  key={social.network}
                  onClick={() => {
                    setNetwork(social.network);
                    setPlaceholder(social.placeholder);
                    if (social.network !== network) {
                      setUrl("");
                    }
                  }}
                  className={`group relative aspect-square h-full w-full rounded-full p-1 !outline-none transition ${
                    social.network === network
                      ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400"
                      : "bg-white"
                  }`}
                >
                  <Tooltip position="top">
                    <span>{social.network}</span>
                  </Tooltip>
                  <SocialIcon
                    fgColor="white"
                    network={social.network}
                    className={`!h-full !w-full transition-opacity group-hover:opacity-100`}
                  />
                </button>
              );
            })}
          </div>
        </ModalSection>

        {/* Project Link */}
        <ModalSection>
          <ModalLabel label="Social URL:" />
          <IconInput
            icon={LinkIcon}
            value={url}
            placeholder={placeholder}
            type="text"
            setValue={setUrl}
          />
        </ModalSection>
        <ModalSection>
          <button
            onClick={() => {
              addSocialLink(network, url);
              onClose();
            }}
            className="group min-h-[44px] w-full rounded-md bg-gradient-to-r from-indigo-400 to-fuchsia-400 py-3 text-center transition"
          >
            <p className="text-sm text-white">Add Social</p>
          </button>
        </ModalSection>
      </Dialog.Panel>
    </Modal>
  );
};

export default SocialsModal;
