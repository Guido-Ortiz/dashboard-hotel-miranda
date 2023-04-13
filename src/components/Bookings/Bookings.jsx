import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteBooking, filterBookings, getBookings } from '../../redux/actions/actions';
import DataTable from 'react-data-table-component';
import { ActionsContainer, BookingTableContainer, BtnRequest, BtnStatus, BtnTopMenu, ButtonTabsAll, ButtonTabsIn, ButtonTabsOut, ButtonTabsProgress, ClientData, CustomTable, TopMenu } from './BookingsStyles';

import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


import { Link } from 'react-router-dom';
import { BookingColumn, Date } from '../Dashboard/DashboardStyles';
import { IconButton, Tooltip } from '@mui/material';

import { deleteBooking, filterBookings, getBookings } from '../../redux/features/bookingsSlice';
import Loader from '../Loader/Loader';

const Bookings = () => {

  const columns = [
    {
      name: "Booking",
      selector: (row) => <ClientData>
        <h3>{row.customer_name}</h3>
        <h4>#{row._id}</h4>
      </ClientData>,
      sortable: true,
      width: '17%'
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
      selector: (row) => <BtnRequest>{row.request}</BtnRequest>,
      sortable: true,
      width: '12%'
    },
    {
      name: "Room",
      selector: (row) => <BookingColumn>
        <h3>{row.room_type}</h3>
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
        <Link to={`/bookings/${row._id}`}><UpdateIcon sx={{ marginRight: '10px' }} /></Link>
        <Tooltip title='Delete Booking'>
          <IconButton>
            <DeleteIcon onClick={() => handleDeleteBooking(row._id)} />
          </IconButton>
        </Tooltip>
      </ActionsContainer>,
      width: '9%'
    }
  ]

  const dispatch = useDispatch()

  const data = useSelector(state => state.bookings.bookings.data)

  const [active, setActive] = useState({
    all: true,
    in: false,
    out: false,
    progres: false
  })

  useEffect(() => {
    dispatch(getBookings())
  }, [dispatch])

  const handleFilterBookings = (filter) => {
    if (filter === 'all') {
      setActive({
        all: true,
        in: false,
        out: false,
        progres: false
      })
    }
    if (filter === 'in') {
      setActive({
        all: false,
        in: true,
        out: false,
        progres: false
      })
    }
    if (filter === 'out') {
      setActive({
        all: false,
        in: false,
        out: true,
        progres: false
      })
    }
    if (filter === 'progres') {
      setActive({
        all: false,
        in: false,
        out: false,
        progres: true
      })
    }
    dispatch(filterBookings(filter))
  }

  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleDeleteBooking = (id) => {
    dispatch(deleteBooking(id))
    setOpen(true)
  }

  const status = useSelector(state => state.bookings.status)
  if (status === 'Loading') {
    return (
      <Loader />
    )
  }

  return (
    <>
      <TopMenu>
        <div>
          <ButtonTabsAll onClick={(e) => handleFilterBookings('all')} all={active.all} in={active.in} out={active.out} progres={active.progres}>All Bookings</ButtonTabsAll>
          <ButtonTabsIn onClick={(e) => handleFilterBookings('in')} all={active.all} in={active.in} out={active.out} progres={active.progres}>Checking In</ButtonTabsIn>
          <ButtonTabsOut onClick={(e) => handleFilterBookings('out')} all={active.all} in={active.in} out={active.out} progres={active.progres}>Checking Out</ButtonTabsOut>
          <ButtonTabsProgress onClick={(e) => handleFilterBookings('progres')} all={active.all} in={active.in} out={active.out} progres={active.progres}>In Progress</ButtonTabsProgress>
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