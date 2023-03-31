import React from "react";
// Importing React and defining a functional component called "Button" that accepts a prop called "buttonText".
export default function Button({ buttonText }) {
  return (
    <>
      <button className="flex mb-30 w-full my-10 justify-between bg-[#0c4f86] text-white px-10 text-2xl py-4 rounded-full items-center gap-3">
        <span>{buttonText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </>
  );
}
