import React from 'react';
import Header from '../Header/Header';
import Logo from './Logo/Logo';
import { Wrapper } from './TopbarStyles';

const Topbar = ({ location }) => {
  // const title = location.slice(1)
  const title = location.split('/')
  // console.log(t);
  return (
    <Wrapper location={location}>
        <Logo />
        <Header location={title[1]} />
    </Wrapper>
  )
}

export default Topbar