import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { TwitterPicker } from "react-color";

const ColorPicker = ({
  color,
  setColor,
  open,
  setOpen,
  position,
}: {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: "left" | "right";
}) => {
  return (
    <Popover
      style={{ backgroundColor: color }}
      className="relative !aspect-square h-10 w-10 rounded-md transition"
    >
      <Popover.Button
        onClick={() => setOpen(!open)}
        className="h-10 w-10"
      ></Popover.Button>
      <Transition
        show={open}
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
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ColorPicker;
