import React, { useState } from 'react'
import DialogContainer from '@components/Dialog'
import { Icon } from '@components/Icon';
import { IcAddressDetail, IcClose } from '@assets/icons';
import RestaurantMap from './RestaurantMap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _ from 'lodash';
import Stack from '@mui/material/Stack';
import './view-detail-dialog.scss'

const ViewDetailDialog = ({
  isOpen,
  onClose,
  detail,
}) => {

  const { cuisines, restaurantName, rating, schedule } = detail;
  const handleClose = () => {
    onClose();
  };

  const ScheduleItem = ({ daysOfWeek, start, end }) => {
    return (
      <div className='shedule-item'>
        <h3 className='days-of-week'>{daysOfWeek}</h3>
        <p className='period-item'>4:00 - 22:00</p>
      </div>
    )
  }

  const InFoItem = ({ text, leftIcon, children }) => {
    const disable = children === undefined
    return (
      <div>
        <Accordion
          classes='accordion'
          disabled={disable}>
          <AccordionSummary
            expandIcon={!disable && (<ExpandMoreIcon />)}
            aria-controls="panel1a-content"
            id="panel1a-header" >
            <div className='info-item'>
              <Icon icon={leftIcon} size={35} />
              <h4 className='title'>{text}</h4>
            </div>
          </AccordionSummary>
          {!disable && (
            <AccordionDetails>
              {children}
            </AccordionDetails>
          )}
        </Accordion>
      </div>
    )
  }

  return (
    <DialogContainer
      onClose={handleClose}
      isOpen={isOpen}
      isPadding={false}>
      <div className='view-detail-dialog'>
        <RestaurantMap
          lat={40}
          lng={-100} />
        <div className='res-info-contain'>
          <h1 className='res-name'>{restaurantName}</h1>
          <p className="cuisines">{cuisines.join(" · ")}</p>
          <div className='line' />
          <InFoItem
            leftIcon={IcAddressDetail}
            text="770 N Lasalle Dr, Chicago, IL 60654" />
          <div className='line' />
          <InFoItem
            leftIcon={IcAddressDetail}
            text="Open until 10:00 PM">
            <Stack spacing={2} mt={0}>
              {_.map(schedule, (item, idx) => (
                <ScheduleItem {...item} />
              ))}
            </Stack>

          </InFoItem>
          <div className='line' />
          <InFoItem
            leftIcon={IcAddressDetail}
            text={rating} />
          
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