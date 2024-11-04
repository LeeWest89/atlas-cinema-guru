"use client";

import YearButtons from "./Year";

export default function YearSearchHandler() {
  const handleSearch = async (minYear: string, maxYear: string) => {
    console.log("Searching from:", minYear, "to:", maxYear);
    try {
      const response = await fetch(`/api/titles?minYear=${encodeURIComponent(minYear)}&maxYear=${encodeURIComponent(maxYear)}`);
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <YearButtons onSearch={handleSearch} />
  );
}