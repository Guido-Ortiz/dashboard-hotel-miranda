import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { createRoom } from '../../../redux/actions/actions';
import { BtnSubmit, FormText, InputWrapper } from '../../Users/UsersForm/UsersFormStyles';
import { StyledChip, chipStyle, ChipsContainer } from './RoomsFormStyles';
import { AmenitiesChip } from '../RoomsStyles';

const RoomsForm = () => {

    const dispatch = useDispatch()
    const amenities = ['Wi-Fi', 'TV', 'Towels', 'AC', 'Parking']
    const cancelation = ['If cancelled up to 48 hours before arrival no fee will be charged', 'If cancelled less than 48 hours before arrival 100% of the first night will be charged', 'If you are a no-show, 100% of the first night will be charged']
    const [room, setRoom] = useState({
        number: '',
        price: '',
        offer: '',
        discount: '',
        type: '',
        status: '',
        amenities: [],
        cancel: '',
        // photos: [],
        // description: '',
    })

    const handleChange = (e) => {
        setRoom({
            ...room,
            [e.target.name]: e.target.value
        })
        console.log(room)
    }

    const handleAmenities = (e) => {
        if(!room.amenities.includes(e.target.value)){
            setRoom({
                ...room,
                amenities: [...room.amenities, e.target.value]
            })
        }
    }

    const handleAddRoom = () => {
        // dispatch(createRoom(room))
        alert('Room added succesfully')
    }

    const handleDelete = (e) => {
        setRoom({
            ...room,
            amenities: room.amenities.filter(a => a !== e)
        })
      }

    return (
        <>
            <FormText>Complete the following form to add a new room.</FormText>
            <InputWrapper>
                <div>
                    <h4>Room Number</h4>
                    <input type="number" placeholder='Room number' name='number' onChange={e => handleChange(e)} />
                </div>
                <div>
                    <h4>Price per night</h4>
                    <input type="number" placeholder='Price per night' name='price' onChange={e => handleChange(e)} />
                </div>
                <div>
                    <h4>Offer</h4>
                    <div onChange={e => handleChange(e)}>
                        <input type="radio" name='offer' value="yes" />
                        <h4 for="html">Yes</h4>
                        <input type="radio" name='offer' value="no" />
                        <h4 for="css">No</h4>
                    </div>
                </div>
                <div>
                    <h4>Discount</h4>
                    {room.offer === 'no'
                        ? <input type="number" placeholder='Discount %' disabled />
                        : <input type="number" placeholder='Discount %' name='discount' onChange={e => handleChange(e)} />}

                </div>
                <div>
                    <h4>Room Type</h4>
                    <select name='type' onChange={e => handleChange(e)}>
                        <option value="">Please select a type</option>
                        <option value="single">Single Bed</option>
                        <option value="double">Double Bed</option>
                        <option value="superior">Double Bed Superior</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
                <div>
                    <h4>Room Status</h4>
                    <div onChange={e => handleChange(e)}>
                        <input type="radio" name='status' value="available" />
                        <h4 for="html">Available</h4>
                        <input type="radio" name='status' value="booked" />
                        <h4 for="css">Booked</h4>
                    </div>
                </div>
                <div>
                    <h4>Amenities</h4>
                    <select onChange={e => handleAmenities(e)}>
                        <option value="a">Please select room amenities</option>
                        {
                            amenities.map(e => {
                                return (
                                    <option value={e} key={e}>{e}</option>
                                )
                            })
                        }

                    </select>
                    <ChipsContainer>
                    {
                        room.amenities.map((amenity, i) => 
                        <StyledChip key={i} label={amenity} onDelete={e => handleDelete(amenity)} />
                        )
                    }
                    </ChipsContainer>

                </div>
                <div>
                    <h4>Cancelation Policy</h4>
                    <select name='cancel' onChange={e => handleChange(e)}>
                        <option value="">Please select a cancelation policy</option>
                        {
                            cancelation.map(e => {
                                return (
                                    <option value={e} key={e}>{e}</option>
                                )
                            })
                        }

                    </select>
                </div>
            </InputWrapper>
            <BtnSubmit onClick={handleAddRoom}>Add Room</BtnSubmit>

        </>
    )
}

export default RoomsForm