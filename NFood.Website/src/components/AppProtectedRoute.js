import React from "react";

import { Navigate, Outlet } from 'react-router-dom';

const MerchantProtectedRoute = () => {
    const isAuthenticated = Boolean(localStorage.getItem('accessToken'))
    return isAuthenticated ? <Outlet /> : <Navigate to="/merchant/login" replace />
}

const OrderFoodProtectedRoute = () => {
    const isAuthenticated = Boolean(localStorage.getItem('accessToken'))
    return isAuthenticated ? <Outlet /> : <Navigate to="/order-food/login" replace />
}

export { MerchantProtectedRoute, OrderFoodProtectedRoute }