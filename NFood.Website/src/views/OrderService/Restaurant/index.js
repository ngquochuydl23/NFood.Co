import React, { useState } from "react";
import PageContainer from "@components/PageContainer";
import DetailFoodDialog from "../Restaurant/DetailFoodDialog";
import './restaurant.scss'
import RestaurantHeader from "./components/RestaurantHeader";
import MenuHeader from "./components/MenuHeader";
import { Grid } from "@mui/material";

const Restaurant = () => {
  const [open, setOpen] = useState(true);
  return (
    <PageContainer>
      <RestaurantHeader
        restaurantName="Popeyes Louisiana Kitchen"
        restautantImage=""
        cuisines="Chicken·Fried Chicken·Halal"
        estimatedTime="40 - 65 min"
      />
      <MenuHeader />
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