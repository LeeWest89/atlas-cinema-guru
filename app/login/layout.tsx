import { Metadata } from "next";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Cinema Guru | Login",
};

type Props = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return (
      <div className="antialiased bg-gray-100 text-white flex flex-col items-center justify-center min-h-screen">
        {children}
      </div>
  );
}