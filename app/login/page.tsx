import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import getSession from "@/lib/getSession";
import { SubmitButton } from "@/components/shared/submit-button";

export default async function LoginPage() {
  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login 🔓 </CardTitle>
            <CardDescription>
              Enter your email below to login in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-y-4"
              action={async (formData) => {
                "use server";
                await signIn("resend", formData);
              }}
            >
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="email">Email </Label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="hello@example.com"
                />
              </div>
              <SubmitButton text="Login" />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
