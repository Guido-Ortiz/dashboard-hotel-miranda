import React from 'react'
import { WrapperKPI } from './KPIStyles'

const KPI = ({ icon, number, name }) => {
  return (
    <WrapperKPI>
        <span>
            {icon}
        </span>
        <div>
            <h4>{number}</h4>
            <h6>{name}</h6>
        </div>
    </WrapperKPI>
  )
}

export default KPI