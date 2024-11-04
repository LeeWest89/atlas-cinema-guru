"use client";

import { useEffect, useState } from "react";

interface GenreButtonsProps {
  onGenreSelect: (selectedGenres: string[]) => void;
}

export default function GenreButtons({ onGenreSelect }: GenreButtonsProps) {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await fetch("/api/genres");
        if (!response.ok) {
          throw new Error("Failed to fetch genres");
        }
        const data = await response.json();
        setGenres(data.genres.sort());
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }
    fetchGenres();
  }, []);

  const handleGenreClick = (genre: string) => {
    const newSelectedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];

    setSelectedGenres(newSelectedGenres);
    onGenreSelect(newSelectedGenres);
  };

  const chunkArray = (array: string[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const genreChunks = chunkArray(genres, 5);

  return (
    <div className="mr-28 mt-10">
      <h1 className="mb-2">Genres</h1>
      {genreChunks.map((chunk, index) => (
        <div key={index} className="flex gap-2 mb-2">
          {chunk.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreClick(genre)}
              className={`px-3 py-1 rounded-full border-2 border-[#1ED2AF] ${
                selectedGenres.includes(genre)
                  ? "bg-[#1ED2AF] text-white"
                  : "bg-transparent text-white"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}