import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRoom, filterRooms, getRooms } from '../../redux/actions/actions';
import { ActionsContainer, TopMenu } from '../Bookings/BookingsStyles';
import { AmenitiesChip, AmenitiesContainer, BtnRoomStatus, BtnToRoomForm, Price, RoomImage, RoomInfoContainer, RoomsTableContainer, RoomType } from './RoomsStyles';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';

const customStyles = {
  rows: {
    style: {
      // border: '1px solid blue'
      height: '100px'
    },
  },
  headCells: {
    style: {
      // border: '1px solid fuchsia',
      paddingLeft: '4px',
    },
  },
  cells: {
    style: {
      // border: '1px solid blue',
      width: '10px',
      paddingLeft: '4px', // override the cell padding for data cells
      // paddingRight: '8px',
    },
  },
};

const Rooms = () => {

  const columns = [
    {
      name: "Image",
      selector: (row) => <RoomImage src={row.photos[0]} alt='Thumbnail' />
    },
    {
      name: "Room",
      selector: (row) => <RoomInfoContainer>
        <h3>N° {row.number}</h3>
        <h4>#{row.id}</h4>
      </RoomInfoContainer>,
      width: '8%'
    },
    {
      name: "Type",
      selector: (row) => <RoomType>{row.type}</RoomType>,
      // width: '10%'
    },
    {
      name: "Amenities",
      selector: (row) =>
      <AmenitiesContainer>
          {
            row.amenities.map(e =>
              <AmenitiesChip>{e}</AmenitiesChip>
              )}
        </AmenitiesContainer>
      ,
      width: '15%'
    },
    {
      name: "Price",
      selector: (row) => <Price>${row.price}<span>/Night</span></Price>,
      sortable: true,
      width: '12%'
    },
    {
      name: "% Offer",
      selector: (row) => <Price>${row.price - row.offer}<span>/Night</span></Price>,
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
        <Tooltip title='Update Room'><UpdateIcon sx={{ marginRight: '10px' }} /></Tooltip>
        <Tooltip title='Delete Room'><DeleteIcon onClick={() => handleDeleteRoom(row.id)} /></Tooltip>
      </ActionsContainer>,
      width: '10%'
    }
  ]
  
  // const sidebar = useSelector(state => state.sidebar)
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

    </>
  )
}

export default Rooms