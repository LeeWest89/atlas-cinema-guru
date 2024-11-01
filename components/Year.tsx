"use client";
import { useState, ChangeEvent } from "react";

interface YearProps {
  onSearch: (minYear: string, maxYear: string) => void;
}

export default function YearButtons({ onSearch }: YearProps) {
  const [minYear, setMinYear] = useState<string>("");
  const [maxYear, setMaxYear] = useState<string>("");

  const handleMinYear = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinYear = event.target.value;
    setMinYear(newMinYear);
    onSearch(newMinYear, maxYear);
  };

  const handleMaxYear = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxYear = event.target.value;
    setMaxYear(newMaxYear);
    onSearch(minYear, newMaxYear);
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
          className="w-32 p-2 rounded-full border-2 border-[#1ED2AF] text-white placeholder-custom bg-transparent"
        />
      </div>
      <div>
        <h1 className="mb-2">Max Year</h1>
        <input
          type="text"
          placeholder="End Date"
          value={maxYear}
          onChange={handleMaxYear}
          className="w-32 p-2 rounded-full border-2 border-[#1ED2AF] text-white placeholder-custom bg-transparent"
        />
      </div>
    </div>
  );
}