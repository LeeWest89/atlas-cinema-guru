"use client";
import { useState, ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(query);
    }
  };

  return (
    <div className="ml-10 mt-10">
      <h1 className="mb-2">Search</h1>
      <form>
        <input
          type="text"
          placeholder="Search Movies..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-72 p-2 rounded-full border-2 border-[#1ED2AF] text-white placeholder-custom bg-transparent"
        />
      </form>
    </div>
  );
}