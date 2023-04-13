import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionsContainer, TopMenu } from '../Bookings/BookingsStyles';
import { AmenitiesChip, AmenitiesContainer, BtnRoomStatus, BtnTabsAllRooms, BtnTabsAvailable, BtnTabsBooked, BtnToRoomForm, Price, RoomImage, RoomInfoContainer, RoomsTableContainer, RoomType } from './RoomsStyles';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';
import { filterRooms, getRooms } from '../../redux/features/roomsSlice';
import Loader from '../Loader/Loader';

const customStyles = {
  rows: {
    style: {
      // border: '1px solid blue'
      height: '150px'
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
      paddingLeft: '4px',
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
        <h4>#{row._id}</h4>
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
      width: '20%'
    },
    {
      name: "Price",
      selector: (row) => <Price>${row.price}<span>/Night</span></Price>,
      sortable: true,
      width: '12%'
    },
    {
      name: "% Offer",
      selector: (row) => <Price>
        ${row.price - (row.discount * row.price / 100)}<span>/Night</span>
      </Price>,
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

  const data = useSelector(state => state.rooms.rooms.data)

  const dispatch = useDispatch()

  const handleRowClicked = (row) => {
    console.log(row.id)
  }

  useEffect(() => {
      dispatch(getRooms())
  }, [dispatch])

  const handleFilterRooms = (filter) => {
    // dispatch(filterRooms(filter))
    if (filter === 'all') {
      setAll(true)
      setAvailable(false)
      setBooked(false)
    }
    if (filter === 'available') {
      setAll(false)
      setAvailable(true)
      setBooked(false)
    }
    if (filter === 'booked') {
      setAll(false)
      setAvailable(false)
      setBooked(true)
    }
    dispatch(filterRooms(filter))
  }

  const handleDeleteRoom = (id) => {
    // dispatch(deleteRoom(id))
  }

  const [all, setAll] = useState(true)
  const [available, setAvailable] = useState(false)
  const [booked, setBooked] = useState(false)

  const status = useSelector(state => state.rooms.status)
  if (status === 'Loading') {
    return (
      <Loader />
    )
  }

  return (
    <>
      <TopMenu>
        <div>
          <BtnTabsAllRooms onClick={() => handleFilterRooms('all')} all={all} available={available} booked={booked}>All Rooms</BtnTabsAllRooms>
          <BtnTabsAvailable onClick={() => handleFilterRooms('available')} all={all} available={available} booked={booked}>Available</BtnTabsAvailable>
          <BtnTabsBooked onClick={() => handleFilterRooms('booked')} all={all} available={available} booked={booked}>Booked</BtnTabsBooked>

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