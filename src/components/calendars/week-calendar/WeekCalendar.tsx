"use client";
import { useState, useEffect } from "react";
import {
  addDays,
  startOfWeek,
  format,
  startOfToday,
  isBefore,
  startOfDay,
} from "date-fns";
import WeekNavigation from "./WeekNavigation";
import YearDropdown from "./YearDropdown";
import { cn } from "@/lib/utils";

const WeekCalendar = ({
  selectedDate,
  getDate,
}: {
  selectedDate: Date | null;
  getDate: (data: Date) => void;
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(selectedDate);
    }
  }, []);

  const startOfCurrentWeek = startOfWeek(currentDate);
  const today = startOfToday();

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfCurrentWeek, i)
  );

  const handlePreviousWeek = () => {
    setCurrentDate(addDays(currentDate, -7));
  };

  const handleNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setCurrentDate(
      new Date(year, currentDate.getMonth(), currentDate.getDate())
    );
  };
  const handleDateClick = (day: Date) => {
    if (!isBefore(day, today)) {
      //   setSelectedDate(day);
      getDate(day);
    }
  };

  //compare date without time
  const isSameDay = (date1: Date, date2: Date) => {
    return startOfDay(date1).getTime() === startOfDay(date2).getTime();
  };
  return (
    <div className="w-full rounded-md shadow-md">
      <YearDropdown
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
      <WeekNavigation
        onPreviousWeek={handlePreviousWeek}
        onNextWeek={handleNextWeek}
        currentDate={currentDate}
      />

      <div className="my-4 grid grid-cols-7 gap-2 py-2">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-y-2"
          >
            <span className="text-xs text-[#B8B8B8]">
              {format(day, "EEEEEE")}
            </span>
            <button
              // type="button"
              onClick={() => handleDateClick(day)}
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full text-sm text-[#1A1A1A] hover:bg-[#D3D8D4] md:h-10 md:w-10 dark:text-[#DBDBDB] dark:hover:bg-[#D3D8D4]/20",
                {
                  "bg-blue-800 text-white": isSameDay(
                    day,
                    selectedDate || new Date()
                  ),
                },
                {
                  "cursor-not-allowed text-[#DBDBDB] dark:text-[#535050]":
                    isBefore(day, today),
                }
              )}
            >
              {format(day, "d")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
