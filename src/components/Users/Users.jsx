import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Users = () => {
  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Users' />
      {sidebar && <Sidebar />}
    </>
  )
}

export default Users