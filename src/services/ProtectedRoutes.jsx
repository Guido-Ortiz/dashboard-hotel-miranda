import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {
    const auth = localStorage.getItem("logged_in")
  return auth ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes