import Link from "next/link";
import React from "react";

const AuthLinks = () => {
  const authStatus = true;
  return (
    <>
      {authStatus === false ? (
        <Link
          href="/login"
          className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-white hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-2xl hover:bg-opacity-5"
        >
          Login
        </Link>
      ) : (
        <>
          <Link
            href="/write"
            className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-white hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-2xl hover:bg-opacity-5"
          >
            Write
          </Link>
          <span className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-white hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-2xl hover:bg-opacity-5">
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
