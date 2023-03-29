import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../../redux/actions/actions'
import { FormText, InputWrapper, BtnSubmit } from './UsersFormStyles'

const UsersForm = () => {

  const dispatch = useDispatch()

  const [user, setUser] = useState({
    photo: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    start: '',
    description: '',
    status: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(user)
  }

  const handleSubmit = () => {
    console.log(user)
    dispatch(createUser(user))
  }

  return (
    <>
      <FormText>Complete the following form to add a new employee to your staff.</FormText>
      <InputWrapper>
        <div>
          <h4>Full Name</h4>
          <input type="text" placeholder='Jane Doe' name='name' value={user.name} onChange={(e) => handleChange(e)} />
        </div>
        <input type="text" placeholder='Insert your photo' name='photo' value={user.photo} onChange={(e) => handleChange(e)} />
        <select name='position' value={user.position} onChange={(e) => handleChange(e)}>
          <option value="">Please select a position</option>
          <option value="manager">Manager</option>
          <option value="receptionist">Receptionist</option>
          <option value="service">Service</option>
        </select>
        <input type="text" placeholder='E-mail' name='email' value={user.email} onChange={(e) => handleChange(e)} />
        <input type="text" placeholder='Phone' name='phone' value={user.phone} onChange={(e) => handleChange(e)} />
        <input type="date" placeholder='Start Date' name='start' value={user.start} onChange={(e) => handleChange(e)} />
        <input type="text" placeholder='Description' name='description' value={user.description} onChange={(e) => handleChange(e)} />
        <select name='status' value={user.status} onChange={(e) => handleChange(e)}>
          <option value="">Please select a status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <input type="password" placeholder='Password' name='password' value={user.password} onChange={(e) => handleChange(e)} />
      </InputWrapper>
      <BtnSubmit onClick={handleSubmit}>Add Employee</BtnSubmit>

    </>
  )
}

export default UsersForm