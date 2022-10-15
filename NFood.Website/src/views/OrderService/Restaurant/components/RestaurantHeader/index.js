import React, { useState } from "react";
import { IcArrowRight, IcViewResInfo } from "@assets/icons";
import { Icon } from "@components/Icon";
import './restaurant-header.scss'
import ViewDetailDialog from "../../ViewDetailDialog";
import Container from '@mui/material/Container';

const RestaurantHeader = ({
  restaurantName,
  restautantImage,
  estimatedTime,
  cuisines,
  rating,
  detail
}) => {
  const [openViewDetail, setOpenViewDetail] = useState(false);

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
    <Container maxWidth='xl'>
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
          detail={{
            ...detail,
            restaurantName,
            cuisines,
            rating
          }}
          isOpen={openViewDetail}
          onClose={() => setOpenViewDetail(false)} />
      </div>
    </Container>
  )
}

export default RestaurantHeader