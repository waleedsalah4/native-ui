import { createContext, useContext, useRef, useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
}

interface InteractiveAccordion2Props {
  children: ReactNode;
  value: string | null;
  className?: string;
  // onChange?: (value: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export default function InteractiveAccordion2({
  children,
  value,
  className,
  // onChange,
}: InteractiveAccordion2Props) {
  const [selected, setSelected] = useState<string | null>(value);

  // useEffect(() => {
  //   onChange?.(selected);
  // }, [selected]); add this if you will have a parent component and you need to something with the selected value

  return (
    <ul className={cn(className)}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({
  children,
  value,
  trigger,
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "AccordionItem must be used within an AccordionContext.Provider"
    );
  }
  const { selected, setSelected } = context;
  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className="border-b border-white/20">
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex items-center justify-between py-4 font-medium"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-4 pt-2" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
