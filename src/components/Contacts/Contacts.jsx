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
import { getContacts } from '../../redux/actions/actions';

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
    name: "Archived",
    selector: (row) => <ArchiveIcon sx={{color: '#135846'}} />,
    width: '100px'
  },
]



const Contact = () => {

  const dispatch = useDispatch()

  const sidebar = useSelector(state => state.sidebar)
  const data = useSelector(state => state.contacts.contacts)

  const handleRowClicked = (row) => {
    console.log(row.id);
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
              <h4>All Contacts</h4>
              <h4>Archived</h4>
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