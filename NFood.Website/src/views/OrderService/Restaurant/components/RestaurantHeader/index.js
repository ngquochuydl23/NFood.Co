import React from "react";

const RestaurantHeader = ({
  restaurantName,
  restautantImage,
  estimatedTime,
  cuisines,
  rating,
  detail
}) => {
  return (
    <div>
      <h1>{restaurantName}</h1>
      <p>{estimatedTime}</p>
    </div>
  )
}

export default RestaurantHeader