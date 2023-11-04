"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const { createClient } = require("@supabase/supabase-js");

import { Router } from "next/router";
import { useRouter } from "next/navigation";
export default function Drive() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [userid, setUserid] = React.useState(1);
  const [placedata, setPlacedata] = React.useState<any>([]);
  const [parkingdata, setParkingdata] = React.useState([]);
  const [nfreeparks, setNfreeparks] = React.useState([]);
  const router: Router = useRouter();
  React.useEffect(() => {
    async function getplace(id: number) {
      let { data, error } = await supabase
        .from("b2b")
        .select("*")
        .eq("place_id", id);
      if (error) {
        console.log(error);
      } else {
        console.log(data);

        setPlacedata(data);
      }
    }

    async function notfreeparks() {
      let { data, error } = await supabase.from("pspot").select("name");
      if (error) {
        console.log(error);
      } else {
        const listOfNames = data.map((obj) => obj.name);
        setNfreeparks(listOfNames);
        console.log(nfreeparks);
      }
    }
    notfreeparks();
    getplace(userid);
  }, []);
  async function addparking(park: string) {
    let { data, error } = await supabase
      .from("pspot")
      .insert([{ name: park, number: 4 }])
      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
  return (
    <>
      <div className=" light">
        <div className="flex flex-col gap-4 p-5">
          {placedata.map((place, index) => (
            <Card key={index} className="p-4">
              <h1 className="">Parking Slot details</h1>
              <div className="flex flex-wrap gap-4">
                {place["parkingslot"].map((parking, index) => (
                  <div
                    className="flex justify-center w-10 h-12 align-middle bg-green-600"
                    key={index}
                    onClick={() => {
                      alert("You have selected " + parking);
                      addparking(parking);
                      router.push("/home");
                    }}
                  >
                    <p>{parking}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
          <Card className="p-4">
            <h1>Not Available</h1>
            <div className="flex flex-wrap gap-4">
              {nfreeparks.map((parking, index) => (
                <div
                  className="flex justify-center w-10 h-12 align-middle bg-red-600"
                  key={index}
                >
                  <p>{parking}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
