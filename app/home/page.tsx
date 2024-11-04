"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/SideNavBar";
import SearchHandler from "../../components/SearchHandler";
import YearSearchHandler from "../../components/YearSearchHandler";
import GenreSearchHandler from "../../components/GenreSearchHandler";
import FetchTitles from "../../components/FetchHook";

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("HomePage status:", status);
    if (status === "unauthenticated") {
        router.push("/login");
    }
  }, [status, router]);

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex w-[100%] justify-between">
          <div>
            <SearchHandler />
            <YearSearchHandler />
          </div>
          <div>
            <GenreSearchHandler />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <FetchTitles />
        </div>
      </div>
    </>
  );
}