import React from "react";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  name: string;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputMode:
    | "email"
    | "search"
    | "tel"
    | "text"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  label: string;
}
function TextField(props: InputProps) {
  const { name, id, placeholder, type, inputMode, label, value, handleChange } =
    props;
  return (
    <div className="font-general-sans relative">
      <input
        type={type}
        id={id}
        name={name}
        inputMode={inputMode}
        value={value}
        onChange={handleChange}
        aria-describedby="outlined_text-field"
        className="peer block w-full appearance-none rounded-full border bg-white px-4 pb-2.5 pt-2 text-sm font-medium text-[#111315] focus:border-[#EAEAEB] focus:outline-none focus:ring-0"
        placeholder={placeholder}
        required
      />
      <label
        htmlFor={id}
        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-4 text-sm text-[#111315]/50 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#111315] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
    </div>
  );
}

export default TextField;
