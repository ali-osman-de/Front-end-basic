import React from "react";

function SearchBar() {
  return (
    <>
      <input
        className="ms-auto text-center fw-light rounded-pill border-0"
        style={{
            fontSize: "15px",
            height: "28px",
            width: "12rem",
            boxShadow:"none"
        }}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </>
  );
}

export default SearchBar;
