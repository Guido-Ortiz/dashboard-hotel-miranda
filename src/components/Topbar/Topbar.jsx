import React from 'react';
import Header from '../Header/Header';
import Logo from './Logo/Logo';
import { Wrapper } from './TopbarStyles';

const Topbar = ({ title, location }) => {
  return (
    <Wrapper location={location}>
        <Logo />
        <Header title={title} />
    </Wrapper>
  )
}

export default Topbar