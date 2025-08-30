"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { USER_STORAGE } from "@/lib/storage-store";
import type { LoginSchema } from "@/types/login";
import type { UserResponse } from "@/types/user";

export async function handleLogin(values: LoginSchema) {
  console.log(values);
  try {
    const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data: UserResponse = await response.json();
    const user = data.results[0];

    const cookieStore = await cookies();
    cookieStore.set(USER_STORAGE, JSON.stringify(user));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}


export async function handleLogout() {
  const cookieStore = await cookies();
  cookieStore.delete(USER_STORAGE);
  redirect("/");
}