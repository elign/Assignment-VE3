import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moduleData from "../moduleData"; // import moduleData array
import Button from "../components/Button";
import { useLocation } from "react-router-dom"; // importing useLocation hook from react-router-dom

export default function Home() {
  const location = useLocation(); // getting location from useLocation hook
  const propsData = location.state; // getting data from location state
  const [show, setShow] = useState(propsData || false); // define state variable show and setShow function
  // create an array of Link elements based on moduleData
  const moduleList = moduleData.map((val, idx) => {
    return (
      <Link to="/module" key={idx} state={val}>
        <div className="mx-2 py-6 border-b-2 w-full">
          <span className="text-[#0c4f86] text-2xl">{val.name}</span>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div
        className="h-screen"
        style={{
          backgroundImage:
            'url("https://firebasestorage.googleapis.com/v0/b/todo-list-67f2c.appspot.com/o/other%2Fbg.png?alt=media&token=ccb42fec-ae61-4549-993a-c9e0b2fb5cc4")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 ">
            <img src="https://firebasestorage.googleapis.com/v0/b/todo-list-67f2c.appspot.com/o/other%2Fcover%20front.png?alt=media&token=a849a821-c7f2-4d7f-8003-d3a9393ca6a4" />
          </div>
          <div className="w-full md:w-1/2 pr-0 md:pr-16">
            {/* show welcome message only if show state variable is true */}
            {!show && (
              <div role="contentinfo" className="md:mb-10 mx-5 md:mx-20">
                <h1 className="text-[#0c4f86] pt-10 font-bold text-4xl lg:text-6xl font-black mb-8">
                  Fusce sem magna pharetra cursus
                </h1>
                <p className="text-gray-800 text-[#0c4f86] font-normal mb-8 leading-8">
                  morbi tincidunt nisi id vulputate consequat. Morbi arculibero,
                  pellentesque eu bibendum non, eleifend ut nisi.Phasellus
                  mattis nibh ullamcorper euismod sodales. Donec metus eros,
                  euismod dapibus fermentum non, gravida id ex. Duis vitae dui
                  sit amet lectus ultrices lacinia eget in tellus. Vivamus
                  lacinia lectus id justo fermentum tincidunt. Duis consectetur
                  porttitor tincidunt. Sed dapibus nulla vitae risus elementum
                  dictum.
                </p>
                {/* set show state variable to false on button click */}
                <div onClick={() => setShow(true)}>
                  <Button buttonText="Enter" />
                </div>
              </div>
            )}
            {/* show module selection screen only if show state variable is false */}
            {show && (
              <div>
                {/* close module selection screen on button click */}
                <div className="flex justify-end pr-10 pt-6">
                  <svg
                    onClick={() => setShow(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#B0B0B0"
                    className="w-8 h-8 cursor-pointer"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </div>
                <div className="md:mb-10 mx-5 md:mx-20">
                  <div>{moduleList}</div>
                  <Button buttonText="Select Module" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
