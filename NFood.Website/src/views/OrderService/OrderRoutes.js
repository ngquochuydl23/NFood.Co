import React from 'react'

const Restaurants = React.lazy(() => import("@views/OrderService/Restaurants"));
const Restaurant = React.lazy(() => import("@views/OrderService/Restaurant"));
const Profile = React.lazy(() => import("@views/OrderService/Profile"));
const Favourite = React.lazy(() => import("@views/OrderService/Favourite"));
const Orders = React.lazy(() => import("@views/OrderService/Orders"));
const FindingLocation = React.lazy(() => import("@views/OrderService/FindingLocation"));
const Search = React.lazy(() => import("@views/OrderService/Search"));
const CustomerLogin = React.lazy(() => import("@views/OrderService/CustomerLogin"));

export const orderRoutes = [
    { path: '/restaurants', name: 'Restaurants', element: Restaurants, allowAnonymous: true },
    { path: '/restaurant/:id', name: 'Restaurant', element: Restaurant, allowAnonymous: true },
    { path: '/profile', name: 'Profile', element: Profile },
    { path: '/favourite', name: 'Favourite', element: Favourite },
    { path: '/orders', name: 'Favourite', element: Orders },
    { path: '/search', name: 'Search', element: Search, allowAnonymous: true },
    { path: '/finding-location', name: 'Finding Location', element: FindingLocation, allowAnonymous: true },
    { path: '/login', name: 'Customer Login', element: CustomerLogin, allowAnonymous: true },
]

