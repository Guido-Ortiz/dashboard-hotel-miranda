import React from 'react'
import { BtnAdminProfile, ProfileContainer } from './AdminProfileStyles'
import admin from '../../../resources/admin.jpg';

const AdminProfile = () => {
  return (
    <ProfileContainer>
        <img src={admin} alt='Admin Profile' />
        <h4>Guido Ortiz</h4>
        <h5>guido@hotelmiranda.com</h5>
        <BtnAdminProfile>Edit</BtnAdminProfile>
    </ProfileContainer>
  )
}

export default AdminProfile