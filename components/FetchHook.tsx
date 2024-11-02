"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

type FetchTitlesProps = {
  query?: string;
};

export default function FetchTitles({ query = "" }: FetchTitlesProps) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session || status !== "authenticated") {
      return;
    };

    const fetchTitles = async () => {
      const url = `/api/titles?query=${encodeURIComponent(query)}`;
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
  }, [query, session, status]);

  return null;
}
