// import React from 'react'
// import { Navigate, Outlet } from 'react-router'

// const ProtectedRoutes = () => {
//     const auth = localStorage.getItem("logged_in")
//   return auth ? <Outlet /> : <Navigate to={"/login"} />
// }

// export default ProtectedRoutes







import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useUser } from '../context/userContext';

const ProtectedRoutes = () => {

  const { user } = useUser()

  // if (user.logged === false) {
  //   return (
  //     <Navigate t9='/login' replace />
  //   )
  // }

  // return (

  // )
  // const auth = localStorage.getItem("logged_in")
  return user.logged === false ? <Navigate to={"/login"} /> : <Outlet />
}

export default ProtectedRoutes

