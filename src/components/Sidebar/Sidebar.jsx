import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import { SidebarWrapper } from './SidebarStyles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyIcon from '@mui/icons-material/Key';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonIcon from '@mui/icons-material/Person';
import AdminProfile from './AdminProfile/AdminProfile';

const Sidebar = ({ location, sidebar }) => {
  return (
    <SidebarWrapper location={location} sidebar={sidebar}>
      <SidebarItem item='Dashboard' icon={<DashboardIcon />} link='/' sidebar={sidebar} />
      <SidebarItem item='Bookings' icon={<KeyIcon />} link='/bookings' sidebar={sidebar}/>
      <SidebarItem item='Rooms' icon={<CalendarMonthIcon />} link='/rooms' sidebar={sidebar} />
      <SidebarItem item='Contact' icon={<ContactsIcon />} link='/contact' sidebar={sidebar} />
      <SidebarItem item='Users' icon={<PersonIcon />} link='/users' sidebar={sidebar} />
      <AdminProfile sidebar={sidebar} />
    </SidebarWrapper>
  )
}

export default Sidebar