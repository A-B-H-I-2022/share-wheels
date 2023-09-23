"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Home() {
  const router: Router = useRouter();
  return (
    <section>
      <div className="bg-gray-300 h-screen">
        <div className="bg-indigo-400 fixed bottom-0 h-1/2 w-full rounded-lg">
          <Button onClick={() => router.push("/login")}>Login</Button>
          <Button>Register</Button>
        </div>
      </div>{" "}
    </section>
  );
}
