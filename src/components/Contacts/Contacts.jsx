import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import { ActionsContainer, TopMenu } from '../Bookings/BookingsStyles';
import Swiper from '../Swiper/Swiper';
import { SwiperContainer, TableContactsContainer, customStyles, InfoColumn, Customer, Comment } from './ContactsStyles';
// import { archivedContact, deleteContact, filterContacts, getContacts } from '../../redux/actions/actions';
import { Rating, Tooltip } from '@mui/material';
import { getReviews } from '../../redux/features/reviewsSlice';

const Contact = () => {

  const columns = [
    {
      name: "Info",
      selector: row => <InfoColumn>
        <h3>{row.date}</h3>
        <h4>#{row.id}</h4>
      </InfoColumn>,
      sortable: true,
      width: '18%'
    },
    {
      name: "Customer",
      selector: row => <Customer>
        <h3>{row.name}</h3>
        <h4>{row.email}</h4>
        <h4>{row.telephone}</h4>
      </Customer>,
      sortable: true,
      width: '18%'
    },
    {
      name: "Issue",
      selector: row => <h4>Issue</h4>,
      width: '14%'
    },
    {
      name: "Comment",
      selector: (row) => <div>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{ color: '#135846' }} />
        <Comment>{row.review}</Comment>
      </div>,
      sortable: true,
      width: '36%', //400px
    },
    {
      name: "Actions",
      selector: (row) => <ActionsContainer><Tooltip title="Archive message">
        <ArchiveIcon sx={{ color: '#135846' }} onClick={() => handleArchivedContact(row.id, row.customer, row.date, row.email, row.telephone, row.comment)} /></Tooltip>
        <Tooltip title="Delete message"><DeleteIcon onClick={() => handleDeleteContact(row.id)} /></Tooltip>
      </ActionsContainer>,
      width: '14%'
    }
  ]

  const dispatch = useDispatch()

  const data = useSelector(state => state.reviews.reviews)
  const archived = useSelector(state => state.reviews.archived)

  const handleRowClicked = (row) => {
    console.log(row.id);
  }

  const handleArchivedContact = (id, customer, date, email, telephone, comment) => {
    if (!archived.find(e => e.id === id)) {
      console.log('archiva')
      // dispatch(archivedContact({ id, date, customer, email, telephone, comment }))
    } else alert('Contact already archived!')
  }

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  const handleFilterContacts = (filter) => {
    // dispatch(filterContacts(filter))
  }

  const handleDeleteContact = (id) => {
    // dispatch(deleteContact(id))
  }

  return (
    <>

      <SwiperContainer>
        <Swiper />
      </SwiperContainer>

      <TopMenu>
        <div>
          <h4 value='all' onClick={() => handleFilterContacts('all')}>All Contacts</h4>
          <h4 value='archived' onClick={() => handleFilterContacts('archived')}>Archived</h4>
        </div>
      </TopMenu>

      <TableContactsContainer>
        <DataTable columns={columns} data={data} defaultSortFieldId pagination={5} onRowClicked={handleRowClicked} customStyles={customStyles} highlightOnHover />
      </TableContactsContainer>

    </>
  )
}

export default Contact