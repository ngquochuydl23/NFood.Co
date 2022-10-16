import React, { createRef } from 'react'
import './categories-in-row.scss'
import _ from 'lodash';
import ScrollContainer from "react-indiana-drag-scroll";
import Stack from '@mui/material/Stack';

const CategoriesInRow = ({ categories }) => {

  const scrollRef = createRef();
  const enableKeyboardCursorToScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  };


  const CategoryItem = ({ title, image }) => {
    return (
      <div className='category'>
        <img
          className='image-bg'
          src={image}
          alt='category' />
        <div className='on-image-category'>
          <div>
            <h4 className='title'>{title}</h4>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='categories-in-row'>
      <ScrollContainer className="container">
        <section
          className="section"
          onFocus={enableKeyboardCursorToScroll}
          ref={scrollRef}>
          <Stack direction="row" spacing={2}>
            {_.map(categories, (item, index) => (
              <CategoryItem {...item} />
            ))}
          </Stack>
        </section>
      </ScrollContainer>
    </div>
  )
}

export default CategoriesInRow;