import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout