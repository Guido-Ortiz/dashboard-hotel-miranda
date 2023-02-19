import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {
    const auth = localStorage.getItem("logged_in")
  return auth ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes




// import React from 'react'
// import { Navigate, Outlet } from 'react-router'
// import { useUser } from '../context/userContext'

// const ProtectedRoutes = () => {
//   const [user] = useUser()
//   if (!user.email) {
//     return <Navigate to='/login' replace />
//   }

//   return (
//     <Outlet />

//   )
// }

// export default ProtectedRoutes