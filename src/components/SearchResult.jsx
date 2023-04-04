import React from "react";
import SearchElement from "./SearchElement";
export default function SearchResult({ data, initialIdx, finalIdx }) {
  return (
    <>
      {data &&
        data
          .map((val, idx) => (
            <div>
              {/* Display search results */}
              <SearchElement
                imageUrl={val.image}
                heading={val.heading}
                content={val.content}
                key={idx}
              />
            </div>
          ))
          .slice(initialIdx, finalIdx)}
    </>
  );
}
