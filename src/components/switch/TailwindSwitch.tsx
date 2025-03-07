"use client";
import { useState } from "react";

export default function TailwindSwitch() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        role="switch"
        aria-checked={checked ? "true" : "false"}
        data-state={checked ? "checked" : "unchecked"}
        // value="on"
        aria-labelledby="switch button"
        onClick={() => setChecked(!checked)}
        className="focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0099ff] data-[state=unchecked]:bg-[#bbb]"
        id="airplane-mode"
      >
        <span
          data-state={checked ? "checked" : "unchecked"}
          className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        ></span>
      </button>
      <label
        className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="airplane-mode"
      >
        Mode
      </label>
    </div>
  );
}
