"use client";

import { useState } from "react";
import GenreButtons from "./GenreButtons";

export default function GenreSearchHandler() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreSelect = async (genres: string[]) => {
    setSelectedGenres(genres);
    try {
      const genreQuery = genres.join(",");
      const response = await fetch(`/api/titles?genres=${encodeURIComponent(genreQuery)}`);
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <GenreButtons onGenreSelect={handleGenreSelect} />
  );
}