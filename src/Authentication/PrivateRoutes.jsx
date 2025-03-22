
import { Navigate, Outlet } from 'react-router-dom';
import { getLocalStorage } from '../utils/LocalStorageUtils';

const PrivateRoute = () => {

  const isAuthenticated=getLocalStorage('isAuthenticated')
  const user=getLocalStorage('user')

  // If authenticated, render the child routes (Outlet)
  // Otherwise, redirect to the login page
  return (isAuthenticated  && user) ? <Outlet /> : <Navigate to="/signin" replace={true}/>;
  // all the nested routes are handled by <Outlet /> and replace ture in Naviagte[user can't go to login by using back button ]
};

export default PrivateRoute;