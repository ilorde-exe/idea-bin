"use client";
import React from "react";
import { PlusCircle } from "lucide-react";
import { ImageUp, FileVideo2Icon, ExternalLink } from "lucide-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        className=""
        width={16}
        height={16}
      />
      <div className="px-4 flex gap-2">
        <button type="button" onClick={() => setOpen(!open)}>
          <PlusCircle />
        </button>
        {open && (
          <div>
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
        className="text-black h-96 w-full"
      />
    </div>
  );
};

export default Write;
