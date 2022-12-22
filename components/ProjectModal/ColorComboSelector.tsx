import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import { ColorCombo, colorCombos } from "../../constants/testData";
import { useEditorStylesStore } from "../../stores/useEditorStylesStore";
import Tooltip from "../shared/Tooltip";

const ComboPreview = ({
  color1,
  color2,
  invert,
}: {
  color1: string;
  color2: string;
  invert?: boolean;
}) => {
  return (
    <div
      style={{
        backgroundColor: invert ? color2 : color1,
        color: invert ? color1 : color2,
      }}
      className="w-full rounded-sm px-3 py-1 text-center transition"
    >
      Text
    </div>
  );
};

const ColorComboSelector = ({
  selectedCombo,
  setSelectedCombo,
  invert,
}: {
  selectedCombo: ColorCombo;
  setSelectedCombo: React.Dispatch<React.SetStateAction<ColorCombo>>;
  invert?: boolean;
}) => {
  //index 1 is the background
  //index 2 is the text
  const { backgroundColor, setBackgroundColor, textColor, setTextColor } =
    useEditorStylesStore((state) => state);

  return (
    <div className="top-16 z-50 h-full w-36">
      <Listbox
        value={selectedCombo}
        onChange={(value) => {
          setSelectedCombo(value);
          if (invert) {
            setTextColor(value.color1.color);
            setBackgroundColor(value.color2.color);
          } else {
            setBackgroundColor(value.color1.color);
            setTextColor(value.color2.color);
          }
        }}
      >
        {({ open }) => (
          <div className="group relative">
            <Tooltip position={open ? "top" : "bottom"}>Page Color</Tooltip>
            <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-dark-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                <ComboPreview
                  color1={invert ? textColor : backgroundColor}
                  color2={invert ? backgroundColor : textColor}
                  invert={invert}
                />
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-96 w-full overflow-auto rounded-md bg-dark-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {colorCombos.map((colorCombo, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 transition ${
                        active ? "bg-indigo-400" : "text-gray-900"
                      }`
                    }
                    value={colorCombo}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          <ComboPreview
                            color1={colorCombo.color1.color}
                            color2={colorCombo.color2.color}
                            invert={invert}
                          />
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default ColorComboSelector;
