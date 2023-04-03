import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { HeaderWrapper, IconsContainer } from './HeaderStyles';
import { Tooltip } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { toggleSidebar } from '../../redux/actions/actions';
import { useUser } from '../../context/userContext';
import { LOGOUT } from '../../context/constants';

const Header = ({ location, sidebar, setSidebar }) => {

  const dispatchAction = useDispatch()

  const { dispatch } = useUser()

  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({
      type: LOGOUT
    })
    navigate('/login')
  }

  const handleToggle = () => {
    // dispatchAction(toggleSidebar())
    setSidebar(prev => !prev)
  }

  return (
    <HeaderWrapper sidebar={sidebar}>
      <div>
        {sidebar ? <MenuOpenIcon sx={{ fontSize: 30 }} onClick={handleToggle} /> : <ArrowForwardIcon sx={{ fontSize: 30 }} onClick={handleToggle} />}
        {location ? <h2>{location}</h2> : <h2>Dashboard</h2>}
      </div>
      <IconsContainer>
        <EmailIcon sx={{ fontSize: 30 }} />
        <NotificationsNoneIcon sx={{ fontSize: 30 }} />
        <div className="logout">
          <Tooltip title='Logout'>
            <LogoutIcon sx={{ fontSize: 30 }} onClick={handleLogout} data-testid="logout" />
          </Tooltip>
        </div>
      </IconsContainer>
    </HeaderWrapper>
  )
}

export default Header