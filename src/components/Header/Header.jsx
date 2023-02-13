import React from 'react';
import { useNavigate } from 'react-router';

import { HeaderWrapper, IconsContainer } from './HeaderStyles';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = ({ title }) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("logged_in")
        localStorage.removeItem("user")
        navigate("/login")
      }
  return (
    <HeaderWrapper>
        <div>
            <MenuOpenIcon sx={{fontSize: 40}} />
            <h2>{title}</h2>
        </div>
        <IconsContainer>
            <EmailIcon sx={{fontSize: 40}} />
            <NotificationsNoneIcon sx={{fontSize: 40}} />
            <LogoutIcon sx={{fontSize: 40}} onClick={handleLogout} />
        </IconsContainer>
    </HeaderWrapper>
  )
}

export default Header