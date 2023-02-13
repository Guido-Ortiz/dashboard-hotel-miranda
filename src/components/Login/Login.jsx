import React, { useState } from 'react'
import { useNavigate } from 'react-router'

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
      if(input.email === 'guido@gmail.com' && input.password === '12345'){
        localStorage.setItem("user", 'guido@gmail.com')
        localStorage.setItem("logged_in", true)
        navigate('/')
    } else alert ('wrong credencials')}

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name='email' type='email' value={input.email} onChange={e => handleChange(e)} />
        <input name='password' type='password' value={input.password} onChange={e => handleChange(e)} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login