import React, { Suspense } from "react";
import _ from 'lodash'
import { orderRoutes } from "./OrderRoutes";
import { Route, Routes } from 'react-router-dom'
import { OrderFoodProtectedRoute } from "@components/AppProtectedRoute";

const OrderLayout = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          {_.map(orderRoutes, (route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={
                    Boolean(route.allowAnonymous ?? false)
                      ? <route.element />
                      : <OrderFoodProtectedRoute>
                        <route.element />
                      </OrderFoodProtectedRoute>
                  }
                />
              )
            )
          })}
        </Routes>
      </Suspense>
    </div>
  )
}

export default OrderLayout;