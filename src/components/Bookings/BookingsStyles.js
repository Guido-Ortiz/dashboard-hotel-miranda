import styled from "styled-components";

export const TopMenu = styled.div`
    // border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
        
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    
        h4 {
            font-size: 1rem;
            font-weight: 500;
            padding: 0.5rem 1.25rem;
            color: #6E6E6E;
            font-family: 'poppins', sans-serif;
    
            &:hover {
                cursor: pointer;
                color: #135846;
            }
        }

        input {
            width: 250px;
            height: 32px;
            border: none;
            border: 1px solid #135846;
            border-radius: 4px;
            outline: none;
            padding: 5px;
            background: #FCFCFC;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.5;
        }
    }    
`;

export const BtnTopMenu = styled.button `
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    height: 40px;
    width: 80px;
    border: none;
    background: #135846;
    color: #ffffff;
    letter-spacing: 0.5px;
    padding: 5px;
    margin: 0 20px;
    border-radius: 4px;
    text-transform: uppercase;
`;

export const BtnStatus = styled.button `
    // border: 1px solid red;
    color: #ffffff;
    letter-spacing: 1px;
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    height: 40px;
    width: 90px;
    border: none;
    padding: 5px;
    border-radius: 4px;
    background: ${props => props.status === 'Check-In' ? '#68e365' : props.status === 'Check-Out' ? '#E23428' : 'orange'}
`;

export const BookingTableContainer = styled.div `
    // border: 1px solid red;
    width: 90%;
    margin-top: 20px;
    margin-lefet: 10px;
    margin: 0 auto;
`;