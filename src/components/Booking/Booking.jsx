import React from 'react'
import { useParams } from 'react-router'

const Booking = () => {

    let { booking_id} = useParams()

  return (
    <div>Booking {booking_id}</div>
  )
}

export default Booking