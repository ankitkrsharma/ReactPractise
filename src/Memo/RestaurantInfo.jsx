import React from "react";

function RestaurantInfo() {
  console.log("RestaurantInfo Rendered");

  return (
    <div>
      <h3>Restaurant Information</h3>

      <p>Name: Spice Garden</p>

      <p>Rating: 4.5</p>

      <p>Delivery Time: 30 mins</p>
    </div>
  );
}

export default React.memo(RestaurantInfo);