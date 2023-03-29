import React from 'react';
import logo from '../../../resources/logo.png';
import logo_2 from '../../../resources/logo_2.png';
import { Wrapper } from './LogoStyles';

const Logo = ({ sidebar }) => {
  return (
    <Wrapper>
        { sidebar ? <img src={logo} alt='Logo' /> : <img src={logo_2} alt='Logo' /> }
    </Wrapper>
  )
}

export default Logo