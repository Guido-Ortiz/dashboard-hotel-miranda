import React from 'react';
// import logo from '../../../resources/logo.png';
const logo = require('../../../resources/logo.png')
const { Wrapper } = require('./LogoStyles.ts')
// import { Wrapper } from './LogoStyles';

const Logo = () => {
  return (
    <Wrapper>
        <img src={logo} alt='Logo' />
    </Wrapper>
  )
}

export default Logo