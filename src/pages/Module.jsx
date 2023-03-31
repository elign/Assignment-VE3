import React from "react";
import Accordion from "../components/Accordion"; // importing Accordion component
import { useLocation } from "react-router-dom"; // importing useLocation hook from react-router-dom
import { Link } from "react-router-dom";
export default function Module() {
  // declaring Module component with prop parameter
  const location = useLocation(); // getting location from useLocation hook
  const propsData = location.state; // getting data from location state

  return (
    <div
      style={{
        // inline style object for the background image
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/todo-list-67f2c.appspot.com/o/other%2Fbg2.png?alt=media&token=72dd0d02-bdcf-48b2-8511-3eaa1832c156")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="flex justify-end pr-10 pt-10">
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

      {propsData && ( // rendering the following block only if propsData is not null or undefined
        <div className="p-5 md:p-20 md:-mt-20">
          <div className="flex justify-between content-center">
            <h1 className="leading-none items-center font-semibold pl-10 text-3xl text-[#0c4f86]">
              {propsData.name} {/* rendering the name from propsData */}
            </h1>
            <Link to="/search">
              {/* Link component to navigate to "/search" */}
              <div className="pr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#0c4f86"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="drop-shadow-2xl">
            {/* rendering Accordion component */}
            <Accordion data={propsData.data} />{" "}
            {/* passing data as prop to Accordion component */}
          </div>
        </div>
      )}
    </div>
  );
}
