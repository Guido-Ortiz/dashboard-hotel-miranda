import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteBooking, filterBookings, getBookings } from '../../redux/actions/actions';
import DataTable from 'react-data-table-component';
import { ActionsContainer, BookingTableContainer, BtnRequest, BtnStatus, BtnTopMenu, ClientData, CustomTable, TopMenu } from './BookingsStyles';

import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


import { Link } from 'react-router-dom';
import { BookingColumn, Date } from '../Dashboard/DashboardStyles';
import { IconButton, Tooltip } from '@mui/material';

const Bookings = () => {

  const columns = [
    {
      name: "Booking",
      selector: (row) => <ClientData>
        <h3>{row.client}</h3>
        <h4>#{row.id}</h4>
      </ClientData>,
      sortable: true,
      width: '15%'
    },
    {
      name: "Order",
      selector: (row) => <Date>{row.order}</Date>,
      sortable: true,
      width: '11%'
    },
    {
      name: "Check-In",
      selector: (row) => <Date>{row.checkin}</Date>,
      sortable: true,
      width: '11%'
    },
    {
      name: "Check-Out",
      selector: (row) => <Date>{row.checkout}</Date>,
      sortable: true,
      width: '11%'
    },
    {
      name: "Request",
      selector: (row) => <BtnRequest>View Notes</BtnRequest>,
      sortable: true,
      width: '12%'
    },
    {
      name: "Room",
      selector: (row) => <BookingColumn>
        <h3>{row.type}</h3>
        <h4>N° {row.number}</h4>
      </BookingColumn>,
      sortable: true,
      width: '18%'
    },
    {
      name: "Status",
      selector: (row) => <BtnStatus status={row.status} data-testid='background'>{row.status}</BtnStatus>,
      sortable: true,
      width: '13%'
    },
    {
      name: "Actions",
      selector: (row) => <ActionsContainer>
        <Link to={`/bookings/${row.id}`}><UpdateIcon sx={{ marginRight: '10px' }} /></Link>
        <Tooltip title='Delete Booking'>
          <IconButton>
            <DeleteIcon onClick={() => handleDeleteBooking(row.id)} />
          </IconButton>
        </Tooltip>
      </ActionsContainer>,
      width: '9%'
    }
  ]

  const dispatch = useDispatch()

  const data = useSelector(state => state.bookings.bookings)

  useEffect(() => {
    // dispatch(getBookings())
  }, [dispatch])

  const handleFilterBookings = filter => {
    // dispatch(filterBookings(filter))
  }
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleDeleteBooking = (id) => {
    // dispatch(deleteBooking(id))
    setOpen(true)
  }

  return (
    <>
      <TopMenu>
        <div>
          <h4 onClick={() => handleFilterBookings('all')}>All Bookings</h4>
          <h4 value='in' onClick={() => handleFilterBookings('in')}>Checking In</h4>
          <h4 value='out' onClick={() => handleFilterBookings('out')}>Checking Out</h4>
          <h4 value='progress' onClick={() => handleFilterBookings('progress')}>In Progress</h4>
        </div>
        <div>
          <input type='text' placeholder='Search bookings' />
          <BtnTopMenu>Search</BtnTopMenu>
        </div>
      </TopMenu>

      <BookingTableContainer>
        <DataTable columns={columns} data={data} defaultSortFieldId pagination={5} highlightOnHover customStyles={CustomTable} />
      </BookingTableContainer>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Booking deleted!</Alert>
      </Snackbar>

    </>
  )
}

export default Bookings