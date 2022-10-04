import React from "react";
import _ from 'lodash'
import Sidebar from "./components/Sidebar";
import { Outlet, useLocation } from 'react-router-dom';
import InsideHeader from "./components/Header/InsideHeader";
const MerchantLayout = () => {
  return (
    <div className="merchant-layout">
      <Sidebar />
      <div className="merchant-content">
        {/* <InsideHeader /> */}
        <Outlet />
      </div>
    </div>
  )
}

export default MerchantLayout;