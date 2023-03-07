import React from 'react';
const Header = require('../Header/Header');
import Logo from './Logo/Logo';
const { Wrapper } = require('./TopbarStyles');

const Topbar = ({ location }) => {
  // const title = location.slice(1)
  const title = location.split('/')
  
  return (
    <Wrapper location={location}>
        <Logo />
        <Header location={title[1]} />
    </Wrapper>
  )
}

export default Topbar