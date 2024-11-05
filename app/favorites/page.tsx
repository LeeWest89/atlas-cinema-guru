"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Sidebar from "../components/SideNavBar";
import { Pagination } from "../components/Pagination";
import { FandWGrid } from "../components/FandWGrid";

export default function FavoritesPage() {
  const { status } = useSession();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const updateTotalPages = (totalCount: number) => {
    setTotalPages(totalCount);
  };

  useEffect(() => {
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
  }, [currentPage]);

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-col w-full">
          <h1 className="flex justify-center font-bold text-3xl pt-10 pb-5">Favorites</h1>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full">
              <FandWGrid
                currentPage={currentPage}
                updateTotalPages={updateTotalPages}
                movies={favorites}
              />
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
