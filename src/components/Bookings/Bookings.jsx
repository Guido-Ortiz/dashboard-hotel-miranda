import React from 'react'
import { useSelector } from 'react-redux'
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'


const BookingsPage = () => {

  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Bookings' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer>
          <h1>Bookings</h1>
        </RightContainer>
        
      </DashboardWrapper>
    </>
  )
}

export default BookingsPage