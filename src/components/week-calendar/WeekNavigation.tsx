import React from "react";
import { format } from "date-fns";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

interface WeekNavigationProps {
  onPreviousWeek: () => void;
  onNextWeek: () => void;
  currentDate: Date;
}

const WeekNavigation: React.FC<WeekNavigationProps> = ({
  onPreviousWeek,
  onNextWeek,
  currentDate,
}) => {
  return (
    <div className="mb-4 flex items-center justify-between px-4">
      <button
        name="previous-month"
        aria-label="Go to previous month"
        type="button"
        onClick={onPreviousWeek}
      >
        <CircleArrowLeft className="w-5 text-[#B8B8B8] md:w-6" />
      </button>
      <span className="text-sm text-[#1A1A1A]">
        {format(currentDate, "MMMM yyyy")}
      </span>
      <button
        name="next-month"
        aria-label="Go to next month"
        type="button"
        onClick={onNextWeek}
      >
        <CircleArrowRight className="w-5 text-[#B8B8B8] md:w-6" />
      </button>
    </div>
  );
};

export default WeekNavigation;
