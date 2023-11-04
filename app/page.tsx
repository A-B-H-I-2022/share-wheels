"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <section className="">
      <div className="h-screen bg-indigo-100">
        <div className="flex justify-center p-20 align-middle h-1/2">
          <Image
            src="/images/Group 16.png"
            alt="isk"
            objectFit="fit"
            quality={100}
            height={500}
            width={500}
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-6 p-3 rounded-lg bg-stone-800 h-1/2">
          {/* <Button onClick={() => router.push("/login")}>Login</Button> */}
          <Button onClick={() => router.push("/login")}>
            Register for Business
          </Button>

          <Button onClick={() => router.push("/loginb2c")}>
            Register for You
          </Button>
        </div>
      </div>{" "}
    </section>
  );
}
