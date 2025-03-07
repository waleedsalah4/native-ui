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
  required?: boolean;
  errorMessage?: string;
}

const TextField = (props: InputProps) => {
  const {
    name,
    id,
    placeholder,
    type,
    inputMode,
    label,
    errorMessage,
    value,
    required,
    handleChange,
  } = props;
  return (
    <div>
      <div className="font-general-sans relative">
        <input
          type={type}
          id={id}
          name={name}
          inputMode={inputMode}
          value={value}
          onChange={handleChange}
          aria-describedby="outlined_success_help"
          className="text-black-900 focus:border-black-50 peer block w-full appearance-none rounded-full border bg-white px-4 pb-2.5 pt-2 text-sm font-medium focus:outline-none focus:ring-0"
          placeholder={placeholder}
          required={required}
        />
        <label
          htmlFor={id}
          className="text-black-900/50 peer-focus:text-black-900 absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded-full bg-white px-4 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          {label}
        </label>
      </div>
      <p
        id="outlined_success_help"
        className="mt-2 text-xs italic text-red-500"
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default TextField;
