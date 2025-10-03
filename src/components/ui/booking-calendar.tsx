import React from "react";
import { Button } from "@/components/ui/button";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
  day,
  isHeader,
}) => {
  const randomBgWhite =
    !isHeader && Math.random() < 0.3
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded-xl"
      } ${randomBgWhite}`}
    >
      <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
        {day}
      </span>
    </div>
  );
};

export function BookingCalendar() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const bookingLink = `https://cal.com/aliimam/designali`;

  const renderCalendarDays = () => {
    let days: React.ReactNode[] = [
      ...dayNames.map((day, i) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-8 w-8"
        />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#1B1B1B]/80 p-6 hover:bg-primary/10 overflow-hidden h-auto">
      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-6 z-[999] flex h-12 w-12 rotate-6 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100"
      >
        <svg
          className="h-6 w-6 text-primary"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.25 15.25V6.75H8.75"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 7L6.75 17.25"
          ></path>
        </svg>
      </a>
      <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      
      <div className="grid h-full gap-5">
        <div>
          <h2 className="mb-4 text-lg md:text-3xl font-semibold text-white">
            Ready to discuss your project?
          </h2>
          <p className="mb-2 text-xs md:text-md text-gray-400">
            Schedule a 30-minute consultation call with our team!
          </p>
          <a href={bookingLink} target="_blank" rel="noopener noreferrer">
            <Button className="mt-3 rounded-2xl button-gradient">Book Now</Button>
          </a>
        </div>
        <div className="transition-all duration-500 ease-out">
          <div>
            <div className="h-full w-full max-w-[550px] rounded-[24px] border border-white/10 p-2 transition-colors duration-100 group-hover:border-primary/40">
              <div
                className="h-full rounded-2xl border-2 border-white/5 p-3"
                style={{ boxShadow: "0px 2px 1.5px 0px rgba(165, 174, 184, 0.32) inset" }}
              >
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-white">
                    <span className="font-medium">
                      {currentMonth}, {currentYear}
                    </span>
                  </p>
                  <span className="h-1 w-1 rounded-full bg-gray-600">&nbsp;</span>
                  <p className="text-xs text-gray-400">30 min call</p>
                </div>
                <div className="mt-4 grid grid-cols-7 grid-rows-5 gap-2 px-4">
                  {renderCalendarDays()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
