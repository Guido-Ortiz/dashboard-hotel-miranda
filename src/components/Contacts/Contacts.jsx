import React from 'react'
import { useSelector } from 'react-redux'
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Contact = () => {
  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Contact' />
      <DashboardWrapper>

        {sidebar && <Sidebar />}

        <RightContainer>
          <h3>Latest reviews by customers</h3>
        
        </RightContainer>
      </DashboardWrapper>
    </>
  )
}

export default Contact