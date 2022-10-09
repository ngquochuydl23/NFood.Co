import React, { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import './item-category.scss'
import ItemFood from "../ItemFood";

const ItemCategory = ({
  title,
  subtitle,
  foods,
  onItemFoodClick
}) => {
  return (
    <div className="item-category">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <Grid
        container
        spacing={2}
        mt={2}>
        <Grid xs={4}>
          <ItemFood onItemFoodClick={onItemFoodClick} />
        </Grid>
        <Grid xs={4}>
          <ItemFood onItemFoodClick={onItemFoodClick} />
        </Grid>
        <Grid xs={4}>
          <ItemFood onItemFoodClick={onItemFoodClick} />
        </Grid>
        <Grid xs={4}>
          <ItemFood onItemFoodClick={onItemFoodClick} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ItemCategory