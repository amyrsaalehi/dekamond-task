"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type LoginSchema, loginSchema } from "@/types/login";
import { handleLogin } from "../action";

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(values: LoginSchema) {
    const res = await handleLogin(values);

    if (res) {
      router.replace("/dashboard");
    } else {
      toast.error("Login failed");
    }
  }

  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-3xl font-bold mb-8">Login</h1>
      <hr />
      <Form {...form}>
        <form
          className="flex flex-col gap-4 w-full max-w-md"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="phone"
            render={() => (
              <FormItem className="w-full">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="w-full"
                    {...form.register("phone")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </main>
  );
}
