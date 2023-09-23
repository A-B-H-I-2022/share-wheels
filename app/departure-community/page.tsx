"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
interface Office {
  name: string;
  image: string;
  address: string;
  description: string;
}
interface Home {
  name: string;
  image: string;
  address: string;
  description: string;
}
export default function DC() {
  const [Community, setCommunity] = React.useState("InfoPark");
  const people: Office[] = [
    {
      name: "InfoPark",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Infopark%2C_Kakkanad%2C_Kochi%2C_Kerala%2C_India.jpg",
      address: "Kochi, Kerala, India",
      description: "Koc",
    },
    {
      name: "Technopark",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Technopark_Trivandrum_Ariel_View_June_2014.jpg/435px-Technopark_Trivandrum_Ariel_View_June_2014.jpg",
      address: "Trivandrum, Kerala, India",
      description: "Koc",
    },
  ];
  const home: Home[] = [
    {
      name: "Skyline",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Cityscape_view_from_Kakkanad.jpg",
      address: "Kakkanad, Kerala, India",
      description: "",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 p-4 pt-10 bg-indigo-50">
        <Input
          type="text"
          label="Accomodation Community"
          placeholder="Enter the name of your apartment complex"
        />
        <Input
          type="text"
          label="Office Community"
          placeholder="Enter the name of your Office commute"
        />
        {people
          .filter((person) => person.name === Community)
          .map((person, index) => (
            <Card className="py-4" key={index}>
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <h4 className="font-bold text-large">{person.name}</h4>
                <p className="font-bold uppercase text-tiny">
                  {person.address}
                </p>
              </CardHeader>
              <CardBody className="py-2 overflow-visible">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={person.image}
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
