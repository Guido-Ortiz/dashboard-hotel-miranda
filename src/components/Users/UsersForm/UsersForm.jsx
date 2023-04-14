import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { FormText, InputWrapper, BtnSubmit, radio, label } from './UsersFormStyles';
import { RadioGroup, FormControlLabel, FormControl, Radio } from '@mui/material'
import { editUser, postUser } from '../../../redux/features/usersSlice';
import AlertComponent from '../../Alert/Alert';

const UsersForm = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users.data)
  const { user_id } = useParams()
  const singleUser = users?.filter(e => e._id === user_id)

  const [user, setUser] = useState(!user_id ? {
    username: '',
    photo: '',
    email: '', 
    phone: '',
    start: '',
    description: '',
    userstatus: '',
    password: ''
  } : {
    username: singleUser[0].username,
    photo: singleUser[0].photo,
    email: singleUser[0].email,
    phone: singleUser[0].phone,
    start: singleUser[0].start,
    description: singleUser[0].description,
    userstatus: singleUser[0].userstatus,
    password: singleUser[0].password
  })
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postUser(user))
    setOpen(true)
    navigate('/users')
  }

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editUser({ user_id, user }))
    setOpen(true)
    navigate('/users')
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      {user_id
        ? <FormText>Edit User #{user_id} information</FormText>
        : <FormText>Complete the following form to add a new employee to your staff.</FormText>
      }

      <InputWrapper>
        <div>
          <h4>Full Name</h4>
          <input type="text" placeholder='Jane Doe' name='username' value={user.username} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <h4>E-mail</h4>
          <input type="text" placeholder='janedoe@email.com' name='email' value={user.email} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <h4>Phone</h4>
          <input type="text" placeholder='Phone' name='phone' value={user.phone} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <h4>Start Date</h4>
          <input type="date" placeholder='Start Date' name='start' value={user.start} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <h4>Position</h4>
          <select name='position' value={user.position} onChange={(e) => handleChange(e)}>
            <option value="">Please select a position</option>
            <option value="manager">Manager</option>
            <option value="receptionist">Receptionist</option>
            <option value="service">Service</option>
          </select>
        </div>
        <div>
          <h4>Status</h4>
          <FormControl sx={{ height: '30px' }} onChange={e => handleChange(e)}>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" defaultValue="active">
              <div>
                <FormControlLabel name='userstatus' value="Active" control={<Radio sx={radio} />} label="Active" sx={label} />
                <FormControlLabel name='userstatus' value="Inactive" control={<Radio sx={radio} />} label="Inactive" sx={label} />
              </div>
            </RadioGroup>
          </FormControl>

        </div>
        <div>
          <h4>Photo</h4>
          <input type="text" placeholder='Insert your photo' name='photo' value={user.photo} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <h4>Password</h4>
          <input type="password" placeholder='Password' name='password' value={user.password} onChange={(e) => handleChange(e)} />
        </div>

      </InputWrapper>
      {
        user_id 
          ? <BtnSubmit onClick={(e) => handleEdit(e)}>Update</BtnSubmit>
          : <BtnSubmit onClick={(e) => handleSubmit(e)}>Add Employee</BtnSubmit>
      }

      <AlertComponent open={open} setOpen={setOpen} text='User updated' />

    </>
  )
}

export default UsersForm