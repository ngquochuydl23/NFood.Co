import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/override/override_slidebar.scss'
import OrderLayout from './views/OrderService/OrderLayout';
import MerchantLayout from '@views/MerchantService/MerchantLayout';
import { MerchantRoutes } from '@views/MerchantService/MerchantRoutes';


// // Containers
// const DefaultLayout = React.lazy(() => import('@layout/DefaultLayout'))

// // Pages
// const Login = React.lazy(() => import('@views/Login'))
// const Page404 = React.lazy(() => import('@views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('@views/pages/page500/Page500'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
        {/* <Route exact path="*" name="App Page" element={<AppProtectedRoute />} >
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Route> */}

        <Route path="*" name="App Page">
          <Route path="order-food/*" element={<OrderLayout />} />
          <Route path="merchant/*" element={<MerchantRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
