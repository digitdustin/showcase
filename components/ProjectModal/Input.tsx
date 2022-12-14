import React from "react";

const Input = ({
  placeholder,
  value,
  setValue,
  type,
}: {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border bg-slate-50 transition hover:bg-slate-100 py-2 px-4 items-center flex justify-center"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
