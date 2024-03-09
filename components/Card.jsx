import Image from "next/image";
import React from "react";
import culture from "@public/culture.png";
import Link from "next/link";

function Card() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 align-center">
      <div className="flex-1">
        <Image src={culture} alt="" className="object-cover rounded-xl" />
      </div>
      <div className="flex flex-col gap-4    flex-1 basis-1/3">
        <div className="font-mono">
          <span>11.2.2024 </span>
          <span className="text-red-600 font-bold">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsam
          similique. Praesentium ad repudiandae aliquam possimus deleniti
          pariatur nobis assumenda earum? Sunt iusto ratione corporis deleniti
          sed sit laborum qui! Repellat possimus aliquam, aspernatur doloremque
          deleniti obcaecati perspiciatis rerum optio illo necessitatibus
          dolorum modi...
        </p>
        <div></div>
        <Link
          href="/"
          className="flex justify-center w-32 bg-white text-black font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-950 hover:bg-gray-500 hover:text-white rounded transition duration-500 ease-in-out"
        >
          Read More
        </Link>
        <hr />
      </div>
    </div>
  );
}

export default Card;
