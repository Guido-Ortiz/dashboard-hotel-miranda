// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { AsideContainer, LoginContainer, LoginWrapper } from './LoginStyles';

// import logo from '../../resources/logo.png';
// import login_image from '../../resources/login_image.png';
// import { useUser } from '../../context/userContext';
// import { LOGIN } from '../../context/constants';
// import { useLogin } from '../../helpers/useLogin';

// const admin = {
//   email: 'admin@hotelmiranda.com',
//   password: '12345'
// }

// const Login = () => {

//   const navigate = useNavigate()

//   const [input, setInput] = useState({
//     email: '',
//     password: ''
//   })

//   const handleChange = e => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value
//     })
//   }

//   const { dispatch } = useUser()

//   const { login } = useLogin()

//   // const handleLogin = (e) => {
//   //   e.preventDefault()
//   //     if(input.email === admin.email && input.password === admin.password){
//   //       dispatch({
//   //         type: LOGIN,
//   //         value: {
//   //           username: '',
//   //           email: 'admin@hotelmiranda.com'
//   //         }
//   //       })
//   //       navigate('/')
//   //   } else alert ('Wrong credentials')}

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     const response = await fetch('http://localhost:3001/login', {
//       method: "POST",
//       mode: "cors",
//       cache: "default",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify({
//         email: input.email,
//         password: input.password,
//       }),
//     })
//     console.log(response)
//     const token = await response.json()
//     console.log(token)


//     if (token) {
//       login(input.password, input.email)
//       localStorage.setItem('admin', JSON.stringify({
//         token: 'aca va el jwt token',
//         logged: true,
//         admin: {
//           email: input.email,
//           password: input.password
//         },
//         // email: input.email,
//       }))
      
//     } else alert('Wrong credentials')

//     navigate('/')
//   }


//   return (
//     <LoginWrapper>
//       <AsideContainer>
//         <img src={logo} alt='travl Hotel Admin Dashboard' />
//         <h4>Welcome back!</h4>
//         <h6>Email: admin@hotelmiranda.com - Password: 12345</h6>
//         <div>
//           <img src={login_image} alt='travl Hotel Admin Dashboard' />
//         </div>
//       </AsideContainer>

//       <LoginContainer>
//         <h1>Sign in your account</h1>
//         <form onSubmit={handleLogin}>
//           <label>Email</label>
//           <input name='email' type='email' value={input.email} onChange={e => handleChange(e)} placeholder='Enter your email' className='input' />
//           <label>Password</label>
//           <input name='password' type='password' value={input.password} onChange={e => handleChange(e)} placeholder='Enter your password' className='password' />
//           <button type='submit'>Login</button>
//         </form>
//       </LoginContainer>

//     </LoginWrapper>
//   )
// }

// export default Login

















import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AsideContainer, LoginContainer, LoginWrapper } from './LoginStyles';

import logo from '../../resources/logo.png';
import login_image from '../../resources/login_image.png';
import { UserContext, useUser } from '../../context/userContext';
import { LOGIN } from '../../context/constants';
import { useLogin } from '../../helpers/useLogin';
import apiFetch from '../../helpers/apiFetch';

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

  const { login } = useLogin()



  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await apiFetch('login', 'POST', input)
      if(res.token) {
        dispatch({
          type: 'LOGIN',
          value: {
            email: input.email,
            token: res.token
          }
        })
        navigate('/')
      }
    } catch(e) {
      e.target.reset()
    }
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

    </LoginWrapper>
  )
}

export default Login