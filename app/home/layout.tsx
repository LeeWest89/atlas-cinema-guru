import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
  session: any;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>{children}</div>
  );
}