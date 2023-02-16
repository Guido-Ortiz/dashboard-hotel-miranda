import React from 'react'
import { useSelector } from 'react-redux'
import { DashboardWrapper, RightContainer } from '../../Dashboard/DashboardStyles'
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import { BtnSubmit, FormText, InputWrapper } from '../../Users/UsersForm/UsersFormStyles'

const RoomsForm = () => {
    const sidebar = useSelector(state => state.sidebar)
    return (
        <>
            <Topbar title='Rooms' />
            <DashboardWrapper>
                {sidebar && <Sidebar />}

                <RightContainer>
                    <FormText>Complete the following form to add a new room.</FormText>
                    <InputWrapper>
                        <select>
                            <option value="">Please select a type</option>
                            <option value="single">Single Bed</option>
                            <option value="double">Double Bed</option>
                            <option value="superior">Double Bed Superior</option>
                            <option value="suite">Suite</option>
                        </select>
                        <input type="number" placeholder='Room number' />
                        <input type="text" placeholder='Description' />
                        <input type="text" />
                        <input type="number" placeholder='Price per night' />
                        <input type="number" placeholder='Discount %' />
                        <input type="text" placeholder='Cancelation policy' />
                        <input type="text" placeholder='Amenities' />
                        <input type="text" />
                    </InputWrapper>
                    <BtnSubmit>Add Room</BtnSubmit>
                </RightContainer>
            </DashboardWrapper>
        </>
    )
}

export default RoomsForm