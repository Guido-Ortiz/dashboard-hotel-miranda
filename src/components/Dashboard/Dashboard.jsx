import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import { bookingsData } from '../../data/bookingsData';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar'

import { DashboardWrapper, RightContainer, SwiperContainer, TableContainer } from './DashboardStyles';
import KPIs from './KPIs/KPIs';
import Swiper from '../Swiper/Swiper';

const DashboardPage = () => {

  const sidebar = useSelector(state => state.sidebar)

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Photo",
      selector: (row) => <img className="mt-1" src={row.photo} alt="Photo" />,
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
      name: "Room Number",
      selector: (row) => row.number,
      sortable: true
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
  ];


  const handleRowClicked = (row) => {
    console.log(row.client);
  };

  const customStyles = {
    
};

  return (
    <>
      <Topbar title='Dashboard' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer>
          <KPIs />

          <TableContainer>
            <DataTable title="Bookings" columns={columns} data={bookingsData} defaultSortFieldId  pagination={5} onRowClicked={handleRowClicked} highlightOnHover customStyles={customStyles} />
          </TableContainer>

          <SwiperContainer>
            <h1>Reviews</h1>
            <Swiper />
          </SwiperContainer>

        </RightContainer>
        
      </DashboardWrapper>

      {/*  */}
    </>
  )
}

export default DashboardPage