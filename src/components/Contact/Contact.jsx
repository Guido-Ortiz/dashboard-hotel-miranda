import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Contact = () => {
  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Contact' />
      {sidebar && <Sidebar />}
    </>
  )
}

export default Contact