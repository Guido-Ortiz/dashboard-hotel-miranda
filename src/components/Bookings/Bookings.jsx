import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBookings, getBookings } from '../../redux/actions/actions';

import DataTable from 'react-data-table-component';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles';
import { BookingTableContainer, BtnStatus, BtnTopMenu, TopMenu } from './BookingsStyles';


const columns = [
  {
    name: "Guest",
    selector: (row) => row.client,
    sortable: true
  },
  {
    name: "Order",
    selector: (row) => row.order
  },
  {
    name: "Check-In",
    selector: (row) => row.checkin,
    sortable: true
  },
  {
    name: "Check-Out",
    selector: (row) => row.checkout,
    sortable: true
  },
  {
    name: "Request",
    selector: (row) => row.request,
    sortable: true
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true
  },
  {
    name: "Number",
    selector: (row) => row.number,
    sortable: true
  },
  {
    name: "Status",
    selector: (row) => <BtnStatus status={row.status}>{row.status}</BtnStatus>,
    sortable: true
  },
  
]


const Bookings = () => {

  const dispatch = useDispatch()

  const sidebar = useSelector(state => state.sidebar)
  const data = useSelector(state => state.bookings.bookings)

  const handleRowClicked = (row) => {
    console.log(row.client);
  }

  useEffect(() => {
    dispatch(getBookings())
  }, [dispatch])

  const handleFilterBookings = filter => {
    dispatch(filterBookings(filter))
  }

  return (
    <>
      <Topbar title='Bookings' />
      <DashboardWrapper> 
        {sidebar && <Sidebar />} 

         <RightContainer>
            <TopMenu>
              <div>
                <h4 onClick={() => handleFilterBookings('all')}>All Bookings</h4>
                <h4 value='in' onClick={() => handleFilterBookings('in')}>Checking In</h4>
                <h4 value='out' onClick={() => handleFilterBookings('out')}>Checking Out</h4>
                <h4 value='progress' onClick={() => handleFilterBookings('progress')}>In Progress</h4>
              </div>
              <div>
                <input type='text' />
                <BtnTopMenu>Search</BtnTopMenu>
              </div>
            </TopMenu>
            <BookingTableContainer>
            <DataTable columns={columns} data={data} defaultSortFieldId  pagination={5} onRowClicked={handleRowClicked} highlightOnHover />
            </BookingTableContainer>
        </RightContainer>
        
      </DashboardWrapper>
    </>
  )
}

export default Bookings