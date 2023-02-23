import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { rooms } from '../../data/rooms';
import { deleteRoom, filterRooms, getRooms } from '../../redux/actions/actions';
import { ActionsContainer, TopMenu } from '../Bookings/BookingsStyles';
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { AmenitiesChip, BtnRoomStatus, BtnToRoomForm, RoomImage, RoomsTableContainer } from './RoomsStyles';

import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';



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

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      width: '7%'
    },
    {
      name: "Image",
      selector: (row) => <RoomImage src={row.photos[0]} alt='Thumbnail' />
    },
    {
      name: "Number",
      selector: (row) => row.number,
      sortable: true,
      width: '10%'
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Amenities",
      selector: (row) => row.amenities.map(e => <AmenitiesChip>{e}</AmenitiesChip>),
      width: '15%'
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      width: '8%'
    },
    {
      name: "% Offer",
      selector: (row) => <p>{row.price} - %{row.offer} = {row.price - row.offer / 100}</p>,
      sortable: true,
      width: '15%'
    },
    {
      name: "Status",
      selector: (row) => <BtnRoomStatus status={row.status}>{row.status}</BtnRoomStatus>,
      sortable: true,
      width: '14%'
    },
    {
      name: "Actions",
      selector: (row) => <ActionsContainer>
        <UpdateIcon sx={{marginRight: '10px'}} />
        <DeleteIcon onClick={() => handleDeleteRoom(row.id)} />
      </ActionsContainer>,
      width: '10%'
    }
  ]

  const sidebar = useSelector(state => state.sidebar)
  const data = useSelector(state => state.rooms.rooms)

  const dispatch = useDispatch()

  const handleRowClicked = (row) => {
    console.log(row.id)
  }

  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

  const handleFilterRooms = (filter) => {
    dispatch(filterRooms(filter))
  }

  const handleDeleteRoom = (id) => {
    dispatch(deleteRoom(id))
  }

  return (
    <>
      {/* <Topbar title='Rooms' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer> */}

          <TopMenu>
            <div>
              <h4 onClick={() => handleFilterRooms('all')}>All Rooms</h4>
              <h4 value='in' onClick={() => handleFilterRooms('available')}>Available</h4>
              <h4 value='out' onClick={() => handleFilterRooms('booked')}>Booked</h4>
            </div>
            <div>

              <Link to='/rooms/add'>
                <BtnToRoomForm>+ Room</BtnToRoomForm>
              </Link>
            </div>
          </TopMenu>


          <RoomsTableContainer>
            <DataTable columns={columns} data={data} defaultSortFieldId pagination onRowClicked={handleRowClicked} highlightOnHover customStyles={customStyles} />
          </RoomsTableContainer>

        {/* </RightContainer>
      </DashboardWrapper> */}
    </>
  )
}

export default Rooms