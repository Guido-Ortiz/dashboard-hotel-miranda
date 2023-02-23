import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, filterBookings, getBookings } from '../../redux/actions/actions';
import DataTable from 'react-data-table-component';
import { ActionsContainer, BookingTableContainer, BtnRequest, BtnStatus, BtnTopMenu, ClientData, CustomTable, TopMenu } from './BookingsStyles';

import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

import { Stack, Modal, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BookingColumn, Date } from '../Dashboard/DashboardStyles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: 400, xs: 200 },
  bgcolor: 'background.paper',
  border: '1px solid #007DED',
  boxShadow: 24,
  p: 4,
};

const Bookings = () => {

  const [open, setOpen] = useState(false)
  const [newDescription, setNewDescription] = useState('')

  const columns = [
    // {
    //   name: "Photo",
    //   selector: (row) => <img src={row.photo} alt="Guest" />,
    //   width: '18%'
    // },
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
      width: '108px'
    },
    {
      name: "Check-In",
      selector: (row) => <Date>{row.checkin}</Date>,
      sortable: true,
      width: '108px'
    },
    {
      name: "Check-Out",
      selector: (row) => <Date>{row.checkout}</Date>,
      sortable: true,
      width: '108px'
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
      selector: (row) => <BtnStatus status={row.status}>{row.status}</BtnStatus>,
      sortable: true,
      width: '13%'
    },
    {
      name: "Actions",
      selector: (row) => <ActionsContainer>
        <Link to={`/bookings/${row.id}`}><UpdateIcon sx={{ marginRight: '10px' }} onClick={handleOpen} /></Link>
        <DeleteIcon onClick={() => handleDeleteBooking(row.id)} />
      </ActionsContainer>,
      width: '9%'
    }
  ]

  const dispatch = useDispatch()

  const data = useSelector(state => state.bookings.bookings)

  useEffect(() => {
    dispatch(getBookings())
  }, [dispatch])

  const handleFilterBookings = filter => {
    dispatch(filterBookings(filter))
  }

  const handleDeleteBooking = (id) => {
    dispatch(deleteBooking(id))
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const handleEdit = () => {
    console.log('edit photo')
    // dispatch(editPhoto({ id, newDescription }))
    setOpen(false)
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
          <input type='text' />
          <BtnTopMenu>Search</BtnTopMenu>
        </div>
      </TopMenu>

      <BookingTableContainer>
        <DataTable columns={columns} data={data} defaultSortFieldId pagination={5} highlightOnHover customStyles={CustomTable} />
      </BookingTableContainer>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Edit Booking { }</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Stack direction='column' justifyContent='flex-start' alignItems='flex-start'>
            <TextField fullWidth variant='outlined' label='Description' name='newDescription'
              // value={newDescription} 
              onChange={e => setNewDescription(e.target.value)} sx={{ margin: '20px 0' }} />
            <Button variant="contained" onClick={handleEdit}>Edit Description</Button>
          </Stack>

        </Box>
      </Modal>

    </>
  )
}

export default Bookings