import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import { bookingsData } from '../../data/bookingsData';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar'

import { BtnToBooking, CustomStylesBookingTable, DashboardWrapper, RightContainer, SwiperContainer, TableContainer } from './DashboardStyles';
import KPIs from './KPIs/KPIs';
import Swiper from '../Swiper/Swiper';

const DashboardPage = () => {

  const sidebar = useSelector(state => state.sidebar)

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: '50px'
    },
    {
      name: "Photo",
      selector: (row) => <img className="mt-1" src={row.photo} alt="Profile" />,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      width: '100px'
    },
    {
      name: "Room Number",
      selector: (row) => row.number,
      sortable: true,
      width: '120px'
    },
    {
      name: "Check-In",
      selector: (row) => row.checkin,
      sortable: true,
      width: '120px'
    },
    {
      name: "Check-Out",
      selector: (row) => row.checkout,
      sortable: true,
      width: '120px'
    },
    {
      name: "See More",
      selector: (row) => <Link to={`/bookings/${row.id}`}><BtnToBooking>See more</BtnToBooking></Link>
    }
  ]

  // return (
  //   <>
  //     <Topbar title='Dashboard' />
  //     <DashboardWrapper>
  //       {sidebar && <Sidebar />}

  //       <RightContainer sidebar={sidebar}>
  //         <KPIs />

  //         <TableContainer>
  //           <DataTable title="Bookings" columns={columns} data={bookingsData} defaultSortFieldId  pagination={5} highlightOnHover customStyles={CustomStylesBookingTable} />
  //         </TableContainer>

  //         <SwiperContainer sidebar={sidebar}>
  //           <h1>Reviews</h1>
  //           <Swiper />
  //         </SwiperContainer>

  //       </RightContainer>
        
  //     </DashboardWrapper>

  //   </>
  // )



  return (
    <>
      <Topbar title='Dashboard' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer sidebar={sidebar}>
          <KPIs />

          <TableContainer>
            <DataTable title="Bookings" columns={columns} data={bookingsData} defaultSortFieldId  pagination={5} highlightOnHover customStyles={CustomStylesBookingTable} />
          </TableContainer>

          <SwiperContainer sidebar={sidebar}>
            <h1>Reviews</h1>
            <Swiper />
          </SwiperContainer>

        </RightContainer>
        
      </DashboardWrapper>

    </>
  )


}

export default DashboardPage