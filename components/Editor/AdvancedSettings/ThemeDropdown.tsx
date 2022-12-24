import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import { EditorStyle } from "../../../stores/useEditorStylesStore";
import { usePageContentStore } from "../../../stores/usePageContentStore";

const ThemePreview = ({ theme }: { theme: EditorStyle }) => {
  const themeIcons = {
    glass: (
      <div
        style={{
          background:
            "radial-gradient(circle at 100% 100%, #333, #333 50%, #eee 75%, #333333 75%)",
        }}
        className="h-4 w-4 rounded-sm border"
      />
    ),
    flat: <div className="h-4 w-4 rounded-sm bg-white" />,
    brutalist: (
      <div
        style={{
          boxShadow: "2px 2px 0 0px #fff",
        }}
        className="h-4 w-4 rounded-sm border-2 border-white bg-dark-600"
      />
    ),
  };
  return (
    <div className="flex w-full items-center justify-start rounded-sm py-1 text-white transition">
      {themeIcons[theme]}
      <p className="ml-3">{theme}</p>
    </div>
  );
};

const ThemeDropdown = () => {
  //index 1 is the background
  //index 2 is the text
  const { pageTheme, setPageTheme } = usePageContentStore((state) => state);

  const themes: EditorStyle[] = ["flat", "brutalist", "glass"];
  return (
    <div className="flex h-full w-36 items-center">
      <Listbox value={pageTheme} onChange={setPageTheme}>
        {({ open }) => (
          <div className="group relative h-full w-full">
            <Listbox.Button className="relative h-full w-full cursor-pointer rounded-md bg-dark-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{pageTheme}</span>
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
              <Listbox.Options className="absolute z-20 mt-1 max-h-96 w-full overflow-auto rounded-md bg-dark-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {themes.map((theme, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 transition ${
                        active ? "bg-indigo-400" : "text-gray-900"
                      }`
                    }
                    value={theme}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          <ThemePreview theme={theme} />
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

export default ThemeDropdown;
