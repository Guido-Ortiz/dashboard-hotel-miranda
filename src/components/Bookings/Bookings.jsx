import React from 'react';
import { useSelector } from 'react-redux';

import DataTable from 'react-data-table-component';
import { bookingDetails } from '../../data/bookingDetails';

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


const BookingsPage = () => {

  const sidebar = useSelector(state => state.sidebar)

  const handleRowClicked = (row) => {
    console.log(row.client);
  };

  return (
    <>
      <Topbar title='Bookings' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer>
            <TopMenu>
              <div>
                <h4>All Bookings</h4>
                <h4>Checking In</h4>
                <h4>Checking Out</h4>
                <h4>In Progress</h4>
              </div>
              <div>
                <input type='text' />
                <BtnTopMenu>Search</BtnTopMenu>
              </div>
            </TopMenu>
            <BookingTableContainer>
            <DataTable columns={columns} data={bookingDetails} defaultSortFieldId  pagination={5} onRowClicked={handleRowClicked} highlightOnHover />
            </BookingTableContainer>
        </RightContainer>
        
      </DashboardWrapper>
    </>
  )
}

export default BookingsPage