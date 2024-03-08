"use client";
import React from "react";
import Image from "next/image";
import blueYellow from "@public/blueyellow.jpg";
import bluePink from "@public/bluepink.jpg";
import blue from "@public/blue.jpg";
import blueOrange from "@public/blueorange.jpg";

const Background = ({ count }) => {
  const backgrounds = [bluePink, blueYellow, blue, blueOrange];
  return (
    <div className=" -z-10 fixed w-screen h-screen">
      {"Create a smoother transition for the background images"}
      <Image
        src={backgrounds[count]}
        alt="Blue and Yellow Background"
        placeholder="blur"
        quality={100}
        layout="fill"
        objectFit="cover"
        className="transition duration-500 ease-in-out"
      />
    </div>
  );
};

export default Background;
