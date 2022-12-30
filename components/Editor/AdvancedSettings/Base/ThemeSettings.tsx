import { subSettingsAnim } from "constants/variants";
import React, { useEffect } from "react";
import { usePageContentStore } from "stores/usePageContentStore";
import { PanelHeader, PanelSection } from "../SettingsPanel";
import { motion as m } from "framer-motion";
import { useGlassStyleStore } from "stores/useGlassStyleStore";
import meshBG from "assets/previews/meshBG.gif";
import iconsBG from "assets/previews/iconsBG.gif";
import patternBG from "assets/previews/patternBG.png";
import { useEditorStylesStore } from "stores/useEditorStylesStore";

const ThemeSettings = () => {
  const { pageTheme, setPageTheme } = usePageContentStore();
  const { bannerType, setBannerType } = useEditorStylesStore();
  const { backgroundColors } = useGlassStyleStore();

  return (
    <m.div variants={subSettingsAnim} className="mt-2 flex flex-col">
      <PanelHeader title="Themes" />

      <div className="flex flex-col space-y-4">
        <div
          onClick={() => {
            setPageTheme("flat");
            setBannerType("image");
          }}
          className="group relative flex aspect-video w-full cursor-pointer items-end justify-center overflow-hidden rounded-lg border-2 border-dark-700 bg-dark-900 transition-colors hover:border-indigo-500 hover:bg-indigo-800/20"
        >
          <div className="center-horizontal absolute top-2 text-sm font-semibold uppercase text-dark-100 transition group-hover:text-white">
            Flat
          </div>
          <div className="flex h-3/4 w-3/4 translate-y-3 flex-col items-center justify-start rounded-t-md bg-white transition group-hover:-translate-y-0">
            <div className="relative h-14 w-full rounded-t-md bg-dark-100/20">
              <div className="center-horizontal absolute -bottom-5 h-10 w-10 rounded-full border bg-white shadow-sm"></div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setPageTheme("flat");
          }}
          className="group relative flex aspect-video w-full cursor-pointer items-end justify-center overflow-hidden rounded-lg border-2 border-dark-700 bg-dark-900 transition-colors hover:border-indigo-500 hover:bg-indigo-800/20"
        >
          <div className="center-horizontal absolute top-2 text-sm font-semibold uppercase text-dark-100 transition group-hover:text-white">
            Pattern
          </div>
          <div className="flex h-3/4 w-3/4 translate-y-3 flex-col items-center justify-start rounded-t-md bg-white transition group-hover:-translate-y-0">
            <div className="relative h-14 w-full rounded-t-md bg-dark-100/20">
              <img
                style={{ filter: "hue-rotate(50deg)" }}
                src={patternBG.src}
                className="absolute inset-0 h-full w-full rounded-t-md object-cover object-top"
              />
              <div className="center-horizontal absolute -bottom-5 h-10 w-10 rounded-full border border-slate-400/30 bg-white shadow-sm"></div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setPageTheme("flat");
            setBannerType("icons");
          }}
          className="group relative flex aspect-video w-full cursor-pointer items-end justify-center overflow-hidden rounded-lg border-2 border-dark-700 bg-dark-900 transition-colors hover:border-indigo-500 hover:bg-indigo-800/20"
        >
          <div className="center-horizontal absolute top-2 text-sm font-semibold uppercase text-dark-100 transition group-hover:text-white">
            Icons
          </div>
          <div className="flex h-3/4 w-3/4 translate-y-3 flex-col items-center justify-start rounded-t-md bg-white transition group-hover:-translate-y-0">
            <div className="relative h-14 w-full rounded-t-md bg-dark-100/20">
              <img
                src={iconsBG.src}
                className="absolute inset-0 h-full w-full rounded-t-md object-cover object-top"
              />
              <div className="center-horizontal absolute -bottom-5 h-10 w-10 rounded-full border border-indigo-800/30 bg-white shadow-sm"></div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setPageTheme("glass");
          }}
          className="group relative flex aspect-video w-full cursor-pointer items-end justify-center overflow-hidden rounded-lg border-2 border-dark-700 bg-dark-900 transition-colors hover:border-indigo-500 hover:bg-indigo-800/20"
        >
          <div className="center-horizontal absolute top-2 text-sm font-semibold uppercase text-dark-100 transition group-hover:text-white">
            Glass
          </div>
          <div className="flex h-3/4 w-3/4 translate-y-3 flex-col items-center justify-start rounded-t-md bg-white transition group-hover:-translate-y-0">
            <img
              src={meshBG.src}
              className="absolute inset-0 h-full w-full rounded-t-md object-cover"
            />
            <div className="relative h-14 w-full rounded-t-md bg-transparent">
              <div className="center-horizontal absolute -bottom-5 z-20 h-10 w-10 rounded-full border bg-white shadow-sm"></div>
            </div>
            <div className="z-10 w-full flex-1 bg-white/20 backdrop-blur-md"></div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default ThemeSettings;
