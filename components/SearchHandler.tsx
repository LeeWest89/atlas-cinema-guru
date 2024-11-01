"use client";

import SearchBar from "./SearchBar";

export default function SearchHandler() {
  const handleSearch = async (query: string) => {
    console.log("Searching for:", query);
    try {
      const response = await fetch(`/api/titles?query=${encodeURIComponent(query)}`);
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
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}