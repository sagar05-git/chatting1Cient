import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getLocalStorage } from '../utils/LocalStorageUtils';

// user can't access login page after authentication
const PublicRoute = () => {
  const isAuthenticated=getLocalStorage('isAuthenticated')
  const user=getLocalStorage('user')
  
  // If authenticated, redirect to the Home
  // Otherwise, allow access to the public route
  return (isAuthenticated  && user) ? <Navigate to="/chat" replace={true}/> : <Outlet />;
    // all the nested routes are handled by <Outlet /> and replace ture in Naviagte[user can't go to login by using back button ]
};

export default PublicRoute;