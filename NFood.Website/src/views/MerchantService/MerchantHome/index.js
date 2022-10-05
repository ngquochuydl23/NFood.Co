import React from "react";
import { Link, Navigate, Outlet } from 'react-router-dom';

const MerchantHome = () => {
  return (
    <div>
      <Link to="./login">Login</Link>
      <Link to="./register">Become a partner</Link>
    </div>
  )
}

export default MerchantHome;