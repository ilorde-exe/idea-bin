"use client";
import React from "react";
import "@app/globals.css";
import { PlusCircle } from "lucide-react";
import { ImageUp, FileVideo2Icon, ExternalLink } from "lucide-react";
import { useState } from "react";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-0">
        <input
          id="title"
          type="text"
          placeholder="Title"
          className="-mt-4 w-full text-3xl border-0 text-gray-950 font-semibold"
          height={20}
        />
      </div>

      <div className="px-4 flex gap-2">
        <div onClick={() => setOpen(!open)} className="pr-4 ring-0">
          <PlusCircle />
        </div>
        {open && (
          <div className="flex gap-2">
            <button type="button">
              <ImageUp />
            </button>
            <button type="button">
              <ExternalLink />
            </button>
            <button type="button">
              <FileVideo2Icon />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Let your ideas flow!"
        className="mb-32 text-black h-96 w-full font-medium text-[20px]"
      />
    </div>
  );
};

export default Write;
