import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AsideContainer, LoginContainer, LoginWrapper } from './LoginStyles';

import logo from '../../resources/logo.png';
import login_image from '../../resources/login_image.png';

const Login = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // const logged_user = JSON.parse(localStorage.getItem("user"))
    // if(input.email === logged_user.email && input.password === logged_user.password){
      if(input.email === 'admin@hotelmiranda.com' && input.password === '12345'){
        localStorage.setItem("user", 'admin@hotelmiranda.com')
        localStorage.setItem("logged_in", true)
        navigate('/')
    } else alert ('wrong credencials')}

  return (
    <LoginWrapper>
      <AsideContainer>
        <img src={logo} alt='travl Hotel Admin Dashboard' />
        <h4>Welcome back!</h4>
        <h6>Email: admin@hotelmiranda.com - Password: 12345</h6>
        <div>
          <img src={login_image} alt='travl Hotel Admin Dashboard' />
        </div>
      </AsideContainer>

      <LoginContainer>
        <h1>Sign in your account</h1>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input name='email' type='email' value={input.email} onChange={e => handleChange(e)} placeholder='Enter your email'/>
          <label>Password</label>
          <input name='password' type='password' value={input.password} onChange={e => handleChange(e)} placeholder='Enter your password'/>
          <button type='submit'>Login</button>
        </form>
      </LoginContainer>

    </LoginWrapper>
  )
}

export default Login