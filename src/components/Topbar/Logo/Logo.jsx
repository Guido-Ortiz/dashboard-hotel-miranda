import React from 'react';
import logo from '../../../resources/logo.png';
import { Wrapper } from './LogoStyles';

const Logo = () => {
  return (
    <Wrapper>
        <img src={logo} alt='Logo' />
    </Wrapper>
  )
}

export default Logo