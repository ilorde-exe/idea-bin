"use client";
import bulb from "@public/bulb.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex flex-center ">
        <Image
          src={bulb}
          alt="IdeaBin logo"
          width={30}
          height={30}
          className=" object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
