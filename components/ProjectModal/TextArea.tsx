import React from "react";

const TextArea = ({
  placeholder,
  value,
  setValue,
}: {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full rounded-md border bg-slate-50 transition hover:bg-slate-100 py-2 px-4 items-center flex justify-center"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextArea;
