"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/utils/supabase/server";

export async function login(
  formData: FormData,
) {
  const supabase = await createClient();

  const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
  });

  const validatedData = LoginSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  console.log(validatedData)
  const { error } = await supabase.auth.signInWithPassword(validatedData);

  console.log(error)
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
