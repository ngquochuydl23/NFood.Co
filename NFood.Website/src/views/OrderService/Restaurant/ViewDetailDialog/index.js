import React, { useState } from 'react'
import DialogContainer from '@components/Dialog'
import './view-detail-dialog.scss'
import { Icon } from '@components/Icon';
import { IcClose } from '@assets/icons';
import RestaurantMap from './RestaurantMap';

const ViewDetailDialog = ({
  isOpen,
  onClose,
  detail,
}) => {

  const { cuisines, restaurantName, rating } = detail;
  const handleClose = () => {
    onClose();
  };

  return (
    <DialogContainer
      onClose={handleClose}
      isOpen={isOpen}
      isPadding={false}>
      <div className='view-detail-dialog'>
        <RestaurantMap 
        lat={40}
        lng={-100}/>
        <div className='res-info-contain'>
          <h1 className='res-name'>{restaurantName}</h1>
          <p className="cuisines">{cuisines.join(" · ")}</p>
        </div>
        <div
          className='close-button'
          onClick={() => handleClose()}>
          <Icon icon={IcClose} size={15} />
        </div>
      </div>
    </DialogContainer>
  )
}

export default ViewDetailDialog