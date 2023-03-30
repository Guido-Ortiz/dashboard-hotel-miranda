import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/actions/actions';
import { FormText, InputWrapper, BtnSubmit, radio, label } from './UsersFormStyles';
import { RadioGroup, FormControlLabel, FormControl, Radio } from '@mui/material'

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
          {/* <div>
            <input type="radio" name='status' value="HTML" />
            <h4 for="html">Active</h4>
            <input type="radio" name='status' value="CSS" />
            <h4 for="css">Inactive</h4>
          </div> */}
          <FormControl sx={{ height: '30px' }} onChange={e => handleChange(e)}>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" defaultValue="active">
              <div>
                <FormControlLabel name='status' value="active" control={<Radio sx={radio} />} label="Active" sx={label} />
                <FormControlLabel name='status' value="inactive" control={<Radio sx={radio} />} label="Inactive" sx={label} />
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
      <BtnSubmit onClick={handleSubmit}>Add Employee</BtnSubmit>

    </>
  )
}

export default UsersForm