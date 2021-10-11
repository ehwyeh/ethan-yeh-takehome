import React, { useState, useEffect } from "react";

export default function HouseListings(props) {
  const formatPrices = (priceNum) => {
    return String(priceNum).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return props.filteredListings.map((value, index) => {
    return (
      <div class="card" key={value.id}>
        <div class="card-body">
          <h5 class="card-title">{value.ADDRESS}</h5>
          <p>Price: {`$${formatPrices(value.PRICE)}`}</p>
          <div>
            <b>{value["PROPERTY TYPE"]} </b>
            <span>{`${value.BEDS} Beds ${value.BATHS} Baths`}</span>
          </div>
        </div>
      </div>
    );
  });
}
