"use client";
import { PaintBucketIcon } from "lucide-react";
import React from "react";
import { useState } from "react";

const ThemeToggle = () => {
  const [count, setcount] = useState(0);
  function changeBackground() {
    if (count == 5) setcount(0);
    else setcount(count + 1);
    console.log(count);
  }
  return (
    <div className="mt-2">
      <button type="button" onClick={changeBackground}>
        <PaintBucketIcon />
      </button>
    </div>
  );
};

export default ThemeToggle;
