"use client";
import bulb from "@public/bulb.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
const Nav = () => {
  const isUserLoggedIn = true;

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex justify-between w-full mb-4 pt-3 h-16 shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
      <Link href="/" className="flex flex-center px-4">
        <Image
          src={bulb}
          alt="IdeaBin logo"
          width={35}
          height={35}
          className="object-contain "
        />
        <p className="px-2 pt-2 text-white text-2xl font-bold font-inter sm:flex hidden">
          IdeaBin
        </p>
      </Link>
      <div className="">
        <Link>Homepage</Link>
        <Link>Contact</Link>
        <Link>About</Link>
      </div>
    </nav>
  );
};

export default Nav;
