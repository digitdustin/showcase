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
}

export const useGlassStyleStore = create<GlassStyleStore>((set) => ({
  backgroundColors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
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
}));
