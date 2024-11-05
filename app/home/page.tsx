"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideNavBar";
import SearchHandler from "../components/SearchHandler";
import YearSearchHandler from "../components/YearSearchHandler";
import GenreSearchHandler from "../components/GenreSearchHandler";
import FetchTitles from "../components/FetchHook";
import { Pagination } from "../components/Pagination";
import { MovieGrid } from "../components/CardGrid";

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [minYear, setMinYear] = useState<string>("");
  const [maxYear, setMaxYear] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    console.log("HomePage status:", status);
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const updateTotalPages= (totalCount: number) => {
    setTotalPages(totalCount);
  };

  const handleGenreSelect = (genres: string[]) => {
    setSelectedGenres(genres);
    setCurrentPage(1);
  };

  const handleYearSearch = (newMinYear: string, newMaxYear: string) => {
    setMinYear(newMinYear);
    setMaxYear(newMaxYear);
    setCurrentPage(1);
  };

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-col w-full">
          <div className="flex w-full justify-between">
            <div>
              <SearchHandler onSearch={handleSearch} />
              <YearSearchHandler onSearch={handleYearSearch} />
            </div>
            <div>
              <GenreSearchHandler
                onGenreSelect={handleGenreSelect}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <FetchTitles
              currentPage={currentPage}
              selectedGenres={selectedGenres}
              updateTotalPages={updateTotalPages}
              minYear={minYear}
              maxYear={maxYear}
              query={query}
            />
            <div className="flex justify-center w-full">
              <MovieGrid
                currentPage={currentPage}
                selectedGenres={selectedGenres}
                updateTotalPages={updateTotalPages}
                minYear={minYear}
                maxYear={maxYear}
                query={query}
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