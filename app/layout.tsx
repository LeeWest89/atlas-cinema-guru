import { Metadata } from "next";
import Header from "../components/Header";
import Sidebar from "../components/SideNavBar";
import { auth } from "../auth";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const session = await auth();

  if (!session && typeof window !== "undefined" && window.location.pathname !== "/login") {
    redirect("/login");
  }

  const isLoginPage = !session;

  return (
    <html lang="en">
      <body className={`antialiased ${isLoginPage ? "bg-gray-100 text-black flex items-center justify-center min-h-screen" : "bg-[#00003c] text-white"}`}>
        {session ? (
          <>
            <Header session={session} />
            <div className="flex">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <main className="p-6 flex-1">{children}</main>
              </div>
            </div>
          </>
        ) : (
          <main className="p-6 flex items-center justify-center min-h-screen">{children}</main>
        )}
      </body>
    </html>
  );
}