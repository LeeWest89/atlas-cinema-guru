"use client";
import { useState, ChangeEvent } from "react";

interface YearProps {
  onSearch: (minYear: string, maxYear: string) => void;
}

export default function YearButtons({ onSearch }: YearProps) {
  const [minYear, setMinYear] = useState<string>("");
  const [maxYear, setMaxYear] = useState<string>("");
  const currentYear = new Date().getFullYear().toString();
  const defaultMinYear = "1800";

  const handleMinYear = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinYear = event.target.value;
    setMinYear(newMinYear);
    onSearch(newMinYear || defaultMinYear, maxYear || currentYear);
  };

  const handleMaxYear = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxYear = event.target.value;
    setMaxYear(newMaxYear);
    onSearch(minYear || defaultMinYear, newMaxYear || currentYear);
  };

  return (
    <div className="flex ml-10 mt-2 gap-6">
      <div>
        <h1 className="mb-2">Min Year</h1>
        <input
          type="text"
          placeholder="Start Date"
          value={minYear}
          onChange={handleMinYear}
          className="text-center w-32 p-2 rounded-full border-2 border-Teal text-white bg-transparent"
        />
      </div>
      <div>
        <h1 className="mb-2">Max Year</h1>
        <input
          type="text"
          placeholder="End Date"
          value={maxYear}
          onChange={handleMaxYear}
          className="text-center w-32 p-2 rounded-full border-2 border-Teal text-white bg-transparent"
        />
      </div>
    </div>
  );
}