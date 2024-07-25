import React from "react";

interface YearDropdownProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

const YearDropdown: React.FC<YearDropdownProps> = ({
  selectedYear,
  onYearChange,
}) => {
  const years = Array.from(
    { length: 20 },
    (_, i) => new Date().getFullYear() - 10 + i
  );

  return (
    <div className="mb-4 flex items-center justify-center rounded-t-md bg-[#D3D8D433]">
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
        className="text-#484848 bg-transparent p-3"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearDropdown;
