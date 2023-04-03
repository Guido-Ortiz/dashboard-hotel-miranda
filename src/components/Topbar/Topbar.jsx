import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Logo from './Logo/Logo';
import { Wrapper } from './TopbarStyles';

const Topbar = ({ location, sidebar, setSidebar }) => {

  const title = location.split('/')

  return (
    <Wrapper location={location}>
      <Link to='/'>
        <Logo sidebar={sidebar} />
      </Link>
      <Header location={title[1]} sidebar={sidebar} setSidebar={setSidebar} />
    </Wrapper>
  )
}

export default Topbar