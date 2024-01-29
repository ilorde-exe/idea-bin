"use client";
import bulb from "@public/bulb.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-4 pt-3 h-14 shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
      <Link href="/" className="flex flex-center px-4">
        <Image
          src={bulb}
          alt="IdeaBin logo"
          width={30}
          height={30}
          className="object-contain "
        />
        <p className="px-2 text-white text-2xl font-bold font-inter ">
          IdeaBin
        </p>
      </Link>
    </nav>
  );
};

export default Nav;
