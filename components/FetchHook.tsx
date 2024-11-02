"use client";

import { useEffect } from "react";

type FetchTitlesProps = {
  query?: string;
};

export default function FetchTitles({ query = "" }: FetchTitlesProps) {
  useEffect(() => {
    const fetchTitles = async () => {
      const url = `/api/titles?query=${encodeURIComponent(query)}`;
      console.log("Fetching from:", url);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };

    fetchTitles();
  }, [query]);

  return null;
}
