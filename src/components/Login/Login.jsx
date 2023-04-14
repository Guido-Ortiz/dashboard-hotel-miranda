import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AsideContainer, LoginContainer, LoginWrapper } from './LoginStyles';
import logo from '../../resources/logo.png';
import login_image from '../../resources/login_image.png';
import { useUser } from '../../context/userContext';
import { LOGIN } from '../../context/constants';
import apiFetch from '../../helpers/apiFetch';
import { Snackbar, Alert } from '@mui/material';

const admin = {
  email: 'admin@hotelmiranda.com',
  password: '12345'
}

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

  const { dispatch } = useUser()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const req = {
        url: 'login',
        method: 'POST',
        body: input
      }
      const res = await apiFetch(req)

      if (res.token && input.email === admin.email && input.password === admin.password) {
        dispatch({
          type: LOGIN,
          value: {
            email: input.email,
            token: res.token
          }
        })
        navigate('/')
      } else {
        setOpen(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

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
          <input name='email' type='email' value={input.email} onChange={e => handleChange(e)} placeholder='Enter your email' className='input' />
          <label>Password</label>
          <input name='password' type='password' value={input.password} onChange={e => handleChange(e)} placeholder='Enter your password' className='password' />
          <button type='submit'>Login</button>
        </form>
      </LoginContainer>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>Wrong Credentials. Please try again</Alert>
      </Snackbar>

    </LoginWrapper>
  )
}

export default Login