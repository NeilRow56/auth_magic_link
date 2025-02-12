import { requireUser } from "@/hooks/require-user";
import React from "react";

async function DashboardPage() {
  const session = await requireUser();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default DashboardPage;
