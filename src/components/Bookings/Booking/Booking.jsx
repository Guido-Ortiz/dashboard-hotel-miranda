import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { DashboardWrapper, RightContainer } from '../../Dashboard/DashboardStyles'
import Sidebar from '../../Sidebar/Sidebar';
import Topbar from '../../Topbar/Topbar';
import BookingDetail from './BookingDetail/BookingDetail';

const Booking = () => {

  let { booking_id } = useParams()

  const sidebar = useSelector(state => state.sidebar)

  return (
    <>
      <Topbar title={`Booking ${booking_id}`} />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer>
          <BookingDetail />
        </RightContainer>
      </DashboardWrapper>
    </>
  )
}

export default Booking