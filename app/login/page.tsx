"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [session, router]);

  return (
    <div className="p-5 bg-white shadow-md rounded-2xl flex flex-col items-center">
      <Image src="/logo.png" alt="Logo" className="mb-4" width={150} height={150} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button
          type="button"
          onClick={() => signIn("github", { callbackUrl: "/home" })}
          className="flex mt-4 bg-white border border-[gray] text-[#000000] rounded-lg py-2 px-4 hover:bg-[#1ED2AF] hover:text-white transition duration-200 group"
        >
          <div className="flex justify-between gap-20">
            Sign in with GitHub
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-[#000000] group-hover:text-white transition duration-200"
            >
              <title>github</title>
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
}