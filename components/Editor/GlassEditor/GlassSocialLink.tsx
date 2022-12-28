import React, { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { motion as m, Reorder } from "framer-motion";
import { Social } from "../../../constants/editor/types";
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

  const linkRef = useRef<HTMLButtonElement>(null);

  const mouseMoveEvent = (e: MouseEvent) => {
    if (!linkRef.current) return;
    const { x, y } = linkRef.current.getBoundingClientRect();
    // @ts-ignore
    linkRef.current.style.setProperty("--x", e.clientX - x);
    // @ts-ignore
    linkRef.current.style.setProperty("--y", e.clientY - y);
  };

  useEffect(() => {
    if (linkRef && linkRef.current) {
      linkRef.current.addEventListener("mousemove", mouseMoveEvent);
    }
    // don't forget to *remove* the eventListener
    // when your component unmounts!
    return () =>
      linkRef.current?.removeEventListener("mousemove", mouseMoveEvent);
  }, [linkRef]);

  return (
    <Reorder.Item key={network} value={social}>
      <m.button
        ref={linkRef}
        style={{
          background:
            "linear-gradient( 120deg,rgba( 255, 255, 255, 0.23 ) 10%, rgba( 255, 255, 255, 0.05 ) 100% )",
          boxShadow: "0 8px 32px 0 rgba( 30, 30, 30, 0.3 )",
          backdropFilter: "blur( 13.5px )",
          WebkitBackdropFilter: "blur( 13.5px )",
          borderRadius: roundedSocials ? "999px" : "6px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        className={`shiny relative z-20 flex w-auto cursor-pointer select-none items-center justify-center transition ${
          roundedSocials ? "rounded-full" : "rounded-md"
        }`}
      >
        <div className={`glass-social relative flex items-center`}>
          <div className="absolute inset-0 z-20 bg-transparent"></div>
          <SocialIcon
            network={network}
            url={url}
            bgColor="rgba(255,255,255,0)"
            fgColor="rgba(255,255,255,0.8)"
            className="!h-10 !w-10"
            href={undefined}
          />
        </div>
      </m.button>
    </Reorder.Item>
  );
};

export default GlassSocialLink;
