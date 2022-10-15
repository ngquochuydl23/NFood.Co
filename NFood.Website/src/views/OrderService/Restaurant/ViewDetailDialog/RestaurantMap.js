import React, { useState } from 'react'
import Map from 'react-map-gl'
import './view-detail-dialog.scss'
import MapboxConfig from '@components/MapboxConfig';

const RestaurantMap = (lat, lng) => {
  return (
    <Map
      className='map-layout'
      {...MapboxConfig}
      initialViewState={{
        longitude: lat,
        latitude: lng,
        zoom: 8
      }}
    />
  )
}

export default RestaurantMap;