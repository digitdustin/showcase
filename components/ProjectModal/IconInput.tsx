import React from "react";

const IconInput = ({
  icon,
  placeholder,
  value,
  setValue,
  type,
}: {
  icon: any;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
}) => {
  return (
    <div className="w-full relative rounded-md border bg-slate-50 transition hover:bg-slate-100 flex justify-start items-center">
      {React.createElement(icon, {
        className: "absolute left-4 my-auto h-5 w-5 text-slate-400",
      })}

      <input
        className="py-2 w-full bg-transparent pr-4 pl-12 rounded-md"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default IconInput;
