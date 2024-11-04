"use client";

import { useState } from "react";
import GenreSearchHandler from "./GenreSearchHandler";
import { MovieGrid } from "./CardGrid";
import { Pagination } from "./Pagination";
import FetchTitles from "./FetchHook";

export const MovieApp = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleGenreSelect = (genres: string[]) => {
    setSelectedGenres(genres);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page <= totalPages ? page : totalPages);
  };

  const updateTotalPages = (pages: number) => {
    setTotalPages(pages);
    if (currentPage > pages) {
      setCurrentPage(1);
    }
  };

  return (
    <div>
      <GenreSearchHandler onGenreSelect={handleGenreSelect} />
      <FetchTitles
        currentPage={currentPage}
        selectedGenres={selectedGenres}
        updateTotalPages={updateTotalPages}
      />
      <MovieGrid
        currentPage={currentPage}
        selectedGenres={selectedGenres}
        updateTotalPages={updateTotalPages}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};