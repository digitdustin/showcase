import {
  AtSymbolIcon,
  PaintBrushIcon,
  QueueListIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import create from "zustand";

export type SettingsPanel = "theme" | "links" | "style" | "socials";

export const settingsPanels: {
  name: SettingsPanel;
  icon: React.FC;
}[] = [
  {
    name: "theme",
    icon: SwatchIcon,
  },
  {
    name: "links",
    icon: QueueListIcon,
  },
  {
    name: "style",
    icon: PaintBrushIcon,
  },
  {
    name: "socials",
    icon: AtSymbolIcon,
  },
];

interface ControlsStore {
  settingsOpen: boolean;
  setSettingsOpen: (settingsOpen: boolean) => void;
  activeSettingsPanel: SettingsPanel;
  setActiveSettingsPanel: (activeSettingsPanel: SettingsPanel) => void;
}

export const useControlsStore = create<ControlsStore>((set) => ({
  settingsOpen: false,
  setSettingsOpen: (settingsOpen: boolean) => set({ settingsOpen }),
  activeSettingsPanel: "theme",
  setActiveSettingsPanel: (activeSettingsPanel: SettingsPanel) =>
    set({ activeSettingsPanel }),
}));
