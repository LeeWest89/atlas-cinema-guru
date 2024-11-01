"use client";

import YearButtons from "./Year";

export default function YearSearchHandler() {
  const handleSearch = async (minYear: string, maxYear: string) => {
    console.log("Searching from:", minYear, "to:", maxYear);
    try {
      const response = await fetch(`/api/titles?minYear=${encodeURIComponent(minYear)}&maxYear=${encodeURIComponent(maxYear)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <YearButtons onSearch={handleSearch} />
    </div>
  );
}