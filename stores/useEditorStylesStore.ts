import create from "zustand";

export type EditorStyle = "default" | "serif" | "mono" | "grotesque";

interface EditorStyleStore {
  editorStyle: EditorStyle;
  setEditorStyle: (editorStyle: EditorStyle) => void;
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  extendedSocials: boolean;
  setExtendedSocials: (extendedSocials: boolean) => void;
  headerCentered: boolean;
  setHeaderCentered: (headerCentered: boolean) => void;
  monochromaticSocials: boolean;
  setMonochromaticSocials: (monochromaticSocials: boolean) => void;
  socialsColor: string;
  setSocialsColor: (socialsColor: string) => void;
}

export const useEditorStylesStore = create<EditorStyleStore>((set) => ({
  editorStyle: "default",
  setEditorStyle: (editorStyle: EditorStyle) => set({ editorStyle }),
  backgroundColor: "#ffffff",
  setBackgroundColor: (backgroundColor: string) => set({ backgroundColor }),
  textColor: "#000000",
  setTextColor: (textColor: string) => set({ textColor }),
  extendedSocials: false,
  setExtendedSocials: (extendedSocials: boolean) => set({ extendedSocials }),
  headerCentered: false,
  setHeaderCentered: (headerCentered: boolean) => set({ headerCentered }),
  monochromaticSocials: false,
  setMonochromaticSocials: (monochromaticSocials: boolean) =>
    set({ monochromaticSocials }),
  socialsColor: "#000000",
  setSocialsColor: (socialsColor: string) => set({ socialsColor }),
}));
