"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
export default function LoginPage() {
  return (
    <div className="bg-indigo-300">
      <div className="h-40 flex justify-center align-middle">
        <h1 className="text-6xl font-medium">Sign Up</h1>
      </div>
      <div className="p-10 bg-stone-900 h-full rounded-tl-5xl pt-20">
        <form action="" method="post" className="flex flex-col gap-3">
          <Input type="text" label="Name" />
          <Input type="email" label="Email" placeholder="Enter your email" />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button color="success">Submit</Button>
        </form>
      </div>
    </div>
  );
}
