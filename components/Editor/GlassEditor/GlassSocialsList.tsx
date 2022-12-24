import { PlusIcon } from "@heroicons/react/24/solid";
import { Reorder } from "framer-motion";
import React from "react";
import Tooltip from "../../shared/Tooltip";
import SocialLink from ".././SocialLink";
import { motion as m } from "framer-motion";
import { availableSocials } from "../../../constants/testData";
import { usePageContentStore } from "../../../stores/usePageContentStore";
import GlassSocialLink from "./GlassSocialLink";

const GlassSocialsList = ({
  setSocialModalOpen,
}: {
  setSocialModalOpen: (socialModalOpen: boolean) => void;
}) => {
  const { socials, setSocials } = usePageContentStore((state) => state);

  return (
    <Reorder.Group
      as="ul"
      axis={"x"}
      onReorder={setSocials}
      values={socials}
      className={`mt-4 flex justify-center space-x-3`}
    >
      {socials.map((social) => {
        const color = availableSocials.find(
          (availableSocial) => availableSocial.network === social.network
        )?.color;

        return (
          <GlassSocialLink
            social={social}
            key={social.network}
            network={social.network}
            url={social.url}
          />
        );
      })}

      <m.div layout="position" className="group relative">
        <Tooltip position="bottom">Add Social Link</Tooltip>
        <PlusIcon
          onClick={() => setSocialModalOpen(true)}
          className={`h-10 w-10 cursor-pointer rounded-full border-2 border-white bg-white bg-gradient-to-br from-indigo-400 to-fuchsia-400 p-1 text-white shadow-md transition hover:shadow-lg`}
        />
      </m.div>
    </Reorder.Group>
  );
};

export default GlassSocialsList;
