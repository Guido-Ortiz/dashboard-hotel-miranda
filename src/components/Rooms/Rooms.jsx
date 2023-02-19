import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { rooms } from '../../data/rooms';
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { AmenitiesChip, BtnRoomStatus, BtnToRoomForm, RoomImage, RoomsTableContainer } from './RoomsStyles';

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    width: '8%'
  },
  {
    name: "Image",
    selector: (row) => <RoomImage src={row.photos[0]} alt='Thumbnail' />
  },
  {
    name: "Number",
    selector: (row) => row.number,
    sortable: true,
    width: '12%'
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true
  },
  {
    name: "Amenities",
    selector: (row) => row.amenities.map(e => <AmenitiesChip>{e}</AmenitiesChip>),
    width: '20%'
  },
  {
    name: "Price",
    selector: (row) => row.price,
    width: '7%'
  },
  {
    name: "% Offer",
    selector: (row) => <p>{row.price} - %{row.offer} = {row.price-row.offer/100}</p>,
    sortable: true,
    width: '15%'
  },
  {
    name: "Status",
    selector: (row) => <BtnRoomStatus status={row.status}>{row.status}</BtnRoomStatus>,
    sortable: true
  },
]

const customStyles = {
  rows: {
      style: {
          // border: '1px solid blue'
      },
  },
  headCells: {
      style: {
        // border: '1px solid fuchsia',          
      },
  },
  cells: {
      style: {
        // border: '1px solid blue',
        width: '10px'
          // paddingLeft: '8px', // override the cell padding for data cells
          // paddingRight: '8px',
      },
  },
};

const Rooms = () => {
  const sidebar = useSelector(state => state.sidebar)
  const handleRowClicked = (row) => {
    console.log(row.id);
  }
  return (
    <>
      <Topbar title='Rooms' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer>

          <Link to='/rooms/add'>
            <BtnToRoomForm>+ Room</BtnToRoomForm>
          </Link>

          <RoomsTableContainer>
            <DataTable columns={columns} data={rooms} defaultSortFieldId pagination onRowClicked={handleRowClicked} highlightOnHover customStyles={customStyles} />
          </RoomsTableContainer>

        </RightContainer>
      </DashboardWrapper>
    </>
  )
}

export default Rooms