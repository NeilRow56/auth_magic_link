import { getUserById } from "@/lib/actions/user.actions";
import { notFound } from "next/navigation";

const UserPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  const user = await getUserById(id);
  if (!user) notFound();
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <h1 className="h2-bold">{id}</h1>
      <p className="text-muted-foreground">
        {user?.createdAt.toLocaleDateString("en-GB")}
      </p>
    </div>
  );
};

export default UserPage;
