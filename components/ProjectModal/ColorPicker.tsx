import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { TwitterPicker } from "react-color";

const ColorPicker = ({
  color,
  setColor,
  open,
  setOpen,
}: {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Popover
      style={{ backgroundColor: color }}
      className="relative h-10 w-10 !aspect-square rounded-md transition"
    >
      <Popover.Button
        onClick={() => setOpen(!open)}
        className="w-10 h-10"
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
        <Popover.Panel className="absolute z-20 right-0">
          <TwitterPicker
            triangle="top-right"
            onChange={(color: any) => setColor(color.hex)}
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ColorPicker;
