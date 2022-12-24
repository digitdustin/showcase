import create from "zustand";
import { FontObject, fonts } from "../constants/testData";

export type EditorStyle = "flat" | "brutalist" | "glass";

interface EditorStyleStore {
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  font: FontObject;
  setFont: (font: FontObject) => void;
  extendedSocials: boolean;
  setExtendedSocials: (extendedSocials: boolean) => void;
  headerCentered: boolean;
  setHeaderCentered: (headerCentered: boolean) => void;
  monochromaticSocials: boolean;
  setMonochromaticSocials: (monochromaticSocials: boolean) => void;
  socialsColor: string;
  setSocialsColor: (socialsColor: string) => void;
  roundedSocials: boolean;
  setRoundedSocials: (roundedSocials: boolean) => void;
  avatarShape: "circle" | "square";
  setAvatarShape: (avatarShape: "circle" | "square") => void;
}

export const useEditorStylesStore = create<EditorStyleStore>((set) => ({
  backgroundColor: "#ffffff",
  setBackgroundColor: (backgroundColor: string) => set({ backgroundColor }),
  textColor: "#2d2d2d",
  setTextColor: (textColor: string) => set({ textColor }),
  font: fonts[0],
  setFont: (font: FontObject) => set({ font }),
  extendedSocials: false,
  setExtendedSocials: (extendedSocials: boolean) => set({ extendedSocials }),
  headerCentered: false,
  setHeaderCentered: (headerCentered: boolean) => set({ headerCentered }),
  monochromaticSocials: false,
  setMonochromaticSocials: (monochromaticSocials: boolean) =>
    set({ monochromaticSocials }),
  socialsColor: "#2d2d2d",
  setSocialsColor: (socialsColor: string) => set({ socialsColor }),
  roundedSocials: true,
  setRoundedSocials: (roundedSocials: boolean) => set({ roundedSocials }),
  avatarShape: "circle",
  setAvatarShape: (avatarShape: "circle" | "square") => set({ avatarShape }),
}));
