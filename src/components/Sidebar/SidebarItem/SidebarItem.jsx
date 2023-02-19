import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ItemWrapper } from './SidebarItemStyles'

const SidebarItem = ({ icon, item, link }) => {
    const location = useLocation()
    // console.log(location);
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <ItemWrapper location={location.pathname} link={link}>
                {icon}
                <h4>{item}</h4>
            </ItemWrapper>
        </Link>
    )
}

export default SidebarItem