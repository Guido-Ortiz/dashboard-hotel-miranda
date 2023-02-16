import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import ArchiveIcon from '@mui/icons-material/Archive';
import { contacts } from '../../data/contacts';
import { BtnTopMenu, TopMenu } from '../Bookings/BookingsStyles';
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles';
import Sidebar from '../Sidebar/Sidebar';
import Swiper from '../Swiper/Swiper';
import Topbar from '../Topbar/Topbar';
import { SwiperContainer, TableContactsContainer, customStyles } from './ContactsStyles';

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true
  },
  {
    name: "Customer",
    selector: (row) => row.customer,
    sortable: true
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Telephone",
    selector: (row) => row.telephone,
  },
  {
    name: "Comment",
    selector: (row) => row.comment,
    sortable: true
  },
  {
    name: "Archived",
    selector: (row) => <ArchiveIcon sx={{color: '#135846'}} />,
  },
]



const Contact = () => {
  const sidebar = useSelector(state => state.sidebar)

  const handleRowClicked = (row) => {
    console.log(row.id);
  }

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
            <DataTable columns={columns} data={contacts} defaultSortFieldId pagination={5} onRowClicked={handleRowClicked} customStyles={customStyles} highlightOnHover />
          </TableContactsContainer>

        </RightContainer>
      </DashboardWrapper>
    </>
  )
}

export default Contact