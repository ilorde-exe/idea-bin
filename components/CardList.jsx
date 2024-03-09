import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const s = {
  glassmorphism:
    "py-10 px-10 rounded-2xl shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-none lg:backdrop-blur-sm  bg-opacity-20 ",
  title: "mb-6 text-3xl font-extrabold text-gray-900 ",
};

const CardList = () => {
  return (
    <div className={s.glassmorphism}>
      <h1 className={s.title}>Recent Posts</h1>
      <div className="py-6 flex flex-col gap-6">
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
