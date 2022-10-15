import React, { useState } from "react";
import PageContainer from "@components/PageContainer";
import DetailFoodDialog from "../Restaurant/DetailFoodDialog";
import RestaurantHeader from "./components/RestaurantHeader";
import MenuHeader from "./components/MenuHeader";
import Stack from '@mui/material/Stack';
import CategoryItem from "./components/CategoryItem";
import _ from 'lodash';
import './restaurant.scss';


const foods = new Array(4).fill('').map((it, i) => ({
  name: 'The Deluxe Large Sharer',
  ingredients: '2 Classic chicken sandwiches, 2 regular fries & 8 hot wings',
  cost: '$10',
  image: "https://rs-menus-api.roocdn.com/images/5be29606-2d3a-44d2-86a1-06bf6505d070/image.jpeg?width=543&height=305&auto=webp&format=jpg&fit=crop"
}));

const categories = new Array(10).fill('').map((it, i) => ({
  title: 'Noodles',
  subtitle: "All of our meats are marinated, hung and fan-dried for at least 24 hours before roasting in a traditional Cantonese bullet oven. Each lunchbox is served with pak choi, steamed jasmine rice, soy and rock sugar gravy and a spicy chilli vinegar sauce.",
  foods: foods
}));

const restaurantJson = {
  restaurantName: "Popeyes Louisiana Kitchen",
  restautantImage: "https://rs-menus-api.roocdn.com/images/e15ff554-f996-47d4-b3ab-cff14db84b5f/image.jpeg?width=533&height=300&auto=webp&format=jpg&fit=crop",
  cuisines: ["Chicken", "Fried Chicken", "Halal"],
  rating: "4.6 Excellent(500+)",
  categories: categories,
  detail: {
    schedule: [
      { daysOfWeek: 'Monday -> Saturday', start: "2010-12-31T23:07:00.000Z", end: "2010-12-31T22:00:00.000Z"},
      { daysOfWeek: 'Sunday', start: "2010-12-31T07:00:00.000Z", end: "2010-12-31T17:00:00.000Z"}
    ]
  }
}

const Restaurant = () => {
  const [open, setOpen] = useState(false);
  const [restaurant, setRestaurant] = useState(restaurantJson);

  return (
    <React.Fragment>
      <RestaurantHeader
        {...restaurant}
        estimatedTime="40 - 65 min"
      />
      <MenuHeader
        categories={restaurant.categories} />
      <PageContainer>
        <Stack spacing={2} mt={2}>
          {_.map(restaurant.categories, (item, idx) => (
            <CategoryItem
              {...item}
              onFoodItemClick={() => {
                setOpen(true);
              }}
            />
          ))}
        </Stack>
        <DetailFoodDialog
          isOpen={open}
          onClose={() => {
            setOpen(false)
          }}
          detailFood={{
            foodName: 'BBQ Combo for 1',
            foodInfo: 'Breaded chicken fillet burger coated in our BBQ sauce, accompanied by 2 BBQ coated spicy breaded chicken wings, served with regular fries, side and drink.',
            foodImage: `https://rs-menus-api.roocdn.com/images/e8ecf635-af01-4b20-bf77-148dd9d1e06f/image.jpeg?width=543&height=305&auto=webp&format=jpg&fit=crop`
          }}
          onAddedToCard={() => {

          }} />
      </PageContainer>
    </React.Fragment>
  )
}

export default Restaurant