"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
interface Person {
  name: string;
  photo: string;
  address: string;
}
export default function DC() {
  const [Community, setCommunity] = React.useState("");
  const people: Person[] = [
    {
      name: "John Doe",
      photo: "https://example.com/john-doe.jpg",
      address: "123 Main Street",
    },
    {
      name: "Jane Doe",
      photo: "https://example.com/jane-doe.jpg",
      address: "456 Elm Street",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 p-4 pt-10 bg-indigo-50">
        <Input type="text" label="Accomodation Community" />

        {people.map((person, index) => (
          <Card className="py-4" key={index}>
            <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
              <p className="font-bold uppercase text-tiny">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="py-2 overflow-visible">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg"
                width={500}
                height={500}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
