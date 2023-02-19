import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { HeaderWrapper, IconsContainer } from './HeaderStyles';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { toggleSidebar } from '../../redux/actions/action';

const Header = ({ title }) => {

    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("logged_in")
        localStorage.removeItem("user")
        navigate("/login")
      }

      const handleToggle = () => {
        dispatch(toggleSidebar())
      }

  return (
    <HeaderWrapper>
        <div>
            <MenuOpenIcon sx={{fontSize: 30}} onClick={handleToggle} />
            <h2>{title}</h2>
        </div>
        <IconsContainer>
            <EmailIcon sx={{fontSize: 30}} />
            <NotificationsNoneIcon sx={{fontSize: 30}} />
            <LogoutIcon sx={{fontSize: 30}} onClick={handleLogout} />
        </IconsContainer>
    </HeaderWrapper>
  )
}

export default Header