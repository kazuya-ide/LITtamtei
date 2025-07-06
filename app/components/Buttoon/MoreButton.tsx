"use client";
import React from "react";
import Link from "next/link";

const MoreButton = () => {
  return (
    <Link href="/projects" passHref legacyBehavior>
      <a className="no-underline">
        <button
          className="
            bg-black text-white border border-white py-2 px-5 text-base cursor-pointer
            flex items-center justify-center gap-2
            hover:bg-gray-800 transition
            rounded
          "
        >
          {/* 矢印（Arrow）をCSSで再現 */}
          <span
            className="
              inline-block
              border-solid border-white
              border-0 border-b-2 border-r-2
              p-1
              rotate-[-45deg]
              mr-1
              w-2 h-2
            "
            style={{
              borderWidth: "0 2px 2px 0",
              width: "10px",
              height: "10px",
            }}
          ></span>
          MORE
        </button>
      </a>
    </Link>
  );
};

export default MoreButton;
