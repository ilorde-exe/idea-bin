"use client";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between">
      <button
        className="w-32 bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-gray-950 hover:bg-gray-500 hover:text-white rounded transition duration-500 ease-in-out "
        onClick={() => {
          console.log("button pressed");
        }}
      >
        Previous
      </button>
      <button
        className="w-32 bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-gray-950 hover:bg-gray-500 hover:text-white rounded transition duration-500 ease-in-out "
        onClick={() => {
          console.log("button pressed");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
