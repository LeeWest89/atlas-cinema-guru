import { Metadata } from "next";
import Header from "../../components/Header";
import Sidebar from "../../components/SideNavBar";
import SearchHandler from "@/components/SearchHandler";

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
        <SearchHandler />
        <div className="flex-1 flex flex-col">
          <main className="p-6 flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}