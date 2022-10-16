import React, { createRef } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ScrollContainer from "react-indiana-drag-scroll";
import './restaurants-in-row.scss'
import _ from 'lodash';
import Stack from '@mui/material/Stack';
import RestaurantItem from '../RestaurantItem';

const RestaurantsInRow = ({
  title,
  subtitle,
  restaurants
}) => {
  const scrollRef = createRef();
  const enableKeyboardCursorToScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  };
  return (
    <div className='restaurants-in-row'>
      <h3 className='title'>{title}</h3>
      <p className='subtitle'>{subtitle}</p>
      <div className='items-contain'>
        <ScrollContainer className="container">
          <section
            className="section"
            onFocus={enableKeyboardCursorToScroll}
            ref={scrollRef}>
            <Stack direction="row" spacing={2}>
              {_.map(restaurants, (item, index) => (
                <RestaurantItem
                  itemClassName='item'
                  {...item} />
              ))}
            </Stack>
          </section>
        </ScrollContainer>
      </div>
    </div>
  )
}

export default RestaurantsInRow