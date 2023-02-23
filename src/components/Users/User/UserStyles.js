import styled from "styled-components";

export const UserContainer = styled.div `
    // border: 1px solid orange;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-top: 15px;

    img {
        height: 100%;
        border-radius: 12px;
    }

    div {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start !important;
        margin-left: 15px;
        height: 100%;
        

        h3 {
            text-align: left;
            font: normal normal medium 16px/25px Poppins;
            letter-spacing: 0px;
            color: #212121;
            margin: 0 auto
        }

        h4 {
            text-align: left !important;
            font: normal normal normal 14px/21px Poppins;
            letter-spacing: 0px;
            color: #135846;
            margin: 0 auto
        }

        h5{
            text-align: left;
            font: normal normal normal 14px/21px Poppins;
            letter-spacing: 0px;
            color: #393939; 
            margin: 0 auto
        }
    }
`;

export const DescriptionText = styled.p `
    // border: 1px solid green;
    width: 302px;
    text-align: left;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
    margin: 0 10px;
`;

export const Email = styled.p `
    // border: 1px solid green;
    width: auto;
    text-align: left;
    font: normal normal normal 16px/25px Poppins;
    color: #393939;
    margin: 0 5px;
`;

export const ActiveBtn = styled.button `
    border: none;
    text-transform: uppercase;
    color: #68e365;
    font-weight: 600;
    font-size: 1rem;
`;

export const InactiveBtn = styled.button `
    border: none;
    text-transform: uppercase;
    color: #E23428;
    font-weight: 600;
    font-size: 1rem;
`;