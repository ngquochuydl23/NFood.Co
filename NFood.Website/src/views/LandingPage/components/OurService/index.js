import React from 'react'
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { FilledButton } from '@components/Button';
import './our-service.scss'

const OurService = ({ title, subtitle, image, path }) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={4}>
      <div className='our-service-item'>
        <img
          className='image-bg'
          alt='our-service'
          src={image} />

        <div className='on-image-bg'>
          <div>
            <h1 className='title'>{title}</h1>
            <h4 className='subtitle'>{subtitle}</h4>
            <FilledButton
              className='getting-started-button'
              text='Getting Started'
              type="submit"
              onClick={() => navigate(`/${path}`)} />
          </div>
        </div>
      </div>
    </Grid >
  )
}

export default OurService