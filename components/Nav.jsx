"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3 bg-white">
      <Link href="/" className="flex gap-2 flex-center ">
        <Image></Image>
      </Link>
    </nav>
  );
};

export default Nav;
