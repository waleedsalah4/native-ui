"use client";
import { useState } from "react";
import { format } from "date-fns";
import WeekCalendar from "./WeekCalendar";

function WeekCalendarUsage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="flex flex-col gap-4">
      <WeekCalendar
        selectedDate={selectedDate}
        getDate={(date) => setSelectedDate(date)}
      />
      <p className="text-[#B8B8B8]">
        Selected Date:{" "}
        <span className="font-semibold text-[#233d28] dark:text-blue-700">
          {format(selectedDate, "EEEEEE, dd MMM yyyy")}
        </span>
      </p>
    </div>
  );
}

export default WeekCalendarUsage;
