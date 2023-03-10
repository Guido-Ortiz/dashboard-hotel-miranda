import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import { SidebarWrapper } from './SidebarStyles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyIcon from '@mui/icons-material/Key';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonIcon from '@mui/icons-material/Person';
import AdminProfile from './AdminProfile/AdminProfile';

const Sidebar = ({ location }) => {
  return (
    <SidebarWrapper location={location}>
      <SidebarItem item='Dashboard' icon={<DashboardIcon />} link='/' />
      <SidebarItem item='Bookings' icon={<KeyIcon />} link='/bookings' />
      <SidebarItem item='Rooms' icon={<CalendarMonthIcon />} link='/rooms' />
      <SidebarItem item='Contact' icon={<ContactsIcon />} link='/contact' />
      <SidebarItem item='Users' icon={<PersonIcon />} link='/users' />
      <AdminProfile />
    </SidebarWrapper>
  )
}

export default Sidebar