import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteBooking, filterBookings, getBookings } from '../../redux/actions/actions';
import DataTable from 'react-data-table-component';
import { ActionsContainer, BookingTableContainer, BtnRequest, BtnStatus, BtnTopMenu, ClientData, CustomTable, TopMenu } from './BookingsStyles';

import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from 'react-router-dom';
import { BookingColumn, Date } from '../Dashboard/DashboardStyles';
import { StoreState } from '../../redux/reducer/reducer';

const Bookings = () => {

  const columns = [
    {
      name: "Booking",
      selector: (row: { client: string; id: number }) => <ClientData>
        <h3>{row.client}</h3>
        <h4>#{row.id}</h4>
      </ClientData>,
      sortable: true,
      width: '15%'
    },
    {
      name: "Order",
      selector: (row: { order: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Date>{row.order}</Date>,
      sortable: true,
      width: '108px'
    },
    {
      name: "Check-In",
      selector: (row: { checkin: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Date>{row.checkin}</Date>,
      sortable: true,
      width: '108px'
    },
    {
      name: "Check-Out",
      selector: (row: { checkout: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Date>{row.checkout}</Date>,
      sortable: true,
      width: '108px'
    },
    {
      name: "Request",
      selector: (row: string) => <BtnRequest>View Notes</BtnRequest>,
      sortable: true,
      width: '12%'
    },
    {
      name: "Room",
      selector: (row: { type: string; number: number }) => <BookingColumn>
        <h3>{row.type}</h3>
        <h4>N° {row.number}</h4>
      </BookingColumn>,
      sortable: true,
      width: '18%'
    },
    {
      name: "Status",
      selector: (row: { status: string }) => <BtnStatus status={row.status} data-testid='background'>{row.status}</BtnStatus>,
      sortable: true,
      width: '13%'
    },
    {
      name: "Actions",
      selector: (row: { id: number; }) => <ActionsContainer>
        <Link to={`/bookings/${row.id}`}><UpdateIcon sx={{ marginRight: '10px' }} /></Link>
        <DeleteIcon onClick={() => handleDeleteBooking(row.id)} />
      </ActionsContainer>,
      width: '9%'
    }
  ]

  const dispatch: Dispatch<any> = useDispatch();

  const data = useSelector((state: StoreState) => state.bookings.bookings)

  useEffect(() => {
    dispatch(getBookings())
  }, [dispatch])

  const handleFilterBookings = (filter: string) => {
    dispatch(filterBookings(filter))
  }

  const handleDeleteBooking = (id: number) => {
    dispatch(deleteBooking(id))
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

    </>
  )
}

export default Bookings