import React, { useState } from "react";
import './food-item.scss'

const FoodItem = ({
  name,
  ingredients,
  image,
  cost,
  onFoodItemClick
}) => {
  return (
    <div
      className="food-item"
      onClick={() => onFoodItemClick({
        name,
        ingredients,
        image,
        cost
      })}>
      <div className="food-info">
        <div className="name-ingredients">
          <h3 className="food-name">The Deluxe Large Sharer (For 2)</h3>
          <p className="ingredients">2 Classic chicken sandwiches, 2 regular fries & 8 hot wings</p>
        </div>
        <h3 className="cost">$10</h3>
      </div>
      <img
        className="food-image"
        alt="food"
        src="https://rs-menus-api.roocdn.com/images/5be29606-2d3a-44d2-86a1-06bf6505d070/image.jpeg?width=543&height=305&auto=webp&format=jpg&fit=crop" />
    </div>
  )
}

export default FoodItem