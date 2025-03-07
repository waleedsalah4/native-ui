"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IData {
  id: string;
  title: string;
  description: string;
}

const AccordionTriggerIcon = ({
  accordionOpen,
}: {
  accordionOpen: boolean;
}) => {
  return (
    <svg
      className="ml-8 shrink-0 fill-indigo-500"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center transform transition duration-200 ease-out ${
          accordionOpen && "!rotate-180"
        }`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center rotate-90 transform transition duration-200 ease-out ${
          accordionOpen && "!rotate-180"
        }`}
      />
    </svg>
  );
};

function InteractiveAccordion({ data }: { data: IData[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ul className="space-y-4">
      {data.map((item) => (
        <li key={item.id} className="list-none">
          <button
            className="flex w-full items-center justify-between"
            title="expand/collapse the accordion description"
            onClick={() => {
              if (selected === item.id) {
                setSelected(null);
              } else {
                setSelected(item.id);
              }
            }}
            aria-expanded={selected === item.id}
          >
            <p>{item.title}</p>
            <AccordionTriggerIcon accordionOpen={selected === item.id} />
          </button>
          <div
            aria-hidden={selected !== item.id}
            className={cn(
              "grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out",
              {
                "grid-rows-[1fr]": selected === item.id,
              }
            )}
          >
            <div className="overflow-hidden px-4 text-green-500">
              {item.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default InteractiveAccordion;
