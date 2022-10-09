import React, { useState } from "react";
import PageContainer from "@components/PageContainer";
import DetailFoodDialog from "../Restaurant/DetailFoodDialog";
import RestaurantHeader from "./components/RestaurantHeader";
import MenuHeader from "./components/MenuHeader";
import Stack from '@mui/material/Stack';
import './restaurant.scss'
import ItemCategory from "./components/ItemCategory";


const restaurantJson = {
  restaurantName: "Popeyes Louisiana Kitchen",
  restautantImage: "https://rs-menus-api.roocdn.com/images/e15ff554-f996-47d4-b3ab-cff14db84b5f/image.jpeg?width=533&height=300&auto=webp&format=jpg&fit=crop",
  cuisines: ["Chicken", "Fried Chicken", "Halal"],
  rating: "4.6 Excellent(500+)"
}

const Restaurant = () => {
  const [open, setOpen] = useState(true);
  const [restaurant, setRestaurant] = useState(restaurantJson);

  return (
    <PageContainer>
      <RestaurantHeader
        {...restaurant}
        estimatedTime="40 - 65 min"
      />
      <MenuHeader />
      <Stack spacing={2} mt={2}>
        <ItemCategory
          onItemFoodClick={() => {
            console.log("Alo")
            setOpen(true);
          }}
          title="Noodles"
          subtitle="All of our meats are marinated, hung and fan-dried for at least 24 hours before roasting in a traditional Cantonese bullet oven. Each lunchbox is served with pak choi, steamed jasmine rice, soy and rock sugar gravy and a spicy chilli vinegar sauce." />

        <ItemCategory
          onItemFoodClick={() => {
            console.log("Alo")
            setOpen(true);
          }}
          title="Noodles"
          subtitle="All of our meats are marinated, hung and fan-dried for at least 24 hours before roasting in a traditional Cantonese bullet oven. Each lunchbox is served with pak choi, steamed jasmine rice, soy and rock sugar gravy and a spicy chilli vinegar sauce." />

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
  )
}

export default Restaurant