import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Logo from './Logo/Logo';
import { Wrapper } from './TopbarStyles';

const Topbar = ({ location }) => {

  const title = location.split('/')

  return (
    <Wrapper location={location}>
      <Link to='/'>
        <Logo />
      </Link>
      <Header location={title[1]} />
    </Wrapper>
  )
}

export default Topbar