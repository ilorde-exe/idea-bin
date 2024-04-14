import React from "react";
import Image from "next/image";
import Link from "next/link";
import culture from "@public/culture.png";
const SinglePage = () => {
  return (
    <div>
      <section className="lg:px-24 lg:py-10 px-4 px-4 w-full flex-center flex-col ">
        <div className="py-10 px-12 rounded-2xl shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-none lg:backdrop-blur-sm  bg-opacity-20 ">
          <div className="flex flex-col mb-8">
            <div className="mb-6 flex flex-col md:flex-row flex-1">
              <div className="flex-1 ">
                <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                  Discover <span className="text-black">and</span> Share your
                  Ideas.
                </h1>
                <div className="py-2 flex-1 flex items-center gap-6">
                  <span className="text-red-600 font-bold">CULTURE</span>
                  <span>John Doe</span>
                  <span>11.2.2024 </span>
                </div>
              </div>
              <div className="relative max-w-md ">
                <Image src={culture} className="rounded-xl" />
              </div>
            </div>

            <p className="py-4 font-inter text-l lg:text-xl text-black lg:font-normal font-medium">
              Your Gateway to Creativity Unleashed! Explore a boundless
              collection of ingenious concepts and inventions, or ignite the
              spark of inspiration by contributing your own groundbreaking
              ideas. Whether you're seeking innovative solutions or eager to
              share your creative genius, Idea-bin is the vibrant online
              community where imagination flourishes. Join us in shaping the
              future, one idea at a time!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
