import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

import Topbar from '../Topbar/Topbar'
import { DashboardWrapper } from './DashboardStyles';
import KPIs from './KPIs/KPIs';

import bookings from '../../data/bookings.json';

const Dashboard = () => {

  const sidebar = useSelector(state => state.sidebar)

  return (
    <>
      <Topbar title='Dashboard' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}
        <KPIs />
      </DashboardWrapper>
    </>
  )
}

export default Dashboard