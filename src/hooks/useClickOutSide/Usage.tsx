"use client";
import React, { useRef, useState } from "react";
import useClickOutSide from "./useClickOutSide";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if a click happens outside of it
  useClickOutSide({
    ref: dropdownRef,
    onClickOutside: () => setIsOpen(false),
  });

  return (
    <div className="relative bg-gray-300 p-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md bg-[#2563eb] p-2 text-black"
      >
        Open Dropdown
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-2/3 left-10 z-10 p-1 shadow-md"
        >
          <span className="bg-black p-2 text-center text-white">
            Click outside me
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
