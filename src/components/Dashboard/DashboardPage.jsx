import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar'
import Dashboard from './Dashboard/Dashboard';

import { DashboardWrapper } from './DashboardPageStyles';

const DashboardPage = () => {

  const sidebar = useSelector(state => state.sidebar)

  return (
    <>
      <Topbar title='Dashboard' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}
        <Dashboard />
      </DashboardWrapper>

      {/*  */}
    </>
  )
}

export default DashboardPage