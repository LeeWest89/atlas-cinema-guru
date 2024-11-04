"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

type FetchTitlesProps = {
  query?: string;
  currentPage?: number;
};

export default function FetchTitles({ query = "", currentPage = 1 }: FetchTitlesProps) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session || status !== "authenticated") {
      return;
    };

    const fetchTitles = async () => {
      const url = `/api/titles?query=${encodeURIComponent(query)}&page=${currentPage}`;
      console.log("Fetching from:", url);

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };

    fetchTitles();
  }, [query, currentPage, session, status]);

  return null;
}
