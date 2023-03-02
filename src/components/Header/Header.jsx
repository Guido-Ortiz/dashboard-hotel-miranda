import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { HeaderWrapper, IconsContainer } from './HeaderStyles';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { toggleSidebar } from '../../redux/actions/actions';
import { useUser } from '../../context/userContext';
import { LOGOUT } from '../../context/constants';

const Header = ({ location }) => {

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
    dispatchAction(toggleSidebar())
  }

  return (
    <HeaderWrapper>
      <div>
        <MenuOpenIcon sx={{ fontSize: 30 }} onClick={handleToggle} />
        { location ? <h2>{location}</h2> : <h2>Dashboard</h2> }
      </div>
      <IconsContainer>
        <EmailIcon sx={{ fontSize: 30 }} />
        <NotificationsNoneIcon sx={{ fontSize: 30 }} />
        <div className="logout"><LogoutIcon sx={{ fontSize: 30 }} onClick={handleLogout} data-testid="logout"  /></div>
      </IconsContainer>
    </HeaderWrapper>
  )
}

export default Header