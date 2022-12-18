import create from "zustand";

type EditorStyle = "default" | "serif" | "mono" | "grotesque";
type FontSize = "small" | "base" | "large";

interface EditorStyleStore {
  editorStyle: EditorStyle;
  setEditorStyle: (editorStyle: EditorStyle) => void;
}

export const useEditorStylesStore = create<EditorStyleStore>((set) => ({
  editorStyle: "default",
  setEditorStyle: (editorStyle: EditorStyle) => set({ editorStyle }),
}));
