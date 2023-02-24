import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createRoom } from '../../../redux/actions/actions';
import { BtnSubmit, FormText, InputWrapper } from '../../Users/UsersForm/UsersFormStyles';
// import { useNavigate } from 'react-router';

const RoomsForm = () => {

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const amenities = ['Wi-Fi', 'TV', 'Towels', 'AC', 'Parking']
    const [room, setRoom] = useState({
        photos: [],
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

    // const handleImage = (e) => {
    //     // console.log('image')
    //     setRoom({
    //         ...room,
    //         photo: [...room.photo, e.target.files]
    //     })
    // }

    const handleAddRoom = () => {
        dispatch(createRoom(room))
        alert('Room added succesfully')
        // navigate("/rooms")
    }

    return (
        <>

            <FormText>Complete the following form to add a new room.</FormText>
            <InputWrapper>
                {/* <input type="file" placeholder='Photos' value={room.photo} onChange={e => handleImage(e)} /> */}
                <input type="text" placeholder='Photos' value={room.photo} />
                <select name='type' value={room.type} onChange={e => handleChange(e)}>
                    <option value="">Please select a type</option>
                    <option value="single">Single Bed</option>
                    <option value="double">Double Bed</option>
                    <option value="superior">Double Bed Superior</option>
                    <option value="suite">Suite</option>
                </select>
                <input type="number" placeholder='Room number' name='number' value={room.number} onChange={e => handleChange(e)} />
                <input type="text" placeholder='Description' name='description' value={room.description} onChange={e => handleChange(e)} />
                <select name='offer' onChange={(e) => handleChange(e)}>
                    <option value="">Offer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <input type="number" placeholder='Discount %' name='discount' onChange={e => handleChange(e)} />
                <input type="number" placeholder='Price per night' name='price' onChange={e => handleChange(e)} />
                <input type="text" placeholder='Cancelation policy' name='cancel' onChange={e => handleChange(e)} />
                <select onChange={e => handleAmenities(e)}>
                    <option value="">Please select room amenities</option>
                    {
                        amenities.map(e => {
                            return (
                                <option value={e} key={e}>{e}</option>
                            )
                        })
                    }

                </select>
                {
                    room.amenities.map((amenity, i) => <Chip key={i} label={amenity} />
                    )
                }
                {/* <input type="text" placeholder='Amenities' name='amenities' value={room.cancel}  /> */}

            </InputWrapper>
            <BtnSubmit onClick={handleAddRoom}>Add Room</BtnSubmit>

        </>
    )
}

export default RoomsForm