import classNames from 'classnames';
import React from 'react'
import { Link } from "react-router-dom";
import './restaurant-item.scss'

const RestaurantItem = ({
  restaurantName,
  restaurantImage,
  rating,
  index,
  itemClassName
}) => {
  return (
    <Link
      to="../restaurant/1"
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}>
      <div className={classNames('restaurant-item', itemClassName)}>
        <img
          className='restaurant-image'
          alt='restaurant'
          src={restaurantImage} />
        <div className='restaurant-info'>
          <h3 className="restaurant-name">{restaurantName}</h3>
          <p className="others-info">
            <span className="rating">{rating} </span>
            2.70 miles away · £4.49
          </p>
        </div>
      </div>
    </Link>

  );
}

export default RestaurantItem;