import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { rooms } from '../../data/rooms';
import { filterRooms, getRooms } from '../../redux/actions/actions';
import { TopMenu } from '../Bookings/BookingsStyles';
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { AmenitiesChip, BtnRoomStatus, BtnToRoomForm, RoomImage, RoomsTableContainer } from './RoomsStyles';

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
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
  },
  {
    name: "Amenities",
    selector: (row) => row.amenities.map(e => <AmenitiesChip>{e}</AmenitiesChip>),
    width: '20%'
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
    width: '7%'
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

  return (
    <>
      <Topbar title='Rooms' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}

        <RightContainer>

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

        </RightContainer>
      </DashboardWrapper>
    </>
  )
}

export default Rooms