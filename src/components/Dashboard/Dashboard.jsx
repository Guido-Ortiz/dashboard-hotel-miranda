import React from 'react';
import { useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

import Topbar from '../Topbar/Topbar'

const Dashboard = () => {

  // const navigate = useNavigate()

  // const handleLogout = () => {
  //   localStorage.removeItem("logged_in")
  //   localStorage.removeItem("user")
  //   navigate("/login")
  // }

  return (
    <>
      <Topbar title='Dashboard' />
      {/* <h1>DASHBOARD</h1>
      <button type='submit' onClick={handleLogout}>LogOut</button> */}
      <Sidebar />

    </>
  )
}

export default Dashboard