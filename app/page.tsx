import { redirect } from "next/navigation";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/checkSession`, {
    method: 'GET',
    credentials: 'include',
  });

  if (res.status === 401) {
    redirect("/login");
  }
}
