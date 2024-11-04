"use client";

import SearchBar from "./SearchBar";

interface SearchHandlerProps {
  onSearch: (query: string) => void;
}

export default function SearchHandler({ onSearch }: SearchHandlerProps) {
  const handleSearch = async (query: string) => {
    onSearch(query);
  };

  return (
    <SearchBar onSearch={handleSearch} />
  );
}