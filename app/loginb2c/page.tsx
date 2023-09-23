"use client";
import React from "react";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
// import { Select, SelectSection, SelectItem } from "@nextui-org/reac";
import { Switch } from "@nextui-org/switch";

export default function LoginPage() {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <>
      <div className="bg-indigo-100 ">
        <div className="flex justify-center h-40 align-middle">
          <h1 className="text-6xl font-medium">Sign Up</h1>
        </div>
        <div className="h-full p-10 pt-20 bg-stone-900 rounded-tl-5xl">
          <form action="" method="get" className="flex flex-col gap-3">
            <Input type="text" label="Name" />
            <div className="flex flex-row gap-2">
              <Input type="date" label="Date of Birth" placeholder="" />
              <Input type="number" label="Age" />
            </div>
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            {/* <Select label="Are You physically disabled"></Select> */}
            <Switch isSelected={isSelected} onValueChange={setIsSelected}>
              Are you physically disabled?
            </Switch>
            <p className="text-small text-default-500">
              Selected: {isSelected ? "true" : "false"}
            </p>
            <Button type="submit" color="success">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
