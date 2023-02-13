import React from 'react';
import { useNavigate } from 'react-router';

import Topbar from '../Topbar/Topbar'

const Dashboard = () => {

  const navigate = useNavigate()

  // const handleLogout = () => {
  //   localStorage.removeItem("logged_in")
  //   localStorage.removeItem("user")
  //   navigate("/login")
  // }

  return (
    <>
      <Topbar />
      {/* <h1>DASHBOARD</h1>
      <button type='submit' onClick={handleLogout}>LogOut</button> */}
    </>
  )
}

export default Dashboard