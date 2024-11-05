"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

type FetchWatchProps = {
  currentPage?: number;
  updateTotalPages: (totalCount: number) => void;
  setWatch: (watch: any[]) => void;
};

export default function FetchWatch({
  currentPage = 1,
  updateTotalPages,
  setWatch,
}: FetchWatchProps) {
  const { data: session, status } = useSession();
  const hasFetchedRef = useRef<number | null>(null);

  useEffect(() => {
    if (!session || status !== "authenticated") {
      return;
    }

    const fetchWatch = async () => {
      const url = `/api/watch-later?page=${currentPage}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          console.log("Fetched watch-later:", data);
          const watchLaterData = data.watchLater || {};
          const titlesArray = Array.isArray(watchLaterData.titles) ? watchLaterData.titles : [];
          setWatch(titlesArray);

          const totalPages = watchLaterData.totalPages || 1;
          updateTotalPages(totalPages);
        } else {
          console.error("Failed to fetch watch-later:", data.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching watch-later:", error);
      }
    };

    if (hasFetchedRef.current !== currentPage) {
      fetchWatch();
      hasFetchedRef.current = currentPage;
    }
  }, [currentPage, updateTotalPages, setWatch, session, status]);

  return null;
}
