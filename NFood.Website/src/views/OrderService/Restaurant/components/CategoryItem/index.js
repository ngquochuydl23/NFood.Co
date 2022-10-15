import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import FoodItem from "../FoodItem";
import { ReponsiveQueryBetween } from "src/utils/ReponsiveUtil";
import _ from 'lodash'
import './category-item.scss'


const CategoryItem = ({
  title,
  subtitle,
  foods,
  onFoodItemClick
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
    <div className="category-item">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <Grid
        container
        spacing={2}
        mt={2}>
        {_.map(foods, (food, idx) => {
          return (
            <Grid xs={xsItem()}>
              <FoodItem
                {...food}
                onFoodItemClick={onFoodItemClick} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default CategoryItem