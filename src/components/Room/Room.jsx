import React from 'react'
import { useParams } from 'react-router'

const Room = () => {

    let { room_id } = useParams()

    return (
        <div>Room {room_id}</div>
    )
}

export default Room