import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
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
    </main>
  );
}
