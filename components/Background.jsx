import React from "react";
import Image from "next/image";
import blueYellow from "@public/blueyellow.jpg";

const Background = () => {
  return (
    <div className=" -z-10 fixed w-screen h-screen">
      <Image
        src={blueYellow}
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
