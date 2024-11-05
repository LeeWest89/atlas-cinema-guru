"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Sidebar from "../components/SideNavBar";
import FetchWatch from "../components/FetchWatch";
import { Pagination } from "../components/Pagination";
import { FavoriteGrid } from "../components/FavoriteGrid";

export default function WatchLaterPage() {
  const { status } = useSession();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [watchLater, setWatchLater] = useState<any[]>([]);

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

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-col w-full">
          <h1 className="flex justify-center font-bold text-3xl pt-10 pb-5">Watch Later</h1>
          <div className="flex flex-col items-center">
            <FetchWatch
              currentPage={currentPage}
              updateTotalPages={updateTotalPages}
              setWatch={setWatchLater}
            />
            <div className="flex justify-center w-full">
              <FavoriteGrid
                currentPage={currentPage}
                updateTotalPages={updateTotalPages}
                movies={watchLater}
                type="watchLater"
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
