import React from 'react'
import { useSelector } from 'react-redux'
import { DashboardWrapper, RightContainer } from '../../Dashboard/DashboardStyles'
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
// import { BtnAddEmployee } from '../UsersData/UsersDataStyles'
import { FormText, InputWrapper, BtnSubmit } from './UsersFormStyles'


const UsersForm = () => {
  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Users' />
      <DashboardWrapper>
        { sidebar && <Sidebar />}

        <RightContainer>
          <FormText>Complete the following form to add a new employee to your staff.</FormText>
          <InputWrapper>
            <input type="text" placeholder='Insert your photo' />
            <input type="text" placeholder='Full Name' />
            <select>
              <option value="">Please select a position</option>
              <option value="manager">Manager</option>
              <option value="receptionist">Receptionist</option>
              <option value="service">Service</option>
            </select>
            <input type="text" placeholder='E-mail' />
            <input type="text" placeholder='Phone' />
            <input type="date" placeholder='Start Date' />
            <input type="text" placeholder='Description' />
            <select>
              <option value="">Please select a status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <input type="password" placeholder='Password'/>
          </InputWrapper>
          <BtnSubmit>Add Employee</BtnSubmit>
        </RightContainer>

      </DashboardWrapper>
    </>
  )
}

export default UsersForm