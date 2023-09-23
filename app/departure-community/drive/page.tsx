"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const { createClient } = require("@supabase/supabase-js");
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
interface OfficePlace {
  id: number;
  created_at: Date | null;
  name: string | null;
  image: string | null;
  address: string | null;
}
export default function DC() {
  const [Community, setCommunity] = React.useState("InfoPark");
  const [Home, setHome] = React.useState("Skyline");
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [tryoffice, setTryoffice] = React.useState<OfficePlace[]>([]);
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
  React.useEffect(() => {
    async function fetchB2CData() {
      let { data, error } = await supabase.from("b2c").select("*");
      if (error) {
        console.log("error", error);
      } else {
        console.log("b2c", data);
      }
    }
    async function fetchPlaceData() {
      const { data, error } = await supabase.from("officeplace").select("*");
      if (error) {
        console.log("error", error);
      } else {
        console.log("place", data);
      }
      setTryoffice(data);
    }

    fetchB2CData();
    fetchPlaceData();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 p-4 pt-10 bg-indigo-50">
        <form action="" className="flex flex-row">
          <Input
            type="text"
            label="Accomodation Community"
            placeholder="Enter the name of your apartment complex"
          />
          <Button color="success" className="h-full">
            Submit
          </Button>
        </form>
        <Input
          type="text"
          label="Office Community"
          placeholder="Enter the name of your Office commute"
        />
        {tryoffice
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
                  src={person.image ?? ""}
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
