import React from "react";

export default function Search({ tabNumber, currentTab, setTab }) {
  return (
    <>
      <div
        onClick={() => setTab(tabNumber)}
        className="flex cursor-pointer justify-center items-center w-full md:w-1/3 h-20 border-white-400 border-2"
        style={{
          backgroundColor: tabNumber === currentTab ? "#fff" : "#0c4f86"
        }}
      >
        <span
          className="font-semibold text-3xl"
          style={{ color: tabNumber === currentTab ? "#0c4f86" : "#fff" }}
        >
          Tab {tabNumber}
        </span>
      </div>
    </>
  );
}
