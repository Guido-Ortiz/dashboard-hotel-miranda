import React from 'react';
import KPI from './KPI/KPI';
import { WrapperKPIs } from './KPIsStyles';

import BedIcon from '@mui/icons-material/Bed';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const KPIs = () => {
  return (
    <WrapperKPIs>
        <KPI number={2} name='Reservations' icon={<BedIcon />} />
        <KPI number={2} name='Ocupation' icon={<EventAvailableIcon />} />
        <KPI number={2} name='Check-In' icon={<CheckIcon />} />
        <KPI number={2} name='Check-Out' icon={<CloseIcon />} />
    </WrapperKPIs>
  )
}

export default KPIs