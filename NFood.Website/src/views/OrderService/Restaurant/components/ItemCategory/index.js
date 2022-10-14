import React, { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import ItemFood from "../ItemFood";
import './item-category.scss'
import { ReponsiveQueryBetween } from "src/utils/ReponsiveUtil";
import _ from 'lodash'

const ItemCategory = ({
  title,
  subtitle,
  foods,
  onItemFoodClick
}) => {
  const betweenXSandSM = ReponsiveQueryBetween('xs', 'sm')
  const betweenSMandMD = ReponsiveQueryBetween('sm', 'md')

  const xsItem = () => {
    if (betweenXSandSM)
      return 12;
    if (betweenSMandMD)
      return 6;
    return 4;
  }

  return (
    <div className="item-category">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <Grid
        container
        spacing={2}
        mt={2}>
        {_.map(foods, (food, idx) => {
          return (
            <Grid xs={xsItem()}>
              <ItemFood
                {...food}
                onItemFoodClick={onItemFoodClick} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ItemCategory