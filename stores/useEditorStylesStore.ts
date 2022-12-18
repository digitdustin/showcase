import create from "zustand";

type EditorStyle = "default" | "serif" | "mono";

interface EditorStyleStore {
  editorStyle: EditorStyle;
  setEditorStyle: (editorStyle: EditorStyle) => void;
}

export const useEditorStylesStore = create<EditorStyleStore>((set) => ({
  editorStyle: "default",
  setEditorStyle: (editorStyle: EditorStyle) => set({ editorStyle }),
}));
