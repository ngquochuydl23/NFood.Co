import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import OurService from './components/OurService';
import _ from 'lodash';
import {
  ImageOurServiceRiding,
  ImageOurServiceOrderFood,
  ImageOurServiceMerchant
} from '@assets/images';
import LandingCover from './components/LandingCover';


const OurServices = [
  {
    title: 'Order Food',
    subtitle: 'Looking for a workplace food solution to reward your team, boost morale or treat your clients? Our corporate team can help.',
    path: 'order-food',
    image: ImageOurServiceOrderFood
  },
  {
    title: 'Partner with us',
    subtitle: 'Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.',
    path: 'merchant',
    image: ImageOurServiceMerchant
  },
  {
    title: 'Ride with us',
    subtitle: 'The freedom to fit work around your life. Plus great fees, perks and discounts.',
    path: 'riding',
    image: ImageOurServiceRiding
  }
]

const LandingPage = () => {


  return (
    <div>
      <LandingCover
        onSubmitAddress={() => { }} />
      <Container fixed>
        <Grid container spacing={2}>
          {_.map(OurServices, (item, idx) =>
            <OurService  {...item} />
          )}
        </Grid>
      </Container>
    </div>

  )
}

export default LandingPage

