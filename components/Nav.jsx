"use client";
import bulb from "@public/bulb.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";
const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex justify-between w-full mb-4 pt-3 h-15 shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
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
      {/*Mobile Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex px-2 gap-3 md:gap-5">
            <Link href="/create-post">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 font-semibold text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Create Post
                </span>
              </button>
            </Link>
            <button className="py-2.5 px-5 me-2 mb-2 font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-2 border-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
