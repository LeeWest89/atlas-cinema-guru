import { Metadata } from "next";
import Header from "../../components/Header";
import Sidebar from "../../components/SideNavBar";
import SearchHandler from "../../components/SearchHandler";
import YearSearchHandler from "../../components/YearSearchHandler";
import GenreSearchHandler from "../../components/GenreSearchHandler";
import FetchTitles from "../../components/FetchHook";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {

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
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}