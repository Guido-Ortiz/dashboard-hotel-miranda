import React from 'react'
import { useSelector } from 'react-redux'
import { DashboardWrapper } from '../Dashboard/DashboardPageStyles'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Bookings from './Bookings/Bookings'

const BookingsPage = () => {

  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Bookings' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}
        <Bookings />
      </DashboardWrapper>
    </>
  )
}

export default BookingsPage