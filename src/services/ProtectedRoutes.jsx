import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useUser } from '../context/userContext';

const ProtectedRoutes = () => {

  const { user } = useUser()

  return user.logged === false ? <Navigate to={"/login"} /> : <Outlet />
  // return user ? <Navigate to={"/login"} /> : <Outlet />
}

export default ProtectedRoutes

