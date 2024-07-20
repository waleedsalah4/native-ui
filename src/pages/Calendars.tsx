import { useState } from "react";
import { format } from "date-fns";
import WeekCalendar from "@/components/week-calendar/WeekCalendar";

function Calendars() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section className="container my-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">#Week Calendar</h1>
        <WeekCalendar
          selectedDate={selectedDate}
          getDate={(date) => setSelectedDate(date)}
        />
        <p className="text-[#B8B8B8]">
          Selected Date:{" "}
          <span className="font-semibold text-[#233d28]">
            {format(selectedDate, "EEEEEE, dd MMM yyyy")}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Calendars;
