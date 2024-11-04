"use client";

import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-Teal px-3 h-16">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-4">
          <svg
            fill="#00003c"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M490.667,42.667H384H128H21.333C9.551,42.667,0,52.218,0,64v128v128v85.333V448c0,11.782,9.551,21.333,21.333,21.333H128
                h256h106.667c11.782,0,21.333-9.551,21.333-21.333v-42.667V320V192V64C512,52.218,502.449,42.667,490.667,42.667z M42.667,213.333
                h64v85.333h-64V213.333z M362.667,192v42.667H149.333V192V85.333h213.333V192z M149.333,405.333V320v-42.667h213.333V320v85.333
                v21.333H149.333V405.333z M405.333,213.333h64v85.333h-64V213.333z M469.333,85.333v85.333h-64V85.333H469.333z M42.667,85.333h64
                v85.333h-64V85.333z M42.667,426.667v-21.333v-64h64v64v21.333H42.667z M469.333,426.667h-64v-21.333v-64h64v64V426.667z"/>
              </g>
            </g>
          </svg>
          <h1 className="text-darkBlue font-bold">Cinema Guru</h1>
        </div>
        <div className="flex gap-4">
        {session && (
          <>
            <h1 className="text-darkBlue">Welcome, {session.user?.name}!</h1>
            <button className="flex items-center gap-1 text-darkBlue" onClick={() => signOut()}>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                  stroke="#00003c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Logout
            </button>
          </>
        )}
        </div>
      </div>
    </header>
  );
}