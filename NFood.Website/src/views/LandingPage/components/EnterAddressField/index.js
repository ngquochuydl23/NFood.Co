import { FilledButton } from '@components/Button'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './enter-address-field.scss'

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  }
]

const EnterAddressField = ({
  placeholder,
  onSubmitAddress
}) => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('./order-food/restaurants')
  }

  return (
    <div className='enter-address-field'>
      <input
          placeholder={placeholder}
        // onChange={event => {
        //   if (onChange)
        //     onChange(event);
        // }}
        />

      <FilledButton
        className="find-food-button"
        text="Find food"
        onClick={onSubmit} />
    </div >
  )
}

export default EnterAddressField