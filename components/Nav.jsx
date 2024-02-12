"use client";
import bulb from "@public/bulb.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";
const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);
  const [toggleDropdown, setToggleDropdown] = useState(false);

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
      {/*Desktop Navigation */}
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
            <button className="py-2.5 px-5 me-2 mb-2 font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-2 border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
              Sign Out
            </button>
            <Link href="/profile" className="px-2">
              <Image
                src={bulb}
                height={37}
                width={37}
                className="rounded-full"
                alt="profile-picture"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="py-2.5 px-5 me-2 mb-2 font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-2 border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/*Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex px-2 p-2">
            <Image
              src={bulb}
              height={37}
              width={37}
              className="rounded-full"
              alt="profile-picture"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div
                id="dropdownDivider"
                className="absolute right-0 top-full z-10 bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-2 divide-y divide-gray-100 rounded-b-lg shadow w-36"
              >
                <ul
                  class="py-1 text-m text-gray-800 font-semibold"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <Link
                      href="/profile"
                      className="block px-4 py-1 hover:bg-gray-100"
                      onClick={() => setToggleDropdown(false)}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/create-post"
                      className="block px-4 py-1 hover:bg-gray-100"
                      onClick={() => setToggleDropdown(false)}
                    >
                      Create Post
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="block px-4 py-1 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="py-2.5 px-5 me-2 mb-2 font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-2 border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
