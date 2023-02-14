import React from 'react'
import { useSelector } from 'react-redux'
import { DashboardWrapper } from '../Dashboard/DashboardStyles'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import UsersData from './UsersData/UsersData'

const Users = () => {
  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Users' />
      <DashboardWrapper>
        {sidebar && <Sidebar />}
        <UsersData />
      </DashboardWrapper>
    </>
  )
}

export default Users