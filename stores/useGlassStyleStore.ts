import create from "zustand";
import { FontObject, fonts } from "../constants/testData";

interface GlassStyleStore {
  backgroundColors: string[];
  setBackgroundColors: (backgroundColors: string[]) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  font: FontObject;
  setFont: (font: FontObject) => void;
  roundedSocials: boolean;
  setRoundedSocials: (roundedSocials: boolean) => void;
  avatarShape: "circle" | "square";
  setAvatarShape: (avatarShape: "circle" | "square") => void;
  showOverlay: boolean;
  setShowOverlay: (showOverlay: boolean) => void;
  overlayColor: string;
  setOverlayColor: (overlayColor: string) => void;
  overlayOpacity: number;
  setOverlayOpacity: (overlayOpacity: number) => void;
  fadeOverlay: boolean;
  setFadeOverlay: (fadeOverlay: boolean) => void;
  overlayBlur: number;
  setOverlayBlur: (overlayBlur: number) => void;
}

export const useGlassStyleStore = create<GlassStyleStore>((set) => ({
  backgroundColors: ["#043D5D", "#032E46", "#23B684", "#0F595E"],
  setBackgroundColors: (backgroundColors: string[]) =>
    set({ backgroundColors }),
  textColor: "white",
  setTextColor: (textColor: string) => set({ textColor }),
  font: fonts[0],
  setFont: (font: FontObject) => set({ font }),
  roundedSocials: true,
  setRoundedSocials: (roundedSocials: boolean) => set({ roundedSocials }),
  avatarShape: "circle",
  setAvatarShape: (avatarShape: "circle" | "square") => set({ avatarShape }),
  showOverlay: true,
  setShowOverlay: (showOverlay: boolean) => set({ showOverlay }),
  overlayColor: "#eee", // "#032E46",
  setOverlayColor: (overlayColor: string) => set({ overlayColor }),
  overlayOpacity: 0.4,
  setOverlayOpacity: (overlayOpacity: number) => set({ overlayOpacity }),
  fadeOverlay: false,
  setFadeOverlay: (fadeOverlay: boolean) => set({ fadeOverlay }),
  overlayBlur: 20,
  setOverlayBlur: (overlayBlur: number) => set({ overlayBlur }),
}));
