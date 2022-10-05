import React from 'react'
import Container from '@mui/material/Container';
import EnterAddressField from '../EnterAddressField';
import './landing-cover.scss'

const LandingCover = ({ onSubmitAddress }) => {
  return (
    <div className='landing-cover'>
      <div className='dark-view'>
        <Container fixed>
          <div className='landing-contain'>
            <h1 className='title'>
              Restaurant food, takeaway and groceries. Delivered.
            </h1>
            <EnterAddressField
              placeholder="Please enter your address"
              onSubmitAddress={onSubmitAddress}
            />
            <p className='subtitle'>
              Log in for your recent addresses.
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default LandingCover