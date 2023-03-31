import React, { useState } from "react";
import Tab from "../components/Tab";
import TabContent from "../components/TabContent";

// Define the Accordion component that takes a `data` prop
export default function Accordion({ data }) {
  // Initialize state with a `tab` value of 1 and a `setTab` function to update it
  const [tab, setTab] = useState(1);

  // Render the component with the following JSX code
  return (
    <>
      <div>
        {/* Render a row of Tab components, one for each item in the `data` array */}
        <div className="mt-10 flex flex-wrap">
          {data.map((val, idx) => (
            <Tab
              tabNumber={idx + 1}
              key={idx}
              currentTab={tab}
              setTab={setTab}
            />
          ))}
        </div>
        {/* Render the content for each tab based on the index and `active` state */}
        {data.map((val, idx) => (
          <TabContent
            prop={val}
            key={idx}
            active={idx === tab - 1 ? true : false}
          />
        ))}
      </div>
    </>
  );
}
