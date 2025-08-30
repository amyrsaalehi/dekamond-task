import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { USER_STORAGE } from "@/lib/storage-store";
import type { User } from "@/types/user";
import { handleLogout } from "../action";

const LogoutButton = dynamic(() => import("@/components/logout-button"), {ssr: true});

export default async function LoginPage() {
  const cookieStore = await cookies();
  const userValue = cookieStore.get(USER_STORAGE)?.value;
  if (!userValue) {
    redirect("/");
  }
  const user: User = JSON.parse(userValue);

  if (!user) {
    await handleLogout();
  }

  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center gap-2 h-screen">
      <Avatar className="w-32 h-32">
        <AvatarImage 
          src={user.picture.large} 
          srcSet={`
            ${user.picture.thumbnail} 96w,
            ${user.picture.medium} 128w,
            ${user.picture.large} 256w
          `}
          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 256px"
        />
        <AvatarFallback>{user.name.first.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-bold">
        Hello {user.name.first} {user.name.last}
      </h1>
      <p className="text-lg">Email {user.email}</p>
      <LogoutButton />
    </main>
  );
}
