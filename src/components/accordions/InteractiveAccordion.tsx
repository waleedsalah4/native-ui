import { useState } from "react";
import { AccordionTriggerIcon } from "../shared/Icons";
import { cn } from "@/lib/utils";

const data = [
  {
    id: "1",
    title: "Do you prefer Android or iOS",
    description: "I like to use iOS products",
  },
  {
    id: "2",
    title: "Do you prefer writing CSS or Tailwind?",
    description: "I like to use Tailwind",
  },
  {
    id: "3",
    title: "Firebase or Supabase?",
    description: "I am using Supabase!",
  },
];

function InteractiveAccordion() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ul className="space-y-4">
      {data.map((item) => (
        <li key={item.id}>
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
