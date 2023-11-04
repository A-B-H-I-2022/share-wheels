"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import React from "react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function LoginPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [officeName, setOfficeName] = React.useState("");
  const [officeLocation, setOfficeLocation] = React.useState("");
  const router = useRouter();
  return (
    <div className="bg-indigo-100 ">
      <div className="flex justify-center h-40 align-middle">
        <h1 className="text-6xl font-medium text-black">Sign Up</h1>
      </div>
      <div className="h-full p-10 pt-20 bg-stone-900 rounded-tl-5xl">
        <form action="" method="post" className="flex flex-col gap-3">
          <Input type="text" label="Name" />
          <Input type="email" label="Email" placeholder="Enter your email" />
          <Input type="text" label="Office name" placeholder="Eg: IBM" />
          <Input
            type="text"
            label="Office location"
            placeholder="Eg: InfoPark"
          />
          <Input type="text" label="City" placeholder="Eg: Ernakulam" />
          <Input type="text" label="State" placeholder="Eg: Kerala" />
          <Input type="number" label="Parking slot no" placeholder="Eg: 10" />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button
            color="success"
            onClick={() => {
              router.push("/departure-community");
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
