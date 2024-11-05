import { Metadata } from "next";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
  session: any;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div>{children}</div>
  );
}