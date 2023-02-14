import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Rooms = () => {
  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Rooms' />
      {sidebar && <Sidebar />}
    </>
  )
}

export default Rooms