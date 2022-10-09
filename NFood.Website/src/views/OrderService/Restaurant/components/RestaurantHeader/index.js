import React, { useState } from "react";
import { IcArrowRight, IcViewResInfo } from "@assets/icons";
import { Icon } from "@components/Icon";
import './restaurant-header.scss'
import ViewDetailDialog from "../../ViewDetailDialog";

const RestaurantHeader = ({
  restaurantName,
  restautantImage,
  estimatedTime,
  cuisines,
  rating,
  detail
}) => {
  const [openViewDetail, setOpenViewDetail] = useState(false);

  const StartOrderGroup = () => {
    return (
      <div>

      </div>
    )
  }

  const ViewDetailRestaurantButton = () => {
    return (
      <div
        className="view-res-detail"
        onClick={() => setOpenViewDetail(true)}>
        <Icon icon={IcViewResInfo} />
        <div className="child">
          <h3>Info</h3>
          <p>Map, allergens and hygiene rating</p>
        </div>
        <Icon icon={IcArrowRight} size={20} />
      </div>
    )
  }

  return (
    <div className="restaurant-header">
      <img
        className="restaurant-image"
        alt="restaurant"
        src={restautantImage}
      />
      <div className="restaurant-info">
        <h1 className="restaurant-name">{restaurantName}</h1>
        <p className="cuisines">{cuisines.join(" · ")}</p>
        <p className="others-info">
          <span className="rating">{rating} </span>
          2.70 miles away·Opens at 11:00·£4.49 delivery·£10.00 minimum
        </p>
        <ViewDetailRestaurantButton />
      </div>
      <ViewDetailDialog
        isOpen={openViewDetail}
        onClose={() => setOpenViewDetail(false)} />
    </div>
  )
}

export default RestaurantHeader