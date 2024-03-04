"use client";
import React from "react";
import Image from "next/image";
import blueYellow from "@public/blueyellow.jpg";
import bluePink from "@public/bluepink.jpg";
import blue from "@public/blue.jpg";
import blueOrange from "@public/blueorange.jpg";
import fireRed from "@public/firered.jpg";

const Background = () => {
  const backgrounds = [bluePink, blueYellow, blue, blueOrange];
  return (
    <div className=" -z-10 fixed w-screen h-screen">
      <Image
        src={backgrounds[3]}
        alt="Blue and Yellow Background"
        placeholder="blur"
        quality={100}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Background;
