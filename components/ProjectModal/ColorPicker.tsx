import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { TwitterPicker } from "react-color";

const ColorPicker = ({
  color,
  setColor,
  position,
  hideSwatch,
  colors,
  size = "40px",
}: {
  color: string;
  setColor:
    | React.Dispatch<React.SetStateAction<string>>
    | ((backgroundColor: string) => void);
  position: "left" | "right";
  hideSwatch?: boolean;
  colors?: string[];
  size?: string;
}) => {
  return (
    <Popover
      style={{ backgroundColor: color, height: size, width: size }}
      className={`!aspect-square rounded-md transition ${
        hideSwatch
          ? "absolute inset-0 h-full w-full !bg-transparent"
          : "relative h-10 w-10"
      }`}
    >
      <Popover.Button className="h-full w-full"></Popover.Button>
      <Transition
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          className={`absolute z-20 ${
            position === "right" ? "right-0" : "left-0"
          }`}
        >
          <TwitterPicker
            triangle={position === "left" ? "top-left" : "top-right"}
            onChange={(color: any) => setColor(color.hex)}
            colors={colors && colors.length > 0 ? colors : undefined}
            color={color}
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ColorPicker;
