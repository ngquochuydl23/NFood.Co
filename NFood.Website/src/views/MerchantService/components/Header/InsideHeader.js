import React from 'react'
import './inside-header-style.scss'
import { Outlet, useLocation, matchRoutes } from 'react-router-dom';

const InsideHeader = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className='inside-header'>
      <h2>Dashboard</h2>
    </div>
  )
}

export default InsideHeader;