import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-[#1ED2AF] px-3 h-16">
      <div className="flex justify-between items-center h-full">
        <h1>Cinema Guru</h1>
        <div className="flex gap-4">
          {session ? (
            <>
              <h1>Welcome, {session.user?.name}!</h1>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <h1>Please log in</h1>
          )}
        </div>
      </div>
    </header>
  );
}