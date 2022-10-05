import React from 'react'
import Container from '@mui/material/Container';
import './landing-cover.scss'
import EnterAddressField from '../EnterAddressField';

const LandingCover = ({ onSubmitAddress }) => {
  return (
    <div className='landing-cover'>
      <Container fixed>
        <div className='landing-contain'>
          <h1 className='title'>
            Restaurant food, takeaway and groceries. Delivered.
          </h1>
          <EnterAddressField
            placeholder="Please enter your address"
            onSubmitAddress={onSubmitAddress}
          />
        </div>
      </Container>
    </div>
  )
}

export default LandingCover