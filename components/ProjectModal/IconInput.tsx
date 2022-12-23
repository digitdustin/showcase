import React from "react";

const IconInput = ({
  icon,
  placeholder,
  value,
  setValue,
  type,
  disabled,
}: {
  icon: any;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  disabled?: boolean;
}) => {
  return (
    <div
      className={`relative flex w-full items-center justify-start rounded-md border bg-slate-50 transition hover:bg-slate-100 ${
        disabled ? "cursor-not-allowed bg-slate-100" : ""
      }`}
    >
      {React.createElement(icon, {
        className: "absolute left-4 my-auto h-5 w-5 text-slate-400",
      })}

      <input
        disabled={disabled || false}
        className={`w-full rounded-md bg-transparent py-2 pr-4 pl-12 ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default IconInput;
