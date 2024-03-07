"use client";
import bulb from "@public/bulb.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import AuthLinks from "./AuthLinks";
import Background from "./Background";
import { PaintBucketIcon } from "lucide-react";

const Nav = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  const [count, setcount] = useState(0);
  function setLocalstorage(index) {
    if (localStorage.getItem("bgNumber") === undefined) {
      localStorage.setItem("bgNumber", index);
    } else {
      localStorage.setItem("bgNumber", index);
    }
  }
  function changeBackground() {
    if (count == 3) setcount(0);
    else setcount(count + 1);
    console.log("Background number=", count);
  }
  return (
    <div>
      <Background count={count} />
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
        <div className="hidden lg:flex lg:items-center lg:-mt-2 lg:px-3 lg:py-1.5 lg:gap-3 lg:text-lg lg:text-white ">
          <div className="mt-2">
            <button type="button" onClick={changeBackground}>
              <PaintBucketIcon />
            </button>
          </div>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <AuthLinks />
        </div>
        <div className="lg:hidden flex">
          <div className="flex lg:hidden">
            <div className="m-2.5 -mt-1 inline-flex items-center justify-center rounded-xl p-2.5 text-white shadow-xl ring-1 ring-gray-900/5">
              <span className="sr-only">Change theme of the site</span>
              <div className="mt-2">
                <button type="button" onClick={changeBackground}>
                  <PaintBucketIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="m-2.5 -mt-1 inline-flex items-center justify-center rounded-xl p-2.5 text-white shadow-xl ring-1 ring-gray-900/5"
              onClick={() => setmobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setmobileMenuOpen}
        >
          <div className="fixed inset-0 z-10"></div>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex flex-center -ml-2 -mt-0.5">
                <Image
                  src={bulb}
                  alt="IdeaBin logo"
                  width={35}
                  height={35}
                  className="object-contain "
                />
                <p className="flex -mt-1 px-2 pt-2 text-white text-2xl font-bold font-inter">
                  IdeaBin
                </p>
              </Link>
              <button
                type="button"
                className="-mt-3 p-2.5 text white inline-flex items-center justify-center rounded-xl text-white shadow-xl ring-1 ring-gray-900/5"
                onClick={() => setmobileMenuOpen(false)}
              >
                <span className="sr-only">Close Menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-white hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-2xl hover:bg-opacity-5"
                  >
                    Homepage
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-white hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-2xl hover:bg-opacity-5"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-white hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-2xl hover:bg-opacity-5"
                  >
                    About
                  </Link>

                  <div className="py-6">
                    <AuthLinks />
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </div>
  );
};

export default Nav;
