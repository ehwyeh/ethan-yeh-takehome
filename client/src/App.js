import React, { useState, useEffect } from "react";
import HouseListings from "./components/HouseListings.js";
import axios from "axios";

function App() {
  const [allListings, setallListings] = useState([]);
  const [filteredListings, setfilteredListings] = useState(allListings);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allListings.filter((listing) => {
      return listing.ADDRESS.search(value) != -1;
    });
    setfilteredListings(result);
  };

  useEffect(() => {
    axios("/api")
      .then((res) => {
        console.log(res.data);
        setallListings(res.data);
        setfilteredListings(res.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <label>Find your new home today!:</label>
        <input type="text" onChange={(event) => handleSearch(event)} />
      </div>
      <div>
        <HouseListings filteredListings={filteredListings} />
      </div>
    </div>
  );
}

export default App;
