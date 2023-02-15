import React from 'react';
import { useSelector } from 'react-redux';
import DataTable, { createTheme } from "react-data-table-component";
import { bookingsData } from '../../data/bookingsData';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar'

import { DashboardWrapper, RightContainer, TableContainer } from './DashboardStyles';
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
    // rows: {
    //     style: {
    //         minHeight: '72px', // override the row height
    //     },
    // },
    // headCells: {
    //     style: {
    //       border: '1px solid blue',
    //       width: '10px !important',
    //         // paddingLeft: '8px', // override the cell padding for head cells
    //         // paddingRight: '8px',
    //     },
    // },
    // cells: {
    //     style: {
    //       border: '1px solid red',
    //       width: '10px',
    //         // paddingLeft: '8px', // override the cell padding for data cells
    //         // paddingRight: '8px',
    //     },
    // },
};

  return (
    <>
      <Topbar title='Dashboard' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer>
          <KPIs />

          <TableContainer>
            <DataTable title="Bookings" columns={columns} data={bookingsData} defaultSortFieldId  pagination={3} onRowClicked={handleRowClicked} highlightOnHover customStyles={customStyles} />
          </TableContainer>

          <Swiper />

        </RightContainer>
        
      </DashboardWrapper>

      {/*  */}
    </>
  )
}

export default DashboardPage