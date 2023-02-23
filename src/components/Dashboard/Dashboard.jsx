// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import DataTable from "react-data-table-component";
// import Sidebar from '../Sidebar/Sidebar';
// import Topbar from '../Topbar/Topbar'
// import { BtnToBooking, CustomStylesBookingTable, DashboardWrapper, RightContainer, SwiperContainer, TableContainer } from './DashboardStyles';
// import KPIs from './KPIs/KPIs';
// import Swiper from '../Swiper/Swiper';
// import { getBookings } from '../../redux/actions/actions';

// const Dashboard = () => {

//   const sidebar = useSelector(state => state.sidebar)

//   const data = useSelector(state => state.bookings.bookings)

//   const columns = [
//     {
//       name: "ID",
//       selector: (row) => row.id,
//       sortable: true,
//       width: '50px'
//     },
//     {
//       name: "Photo",
//       selector: (row) => <img src={row.photo} alt="Profile" />,
//     },
//     {
//       name: "Type",
//       selector: (row) => row.type,
//       sortable: true,
//       width: '180px'
//     },
//     {
//       name: "N°",
//       selector: (row) => row.number,
//       sortable: true,
//       width: '60px'
//     },
//     {
//       name: "Check-In",
//       selector: (row) => row.checkin,
//       sortable: true,
//       width: '120px'
//     },
//     {
//       name: "Check-Out",
//       selector: (row) => row.checkout,
//       sortable: true,
//       width: '120px'
//     },
//     {
//       name: "See More",
//       selector: (row) => <Link to={`/bookings/${row.id}`}><BtnToBooking>See more</BtnToBooking></Link>
//     }
//   ]

//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getBookings())
//   })

//   return (
//     <>
//       <Topbar title='Dashboard' />
//       <DashboardWrapper>
//         {sidebar && <Sidebar />}

//         <RightContainer sidebar={sidebar}>
//           <KPIs />

//           <TableContainer>
//             <DataTable title="Bookings" columns={columns} data={data} defaultSortFieldId  pagination={5} highlightOnHover customStyles={CustomStylesBookingTable} />
//           </TableContainer>

//           <SwiperContainer sidebar={sidebar}>
//             <h1>Reviews</h1>
//             <Swiper />
//           </SwiperContainer>

//         </RightContainer>

//       </DashboardWrapper>

//     </>
//   )
// }

// export default Dashboard










import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar'
import { BtnToBooking, CustomStylesBookingTable, DashboardWrapper, RightContainer, SwiperContainer, TableContainer } from './DashboardStyles';
import KPIs from './KPIs/KPIs';
import Swiper from '../Swiper/Swiper';
import { getBookings } from '../../redux/actions/actions';

const Dashboard = () => {

  const sidebar = useSelector(state => state.sidebar)

  const data = useSelector(state => state.bookings.bookings)

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: '50px'
    },
    {
      name: "Photo",
      selector: (row) => <img src={row.photo} alt="Profile" />,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      width: '180px'
    },
    {
      name: "N°",
      selector: (row) => row.number,
      sortable: true,
      width: '60px'
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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBookings())
  })

  return (
    <>
      <KPIs />

      <TableContainer>
        <DataTable title="Bookings" columns={columns} data={data} defaultSortFieldId pagination={5} highlightOnHover customStyles={CustomStylesBookingTable} />
      </TableContainer>

      <SwiperContainer sidebar={sidebar}>
        <h1>Reviews</h1>
        <Swiper />
      </SwiperContainer>
      
    </>
  )
}

export default Dashboard