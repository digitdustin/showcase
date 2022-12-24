import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import {
  ColorCombo,
  colorCombos,
  FontObject,
  fonts,
} from "../../constants/testData";
import { useEditorStylesStore } from "../../stores/useEditorStylesStore";
import Tooltip from "../shared/Tooltip";

const FontPreview = ({ font }: { font: FontObject }) => {
  const { fontFamily, name, fallback, className } = font;
  return (
    <div
      style={{
        fontFamily: fontFamily + "," + fallback,
      }}
      className="w-full rounded-sm px-3 py-1 text-center text-white transition"
    >
      <p className="text-xl">Aa</p>
      <p>{name}</p>
    </div>
  );
};

const FontDropdown = () => {
  //index 1 is the background
  //index 2 is the text
  const { font, setFont } = useEditorStylesStore((state) => state);

  return (
    <div className="z-50 flex h-full w-36 items-center">
      <Listbox value={font} onChange={setFont}>
        {({ open }) => (
          <div className="group relative h-full w-full">
            <Tooltip position={open ? "top" : "bottom"}>Page Font</Tooltip>
            <Listbox.Button className="relative h-full w-full cursor-pointer rounded-md bg-dark-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{font.name}</span>
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
                {fonts.map((font, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 transition ${
                        active ? "bg-indigo-400" : "text-gray-900"
                      }`
                    }
                    value={font}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          <FontPreview font={font} />
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

export default FontDropdown;
