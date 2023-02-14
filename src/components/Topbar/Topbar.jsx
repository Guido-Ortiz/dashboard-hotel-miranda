import React from 'react';
import Header from '../Header/Header';
import Logo from './Logo/Logo';
import { Wrapper } from './TopbarStyles';

const Topbar = ({ title }) => {
  return (
    <Wrapper>
        <Logo />
        <Header title={title} />
    </Wrapper>
  )
}

export default Topbar