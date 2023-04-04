import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import moduleData from "../moduleData";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState("");
  const [initialIdx, setInitialIdx] = useState(0);
  const [finalIdx, setFinalIdx] = useState(3);

  useEffect(() => {
    updateData();
  }, [searchQuery]);

  const updateData = () => {
    const tempArr = [];
    for (let i = 0; i < moduleData.length; i++) {
      for (let j = 0; j < moduleData[i].data.length; j++) {
        if (
          moduleData[i].data[j].heading
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        ) {
          tempArr.push(moduleData[i].data[j]);
        }
      }
    }
    setData(tempArr);
    setInitialIdx(0);
    setFinalIdx(3);
    console.log(data);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#0c4f86] px-10 md:px-20 pt-10 pb-20">
        <div className="flex justify-end">
          {/* Link back to homepage */}
          <Link to="/" state={true}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#B0B0B0"
              className="w-8 h-8"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </Link>
        </div>

        {/* Search input */}
        <div className="flex flex-col">
          <span className="text-md text-gray-300">Type here to search</span>
          <input
            type="text"
            name="searchQuery"
            placeholder="Ut hendrerit"
            value={searchQuery}
            className="border-b-2 text-2xl pb-4 my-4 text-white bg-transparent outline-none"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              updateData();
            }}
          />
          <span className="text-gray-400 text-xl">
            Showing {data && data.length} results...
          </span>
        </div>

        {/* Search results */}

        <div className="flex flex-col gap-10 bg-white py-10 mt-6">
          <SearchResult
            data={data}
            initialIdx={initialIdx}
            finalIdx={finalIdx}
          />
          {/* Icons */}
          <div className="flex justify-end pr-10">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 cursor-pointer"
                onClick={() => {
                  setInitialIdx((prevVal) => (prevVal < 3 ? 0 : prevVal - 3));
                  setFinalIdx((prevVal) => (prevVal <= 3 ? 3 : prevVal - 3));
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                  stroke={initialIdx > 0 ? "#124A84" : "#949494"}
                  stroke-width="2"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-10 h-10 cursor-pointer"
                onClick={() => {
                  setInitialIdx((prevVal) =>
                    prevVal >= data.length - 3 ? prevVal : prevVal + 3
                  );
                  setFinalIdx((prevVal) =>
                    prevVal >= data.length - 1 ? data.length : prevVal + 3
                  );
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clip-rule="evenodd"
                  stroke={finalIdx === data.length ? "#949494" : "#124A84"}
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
