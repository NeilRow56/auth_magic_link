import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  if (!session)
    return (
      <main className="flex flex-col items-center py-12">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </main>
    );

  const users = await prisma.user.findMany({});
  return (
    <main className="flex flex-col items-center py-12">
      <h1 className="">Welcome {session.user?.email}</h1>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </div>
      <h1 className="font-bold text-4xl mt-6">Users</h1>
      {users.map((user) => (
        <ul
          key={user.id}
          className="text-blue-600 list-inside list-disc w-[400px] mx-auto"
        >
          <li className="mt-2">
            <Link
              href={`/user/${user.id}}`}
              className="hover:bg-gray-200 rounded-md p-1"
            >
              {user.firstName || `User ${user.id}`}
            </Link>
          </li>
        </ul>
      ))}
    </main>
  );
}
