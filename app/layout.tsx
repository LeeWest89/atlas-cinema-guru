import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased bg-darkBlue text-white">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}