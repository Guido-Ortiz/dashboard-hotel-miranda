import React from 'react'
import { useSelector } from 'react-redux'
import { RightContainer } from '../Dashboard/DashboardStyles'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { PageWrapper } from './PageLayoutStyles'
import Dashboard from '../Dashboard/Dashboard'

const PageLayout = () => {
    const sidebar = useSelector(state => state.sidebar)

  return (
    <>
        <Topbar />
        <PageWrapper>
            { sidebar && <Sidebar /> }
            <RightContainer>
                <Dashboard />
                
            </RightContainer>
        </PageWrapper>
    </>
  )
}

export default PageLayout