import { Chip } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DashboardWrapper, RightContainer } from '../../Dashboard/DashboardStyles'
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import { BtnSubmit, FormText, InputWrapper } from '../../Users/UsersForm/UsersFormStyles'

const RoomsForm = () => {
    const sidebar = useSelector(state => state.sidebar)
    const dispatch = useDispatch()
    const amenities = ['Wi-Fi', 'TV', 'Towels', 'AC', 'Parking']
    const [room, setRoom] = useState({
        photo: [],
        type: '',
        number: 100,
        description: '',
        offer: '',
        price: 100,
        discount: 0.05,
        cancel: '',
        amenities: []
    })

    const handleChange = (e) => {
        setRoom({
            ...room,
            [e.target.name]: e.target.value
        })
    }

    const handleAmenities = (e) => {
        // console.log(room.amenities)
        setRoom({
            ...room,
            amenities: [...room.amenities, e.target.value]
        })
    }

    const handleImage = (e) => {
        // console.log('image')
        setRoom({
            ...room,
            photo: [...room.photo, e.target.files]
        })
    }

    return (
        <>
            <Topbar title='Rooms' />
            <DashboardWrapper>
                {sidebar && <Sidebar />}

                <RightContainer>
                    <FormText>Complete the following form to add a new room.</FormText>
                    <InputWrapper>
                        {/* <input type="file" placeholder='Photos' value={room.photo} onChange={e => handleImage(e)} /> */}
                        <select name='type' value={room.type}onChange={e => handleChange(e)}>
                            <option value="">Please select a type</option>
                            <option value="single">Single Bed</option>
                            <option value="double">Double Bed</option>
                            <option value="superior">Double Bed Superior</option>
                            <option value="suite">Suite</option>
                        </select>
                        <input type="number" placeholder='Room number' name='number' value={room.number} onChange={e => handleChange(e)} />
                        <input type="text" placeholder='Description' name='description' value={room.description} onChange={e => handleChange(e)} />
                        <select name='offer'>
                            <option value="">Offer</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <input type="number" placeholder='Discount %' onChange={e => handleChange(e)} />
                        <input type="number" placeholder='Price per night' onChange={e => handleChange(e)} />
                        <input type="text" placeholder='Cancelation policy' onChange={e => handleChange(e)} />
                        <select onChange={e => handleAmenities(e)}>
                            <option value="">Please select room amenities</option>
                            {
                                amenities.map(e => {
                                    return(
                                        <option value={e} key={e}>{e}</option>
                                    )
                                })
                            }
                            
                        </select>
                        {
                            room.amenities.map((amenity, i) => <Chip key={i} label={amenity} />
                            )
                        }
                        <input type="text" placeholder='Amenities' name='amenities' value={room.cancel}  />
                        
                    </InputWrapper>
                    <BtnSubmit>Add Room</BtnSubmit>
                </RightContainer>
            </DashboardWrapper>
        </>
    )
}

export default RoomsForm