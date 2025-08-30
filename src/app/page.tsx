import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { USER_STORAGE } from "@/lib/storage-store";

export default async function Home() {
  const cookieStore = await cookies();
  const user = cookieStore.get(USER_STORAGE);

  if (user) {
    redirect("/dashboard");
  }

  redirect("/login");
}
