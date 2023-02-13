import React from 'react'
import { Link } from 'react-router-dom'
import { ItemWrapper } from './SidebarItemStyles'

const SidebarItem = ({ icon, item, link }) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <ItemWrapper>
                {icon}
                <h4>{item}</h4>
            </ItemWrapper>
        </Link>
    )
}

export default SidebarItem