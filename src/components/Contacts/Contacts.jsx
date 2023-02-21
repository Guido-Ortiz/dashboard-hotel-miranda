import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import ArchiveIcon from '@mui/icons-material/Archive';
import { TopMenu } from '../Bookings/BookingsStyles';
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles';
import Sidebar from '../Sidebar/Sidebar';
import Swiper from '../Swiper/Swiper';
import Topbar from '../Topbar/Topbar';
import { SwiperContainer, TableContactsContainer, customStyles } from './ContactsStyles';
import { archivedContact, filterContacts, getContacts } from '../../redux/actions/actions';




const Contact = () => {

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: '70px'
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      width: '190px'
    },
    {
      name: "Customer",
      selector: (row) => row.customer,
      sortable: true,
      width: '130px'
    },
    {
      name: "Email",
      selector: (row) => row.email,
      width: '150px'
    },
    {
      name: "Telephone",
      selector: (row) => row.telephone,
      width: '150px'
    },
    {
      name: "Comment",
      selector: (row) => <p>{row.comment}</p>,
      sortable: true,
      width: '30%',
    },
    {
      name: "Actions",
      selector: (row) => <ArchiveIcon sx={{color: '#135846'}} onClick={() => handleArchivedContact(row.id, row.customer, row.date, row.email, row.telephone, row.comment)} />,
      width: '100px'
    },
  ]

  const dispatch = useDispatch()

  const sidebar = useSelector(state => state.sidebar)
  const data = useSelector(state => state.contacts.contacts)
  const archived = useSelector(state => state.contacts.archived)

  const handleRowClicked = (row) => {
    console.log(row.id);
  }

  const handleArchivedContact = ( id, customer, date, email, telephone, comment ) => {
    if(!archived.find(e => e.id === id)){
      dispatch(archivedContact( {id, date, customer, email, telephone, comment })) 
    } else alert ('Contact already archived!')
  }

  const handleFilterContacts = (filter) => {
    dispatch(filterContacts(filter))
  }


  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <>
      <Topbar title='Contact' />
      <DashboardWrapper>

        {sidebar && <Sidebar />}

        <RightContainer>

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
 
        </RightContainer>
      </DashboardWrapper> 
    </>
  )
}

export default Contact