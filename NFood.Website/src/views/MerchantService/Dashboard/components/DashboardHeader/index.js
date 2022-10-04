import React from 'react'
import './dashboard-header.scss'

const DashboardHeader = ({
  profile,
  notification
}) => {
  return (
    <div className='dashboard-header'>
      <div className='say-hi'>
        <p>Good Morning,</p>
        <h3>{profile.fullName}</h3>
      </div>
      <p className='message'>{notification}</p>
    </div>
  )
}

export default DashboardHeader;