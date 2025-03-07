import { cn } from "@/lib/utils";
import React from "react";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  ariaLabel?: string;
  className?: string;
  labelTextStyles?: string;
  label: string;
}
function TextField(props: InputProps) {
  const {
    name,
    id,
    placeholder,
    type,
    inputMode,
    label,
    className,
    labelTextStyles,
  } = props;
  return (
    <div className="font-general-sans relative">
      <input
        type={type}
        name={name}
        inputMode={inputMode}
        aria-describedby="text-field"
        className={cn(
          "peer block w-full appearance-none rounded-full border bg-white px-4 pt-2 pb-2.5 text-sm font-medium text-[#111315] focus:border-[#EAEAEB] focus:ring-0 focus:outline-none",
          className
        )}
        placeholder={placeholder}
        required
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-4 text-sm text-[#111315]/50 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#111315] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
          labelTextStyles
        )}
      >
        {label}
      </label>
    </div>
  );
}

export default TextField;
