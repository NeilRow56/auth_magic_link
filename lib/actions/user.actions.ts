"use server";

import { requireUser } from "@/hooks/require-user";
import prisma from "../prisma";

// Get user by id
export async function getUserById(id: string) {
  const session = await requireUser();
  const user = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });

  return user;
}
