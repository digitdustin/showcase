import { PlusIcon } from "@heroicons/react/24/solid";
import { Reorder } from "framer-motion";
import React from "react";
import { useEditorStylesStore } from "../../stores/useEditorStylesStore";
import { usePageContentStore } from "../../stores/usePageContentStore";
import Tooltip from "../shared/Tooltip";
import SocialLink from "./SocialLink";
import { motion as m } from "framer-motion";
import { availableSocials } from "../../constants/testData";
import { SocialIcon } from "react-social-icons";

const SocialsList = ({
  setSocialModalOpen,
}: {
  setSocialModalOpen: (socialModalOpen: boolean) => void;
}) => {
  const {
    extendedSocials,
    monochromaticSocials,
    editorStyle,
    roundedSocials,
    socialsColor,
    headerCentered,
  } = useEditorStylesStore((state) => state);

  const { socials, setSocials } = usePageContentStore((state) => state);

  return (
    <Reorder.Group
      as="ul"
      axis={extendedSocials ? "y" : "x"}
      onReorder={setSocials}
      values={socials}
      className={`mt-4 flex ${
        extendedSocials ? "w-full flex-col space-y-3" : "space-x-3"
      } ${headerCentered ? "justify-center" : "justify-start"}`}
    >
      {socials.map((social) => {
        const color = availableSocials.find(
          (availableSocial) => availableSocial.network === social.network
        )?.color;

        return (
          <SocialLink
            social={social}
            key={social.network}
            network={social.network}
            url={social.url}
          />
        );
      })}

      <m.div layout="position" className="group relative">
        {extendedSocials ? (
          <button
            onClick={() => setSocialModalOpen(true)}
            className="flex w-full items-center justify-center space-x-2 rounded-md border-2 border-white bg-gradient-to-br from-indigo-400 to-fuchsia-400 py-2 px-4 font-sans text-sm text-white shadow-md shadow-indigo-800/20 transition hover:shadow-lg hover:shadow-indigo-800/20"
          >
            <p>Add Social Link</p>
            <PlusIcon className="h-4 w-4 text-white" />
          </button>
        ) : (
          <>
            <Tooltip position="bottom">Add Social Link</Tooltip>
            <PlusIcon
              onClick={() => setSocialModalOpen(true)}
              className={`h-10 w-10 cursor-pointer rounded-full border-2 border-white bg-white bg-gradient-to-br from-indigo-400 to-fuchsia-400 p-1 text-white shadow-md transition hover:shadow-lg`}
            />
          </>
        )}
      </m.div>
    </Reorder.Group>
  );
};

export default SocialsList;
