import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ItemWrapper } from './SidebarItemStyles'

const SidebarItem = ({ icon, item, link, sidebar }) => {
    const location = useLocation()
    
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <ItemWrapper location={location.pathname} link={link} sidebar={sidebar}>
                {icon}
                <h4>{item}</h4>
            </ItemWrapper>
        </Link>
    )
}

export default SidebarItem