import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "@components/PageContainer";
import RestaurantsInRow from "./components/RestaurantsInRow";
import Grid from '@mui/material/Unstable_Grid2';
import _ from 'lodash'
import RestaurantItem from "./components/RestaurantItem";
import CategoriesInRow from "./components/CategoriesInRow";

const categories = new Array(10).fill('').map((it, i) => ({
  title: 'Breakfast',
  image: 'https://co-restaurants.roocdn.com/images/9c01ebd537a31c2df50d6b591f5430987e933a39/shortcut/acai.png?width=167&height=88&fit=crop&bg-color=00ccbc&auto=webp&format=png'
}))

const restaurantItem = new Array(10).fill('').map((it, i) => ({
  restaurantName: 'Wahaca - Mexican Street Food - Waterloo Road',
  restaurantImage: 'https://rs-menus-api.roocdn.com/images/872f443a-c565-40d4-b6f0-89a9cf2bf39b/image.jpeg?width=533&height=300&auto=webp&format=jpg&fit=crop',
  rating: '4.6 Excellent(500+)'
}));

const restaurantsData = {
  categories: categories,
  mostFavouritePlaces: {
    title: 'Most favourited places',
    subtitle: 'Added by others to their favourites ❤️',
    restaurants: restaurantItem
  },
  topRatedDishesNearYou:
  {
    title: 'Top-rated dishes near you',
    restaurants: restaurantItem
  },
  featured: {
    title: 'Featured',
    subtitle: 'Paid placements from our partners',
    restaurants: restaurantItem
  },
  othersRestaurant: [...restaurantItem, ...restaurantItem, ...restaurantItem]
}

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  return (
    <PageContainer>
      <CategoriesInRow
        categories={restaurants.categories} />

      <RestaurantsInRow
        {...(restaurants.mostFavouritePlaces)} />

      <RestaurantsInRow
        {...(restaurants.topRatedDishesNearYou)} />

      <RestaurantsInRow
        {...(restaurants.featured)} />

      <Grid
        container
        spacing={1}
        mt={1}>
        {_.map(restaurants.othersRestaurant, (item, idx) => {
          return (
            <Grid xs={3}>
              <RestaurantItem {...item} />
            </Grid>
          )
        })}
      </Grid>
    </PageContainer>
  )
}

export default Restaurants;