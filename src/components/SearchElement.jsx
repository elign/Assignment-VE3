import React from "react";

export default function Home({ heading, imageUrl, content }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 px-8">
        <div className="md:w-2/12">
          <img src={imageUrl} alt="" />
        </div>
        <div className="flex flex-col md:w-10/12 justify-center">
          <h2 className="text-[#0c4f86] font-normal text-lg">{heading}</h2>
          <p className="text-gray-400">{content}</p>
        </div>
      </div>
    </>
  );
}
