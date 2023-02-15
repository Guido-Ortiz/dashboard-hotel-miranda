import React from 'react'
import { useSelector } from 'react-redux'
import { DashboardWrapper, RightContainer } from '../Dashboard/DashboardStyles'
import Sidebar from '../Sidebar/Sidebar'
import Swiper from '../Swiper/Swiper'
import Topbar from '../Topbar/Topbar'
import { SwiperContainer } from './ContactsStyles'

const Contact = () => {
  const sidebar = useSelector(state => state.sidebar)
  return (
    <>
      <Topbar title='Contact' />
      <DashboardWrapper>

        {sidebar && <Sidebar />}

        <RightContainer>

          <SwiperContainer>
            <Swiper />
          </SwiperContainer>
          
        </RightContainer>
      </DashboardWrapper>
    </>
  )
}

export default Contact