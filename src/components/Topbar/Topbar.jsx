import React from 'react';
import Header from '../Header/Header';
import Logo from './Logo/Logo';
import { Wrapper } from './TopbarStyles';

const Topbar = () => {
  return (
    <Wrapper>
        <Logo />
        <Header title='Dashboard' />
    </Wrapper>
  )
}

export default Topbar