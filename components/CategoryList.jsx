import React from "react";
import Link from "next/link";
import Image from "next/image";
import styleImg from "@public/style.png";
const s = {
  glassmorphism:
    "py-10 px-10 rounded-2xl shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-none lg:backdrop-blur-sm  bg-opacity-20 ",
  container: "flex flex-col lg:flex-row flex-wrap gap-1 justify-between",
  title: "mb-6 text-3xl font-extrabold text-gray-900 ",
  category:
    "font-mono p-4 rounded-xl flex basis-1/6  align-center justify-center",
};

const CategoryList = () => {
  return (
    <>
      <h1 className={s.title}>Popular Categories</h1>
      <div className={s.container}>
        <Link href="/blog?cat=coding" className={`${s.category} bg-green-200`}>
          Coding
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${s.category} bg-yellow-200`}
        >
          Fashion
        </Link>
        <Link href="/blog?cat=food" className={`${s.category} bg-cyan-200`}>
          Food
        </Link>
        <Link href="/blog?cat=travel" className={`${s.category} bg-violet-200`}>
          Travel
        </Link>
        <Link href="/blog?cat=culture" className={`${s.category} bg-pink-200`}>
          Culture
        </Link>
      </div>
    </>
  );
};

export default CategoryList;
