import React from "react";
import Image from "next/image";
import culture from "@public/culture.png";

const Featured = () => {
  return (
    <div>
      <h1 className="mb-6 text-5xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
        Featured
      </h1>
      <div className=" flex flex-col lg:flex-row">
        <div className="">
          <Image src={culture} className="" />
        </div>
        <div className="p-2 lg:p-8 ">
          <h2 className="py-4 text-xl">
            Discover the Serenity: Scenic Vacation Places Around the World
          </h2>
          <p>
            Are you ready to escape the hustle and bustle of daily life and
            immerse yourself in the breathtaking beauty of nature? Look no
            further! In this article, we'll take you on a journey to some of the
            most picturesque vacation spots around the world, where stunning
            landscapes and tranquil settings await you. From charming seaside
            towns overlooking the sea to majestic mountain retreats surrounded
            by pristine wilderness, there's something for every traveler seeking
            a scenic getaway.
            <br />
            <br />
            1) Cinque Terre, Italy: Nestled along the rugged coastline of the
            Italian Riviera, Cinque Terre is a collection of five colorful
            villages perched on cliffs overlooking the Ligurian Sea. With its
            pastel-colored buildings, narrow cobblestone streets, and panoramic
            views of the sea, this UNESCO World Heritage Site is a
            photographer's paradise. Hike along the famous coastal trail, sample
            fresh seafood at local trattorias, or simply relax on the pebbled
            beaches as you soak in the Mediterranean sun.
          </p>
          <div className="mt-4"></div>
          <button class="bg-white hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-950 hover:bg-gray-500 hover:text-white rounded transition duration-500 ease-in-out ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
