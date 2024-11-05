"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

type FetchFavoritesProps = {
  currentPage?: number;
  updateTotalPages: (totalCount: number) => void;
  setFavorites: (favorites: any[]) => void; 
};

export default function FetchFavorites({ currentPage = 1, updateTotalPages, setFavorites }: FetchFavoritesProps) {
  const { data: session, status } = useSession();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (!session || status !== "authenticated") {
      return;
    }
  
    const fetchFavorites = async () => {
      const url = `/api/favorites?page=${currentPage}`;
  
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
  
        if (response.ok) {
          console.log('Fetched favorites:', data.favorites);
          setFavorites(data.favorites.titles || []);
          updateTotalPages(data.favorites.totalPages || 1);
        } else {
          console.error("Failed to fetch favorites:", data.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
  
    fetchFavorites();
  }, [currentPage, updateTotalPages, setFavorites, session, status]);

  return null;
}
