import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Bookings = () => {

  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Bookings' />
      {sidebar && <Sidebar />}
    </>
  )
}

export default Bookings