"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

type FetchTitlesProps = {
  query?: string;
  currentPage?: number;
  updateTotalPages: (totalCount: number) => void;
  selectedGenres: string[];
  minYear?: string;
  maxYear?: string;
};

export default function FetchTitles({ query = "", currentPage = 1, selectedGenres, updateTotalPages, minYear, maxYear }: FetchTitlesProps) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session || status !== "authenticated") {
      return;
    };

    const fetchTitles = async () => {
      const genreQuery = selectedGenres.length > 0 ? `&genres=${encodeURIComponent(selectedGenres.join(","))}` : "";
      const yearQuery = (minYear || maxYear) ? `&minYear=${minYear}&maxYear=${maxYear}` : "";
      const url = `/api/titles?query=${encodeURIComponent(query)}&page=${currentPage}${genreQuery}${yearQuery}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        updateTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };

    fetchTitles();
  }, [query, currentPage, selectedGenres, minYear, maxYear, updateTotalPages, session, status]);

  return null;
}