import styled from "styled-components";

export const RoomImage = styled.img `
    // border: 1px solid red;
    width: 100%;
    height: 100%;
`;

export const RoomsTableContainer = styled.div `
    // border: 1px solid red;
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
`;

export const BtnRoomStatus = styled.div `
    font-family: 'poppins', sans-serif;
    width: 90px;
    height: 40px;
    border: none;
    background: ${props => props.status === 'Available' ? '#5AD07A' : '#E23428'};
    color: #ffffff;
    letter-spacing: 0.5px;
    border-radius: 10px;
    font: normal normal medium 16px/25px Poppins;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const AmenitiesChip = styled.div `
// dispaly: block;
    border: 1px solid #135846;
    width: auto;
    padding: 2px 4px;
    letter-spacing: 0.5px;
    border-radius: 4px;
    margin: 4px;
    color: #135846;
`;

export const AmenitiesContainer = styled.div `
    // border: 1px dashed green;
    font-family: 'poppins', sans-serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export  const BtnToRoomForm = styled.button `
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    height: 40px;
    width: 100px;
    border: none;
    background: #135846;
    color: #ffffff;
    letter-spacing: 0.5px;
    padding: 5px;
    margin: 0 20px;
    border-radius: 0.8rem;
    text-transform: uppercase;
    margin-top: 30px;
    margin-left: 30px;

    &:hover {
        cursor: pointer;
        border: 1px solid #135846;
        background: #ffffff;
        color: #135846;
    }
`;

export const RoomInfoContainer = styled.div `
        // border: 1px solid blue;
        width: auto;
        margin: 0;

        h4 {
            margin: 0;
            font-size: 0.875rem !important;
            line-height: 1.6;
            color: #135846;
            font-weight: 400;
        }

        h3 {
            font-weight: 500;
            font-size: 1rem !important;
            line-height: 1.6;
            white-space: nowrap !important;
            margin: 0;
        }
    
`;

export const Price = styled.h4 `
    text-align: left;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #212121;   

    span {
        text-align: left;
        font: normal normal normal 12px/19px Poppins;
        letter-spacing: 0px;
        color: #799283;
    }
`;

export const RoomType = styled.h4 `
    text-align: left;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 1px;
    color: #393939;
`;

export const BtnTabsAllRooms = styled.button `
    font-size: 1rem;
    border: none;
    font-weight: ${props => props.all ? '700' : '500'};
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    // margin-right: 2px;
    color: ${props => props.all ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.all ? '2px solid #135846' : '1px solid #6E6E6E'};
        
    &:hover {
        cursor: pointer;
    }
`;

export const BtnTabsAvailable = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: ${props => props.available ? '700' : '500'};
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    color: ${props => props.available ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.available ? '2px solid #135846' : '1px solid #6E6E6E'};
    
    &:hover {
        cursor: pointer;
    }
`;

export const BtnTabsBooked = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: ${props => props.booked ? '700' : '500'};
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    color: ${props => props.booked ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.booked ? '2px solid #135846' : '1px solid #6E6E6E'};
        
    &:hover {
        cursor: pointer;
    }
`;