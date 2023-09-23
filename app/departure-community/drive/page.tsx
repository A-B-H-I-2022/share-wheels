"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const { createClient } = require("@supabase/supabase-js");
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
interface Office {
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
interface Home {
  id: number;
  created_at: Date;
  name: string | null;
  address: string | null;
  description: string | null;
  image: string | null;
}
interface Driveorride {
  image: string;
  title: string;
  route: string;
}
export default function DC() {
  const [Community, setCommunity] = React.useState("InfoPark");
  const [home, setHome] = React.useState("Skyline");
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [tryoffice, setTryoffice] = React.useState<OfficePlace[]>([]);
  const [check, setCheck] = React.useState(true);
  const [tryhome, setTryhome] = React.useState<Home[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const List = [
    { image: "/images/rider .png", title: "Ride", route: "/ride" },
    { image: "/images/steering.png", title: "Drive", route: "/drive" },
  ];
  // React.useEffect(() => {
  //   // async function fetchB2CData() {
  //   //   let { data, error } = await supabase.from("b2c").select("*");
  //   //   if (error) {
  //   //     console.log("error", error);
  //   //   } else {
  //   //     console.log("b2c", data);
  //   //   }
  //   // }
  //   async function fetchPlaceData() {
  //     const { data, error } = await supabase.from("officeplace").select("*");
  //     if (error) {
  //       console.log("error", error);
  //     } else {
  //       console.log("place", data);
  //     }
  //     setTryoffice(data);
  //   }

  //   // fetchB2CData();
  // }, []);

  React.useEffect(() => {
    async function fetchHomeData(home: string) {
      let { data, error } = await supabase
        .from("Home")
        .select("*")
        .ilike("name", `%${home}%`);
      if (error) {
        console.error(error);
      } else {
        setTryhome(data);
        console.log(data);
      }
    }
    fetchHomeData(home);
  }, [home]);
  React.useEffect(() => {
    async function fetchPlaceData(community: string) {
      let { data, error } = await supabase
        .from("officeplace")
        .select("*")
        .ilike("name", `%${community}%`);
      if (error) {
        console.error(error);
      } else {
        setTryoffice(data);
      }
    }
    fetchPlaceData(Community);
  }, [Community]);
  function handleCommunityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCommunity(event.target.value);
  }
  function handleHomeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHome(event.target.value);
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4 pt-10 bg-indigo-50">
        <Input
          type="text"
          label="Accomodation Community"
          placeholder="Enter the name of your apartment complex"
          value={Community}
          onChange={handleCommunityChange}
          onClick={() => {
            setCheck(true);
          }}
        />
        <Input
          type="text"
          label="Office Community"
          placeholder="Enter the name of your Office commute"
          value={home}
          onChange={handleHomeChange}
        />
        {check &&
          tryoffice.map((person, index) => (
            <div
              className=""
              key={index}
              onClick={() => {
                setCommunity(person.name ?? "");
                setCheck(false);
              }}
            >
              <Card className="py-4 cursor-pointer">
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
            </div>
          ))}
        {!check &&
          tryhome.map((homie, index) => (
            <div
              className=""
              key={index}
              onClick={() => {
                setHome(homie.name ?? "");
              }}
            >
              <Card className="py-4 cursor-pointer">
                <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                  <h4 className="font-bold text-large">{homie.name}</h4>
                  <p className="font-bold uppercase text-tiny">
                    {homie.address}
                  </p>
                </CardHeader>
                <CardBody className="py-2 overflow-visible">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={homie.image ?? ""}
                    width={500}
                    height={500}
                  />
                </CardBody>
              </Card>
            </div>
          ))}
        <Button onPress={onOpen}>Submit</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Choose ride or drive
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-2">
                    {List.map((item, index) => (
                      <Card
                        shadow="sm"
                        key={index}
                        className="light"
                        isPressable
                        onPress={() => console.log("item pressed")}
                      >
                        <CardBody className="p-0 overflow-visible">
                          <Image
                            width={100}
                            height={100}
                            alt={item.title}
                            className="object-center "
                            src={item.image}
                          />
                        </CardBody>
                        <CardFooter className="justify-between text-small">
                          <b>{item.title}</b>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
