import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion as m, Reorder } from "framer-motion";
import { Social } from "../../../constants/editor/types";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useGlassStyleStore } from "../../../stores/useGlassStyleStore";

const GlassSocialLink = ({
  social,
  network,
  url,
}: {
  social: Social;
  network: string;
  url: string;
}) => {
  const { roundedSocials } = useGlassStyleStore((state) => state);

  return (
    <Reorder.Item key={network} value={social}>
      <m.div layout="position" className="group relative">
        <m.div
          style={{
            background:
              "linear-gradient( 120deg,rgba( 255, 255, 255, 0.23 ) 10%, rgba( 255, 255, 255, 0.05 ) 100% )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 13.5px )",
            WebkitBackdropFilter: "blur( 13.5px )",
            borderRadius: roundedSocials ? "999px" : "6px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
          className={`relative z-20 flex w-auto cursor-pointer select-none items-center justify-center transition ${
            roundedSocials ? "rounded-full" : "rounded-md"
          }`}
        >
          <div className={`glass-social relative flex items-center`}>
            <div className="absolute inset-0 z-20 bg-transparent"></div>
            <SocialIcon
              network={network}
              url={url}
              bgColor="rgba(0,0,0,0)"
              fgColor="#ffffff"
              className="!h-10 !w-10"
              href={undefined}
            />
          </div>
        </m.div>
      </m.div>
    </Reorder.Item>
  );
};

export default GlassSocialLink;
