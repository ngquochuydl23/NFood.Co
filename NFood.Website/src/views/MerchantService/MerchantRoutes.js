import React, { Suspense } from "react";
import Sidebar from "./components/Sidebar";
import Stack from '@mui/material/Stack';
import { Route, Routes } from 'react-router-dom'
import { MerchantProtectedRoute } from "@components/AppProtectedRoute";
import MerchantLayout from "./MerchantLayout";
import _ from 'lodash';


const Dashboard = React.lazy(() => import("@views/MerchantService/Dashboard"));
const Employees = React.lazy(() => import("@views/MerchantService/Employees"));
const MerchantLogin = React.lazy(() => import("@views/MerchantService/MerchantLogin"));
const Finance = React.lazy(() => import("@views/MerchantService/Finance"));
const Insights = React.lazy(() => import("@views/MerchantService/Insights"));
const Menus = React.lazy(() => import("@views/MerchantService/Menus"));
const Register = React.lazy(() => import("@views/MerchantService/Register"));
const RestaurantInfo = React.lazy(() => import("@views/MerchantService/RestaurantInfo"));
const MerchantHome = React.lazy(() => import("@views/MerchantService/MerchantHome"));

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/employess', name: 'Employess', element: Employees },
  { path: '/finance', name: 'Finance', element: Finance },
  { path: '/insights', name: 'Insights', element: Insights },
  { path: '/menus', name: 'Menus', element: Menus },
  { path: '/restaurant-info', name: 'Restaurant Info', element: RestaurantInfo },
]

export const MerchantRoutes = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route index exact element={<MerchantHome />} />
          <Route path='login' exact element={<MerchantLogin />} />
          <Route path='register' exact element={<Register />} />
          <Route path='/' element={<MerchantLayout />}>
            {_.map(routes, (route, idx) => <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              
              element={<route.element />}
            />)}
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}