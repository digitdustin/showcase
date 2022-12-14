import { DevicePhoneMobileIcon, WindowIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ProjectType } from "./ProjectModal";

const TypeSelector = ({
  projectTypes,
  selectedType,
  setType,
}: {
  projectTypes: string[];
  selectedType: ProjectType;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex space-x-2 w-full">
      {projectTypes.map((type) => (
        <button
          key={type}
          onClick={() => setType(type)}
          className={`${
            selectedType === type ? "bg-slate-100" : "bg-slate-50"
          } w-1/3 rounded-md border transition hover:bg-slate-100 py-4 cursor-pointer items-center flex justify-center`}
        >
          {type === "web" && <WindowIcon className="h-6 w-6 text-slate-800" />}
          {type === "app" && (
            <DevicePhoneMobileIcon className="h-6 w-6 text-slate-800" />
          )}
          {type === "mobile" && (
            <div className=" flex items-center space-x-2">
              <WindowIcon className="h-6 w-6 text-slate-800" />
              <p>+</p>
              <DevicePhoneMobileIcon className="h-6 w-6 text-slate-800" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default TypeSelector;
