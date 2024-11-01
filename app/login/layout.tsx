import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Cinema Guru | Login",
};

type Props = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return (
    <SessionProvider>
      <div>
        {children}
      </div>
    </SessionProvider>
  );
}