import React, { useState } from "react";
import GigCard from "../../components/Gigcard";
import { gigs } from "../../data";
import "./Gigs.css"; // Import CSS styles for Gigs component

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const applyFilters = () => {
    // Implement logic to fetch filtered data based on minValue and maxValue
    console.log("Apply clicked with minValue:", minValue, "and maxValue:", maxValue);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">LuminaLance Graphics & Design</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with LuminaLance's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input
              type="number"
              placeholder="min"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
            />
            <input
              type="number"
              placeholder="max"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
            />
            <button onClick={applyFilters}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setOpen(!open)}
              className={open ? "open" : ""}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <>
                    <span onClick={() => reSort("createdAt")}>Newest</span>
                    <span onClick={() => reSort("popular")}>Popular</span>
                  </>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig._id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;




/*
import React, { useState } from "react";
import GigCard from "../../components/Gigcard";


import { gigs } from "../../data";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    // Implement logic to fetch data with new filters
    console.log("Apply clicked");
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Liverr Graphics & Design</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input
              type="number"
              placeholder="min"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
            />
            <input
              type="number"
              placeholder="max"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
            />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setOpen(!open)}
              className={open ? "open" : ""}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <>
                    <span onClick={() => reSort("createdAt")}>Newest</span>
                    <span onClick={() => reSort("popular")}>Popular</span>
                  </>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig._id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
//*/
