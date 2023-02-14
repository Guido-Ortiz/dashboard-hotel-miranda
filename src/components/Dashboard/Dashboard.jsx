import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

import Topbar from '../Topbar/Topbar'

const Dashboard = () => {

  const sidebar = useSelector(state => state.sidebar)

  return (
    <>
      <Topbar title='Dashboard' />
      {sidebar && <Sidebar />}
    </>
  )
}

export default Dashboard