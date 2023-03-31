import React from "react";

export default function Search({ prop, active }) {
  return (
    <>
      {active === true && (
        <div className="flex flex-wrap md:flex-nowrap p-8 md:p-16 gap-10 bg-white">
          <div className="w-full md:w-1/2">
            <img src={prop.image} alt="" />
          </div>
          <div className="flex flex-col justify-center content-center w-full md:w-1/2">
            <h2 className="text-3xl mb-6">{prop.heading}</h2>
            <p>{prop.content}</p>
          </div>
        </div>
      )}
    </>
  );
}
