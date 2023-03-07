import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, getBookings } from '../../redux/actions/actions';
import DataTable from "react-data-table-component";
import KPIs from './KPIs/KPIs';
import Swiper from '../Swiper/Swiper';
import { BookingColumn, BtnToBooking, CustomStylesBookingTable, Date, SwiperContainer, TableContainer } from './DashboardStyles';
import { ActionsContainer } from '../Bookings/BookingsStyles';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress, Snackbar, Alert, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const Dashboard = () => {

  const sidebar = useSelector(state => state.sidebar)

  const data = useSelector(state => state.bookings.bookings)
  const allData = useSelector(state => state.bookings.allBookings)

  const columns = [
    {
      name: "Photo",
      selector: (row) => <img src={row.photo} alt="Profile" />,
      width: '18%'
    },
    {
      name: "Booking",
      selector: (row) => <BookingColumn>
        <h3>{row.type}</h3>
        <h4>N° {row.number}</h4>
        <h5>#{row.id}</h5>
      </BookingColumn>,
      sortable: true,
      width: '17%'
    },
    {
      name: "Order",
      selector: (row) => <Date>{row.order}</Date>,
      sortable: true,
      width: '12%'
    },
    {
      name: "Check-In",
      selector: (row) => <Date>{row.checkin}</Date>,
      sortable: true,
      width: '12%'
    },
    {
      name: "Check-Out",
      selector: (row) => <Date>{row.checkout}</Date>,
      sortable: true,
      width: '12%'
    },
    {
      name: "See More",
      selector: (row) => <Link to={`/bookings/${row.id}`}><BtnToBooking>See more</BtnToBooking></Link>,
      width: '15%'
    },
    {
      name: "Actions",
      selector: (row) => <ActionsContainer>
        <Link to={`/bookings/${row.id}`}>
          <Tooltip title='Update Booking'>
            <UpdateIcon sx={{ marginRight: '10px' }} />
          </Tooltip>
          </Link>
          <Tooltip title='Delete Booking'>
            <DeleteIcon onClick={() => handleDeleteBooking(row.id)} />
          </Tooltip>
      </ActionsContainer>,
      width: '12%'
    }
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getBookings())
    }, 2000);
    // dispatch(getBookings())
  }, [dispatch])

  const handleDeleteBooking = (id) => {
    dispatch(deleteBooking(id))
    handleClick()
  }
  const [open, setOpen] = useState(false)

  if (data.length === 0 && allData.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <CircularProgress sx={{ color: '#E23428', marginTop: '200px' }} />
      </div>
    )
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <KPIs />

      <TableContainer>
        <h1>Bookings</h1>
        <DataTable columns={columns} data={data} defaultSortFieldId pagination={5} highlightOnHover customStyles={CustomStylesBookingTable} />
      </TableContainer>

      <SwiperContainer sidebar={sidebar}>
        <h1>Reviews</h1>
        <Swiper />
      </SwiperContainer>

      {/* <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} message="Booking deleted" action={action} sx={{border: '1px solid fuchsia'}} /> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} message="Booking deleted" action={action}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Booking deleted!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Dashboard