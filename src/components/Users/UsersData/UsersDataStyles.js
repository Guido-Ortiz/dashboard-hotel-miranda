import styled from "styled-components";

export const Wrapper = styled.div `
    // border: 1px solid fuchsia;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

export const FilterWrapper = styled.div `
    // border: 1px solid red;
    width: 90%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextContainer = styled.div `
    // border: 1px solid blue;
    display: flex;
    flex-direction: row;
    // align-items: flex-end;
    // justify-content: flex-end;

    h4 {
        // border: 1px solid orange;
        margin-right: 10px;
        text-align: right;
        // font: normal normal medium 16px/25px Poppins;
        letter-spacing: 0.5px;
        color: #6E6E6E;

        &:focus {
            color: red;
        }
    }
`;

export const UserDataContainer = styled.div `
    // border: 1px solid red;

`;

export const UserImage = styled.img `
    // border: 1px solid red;
    width: 50%;
    height: 50%;
`;

export const UserData = styled.div `
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 90px;

    h4 {
        // border: 1px solid fuchsia;
        margin: 0;
        text-align: left;
        font: normal normal medium 16px/25px Poppins;
        letter-spacing: 0px;
        color: #212121;
    }

    h5 {
        // border: 1px solid blue;
        margin: 0;
        text-align: left;
        font: normal normal normal 14px/21px Poppins;
        letter-spacing: 0px;
        color: #393939;
    }
`;

export const BtnAddEmployee = styled.button `
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    height: 40px;
    width: 100px;
    border: 1px solid #135846;
    background: #ffffff;
    color: #135846;
    letter-spacing: 0.5px;
    padding: 5px;
    margin: 0 20px;
    border-radius: 4px;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
`;

export const EmployeeStatus = styled.h4 `
    text-align: left;
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: ${props => props.status === 'Inactive' ? '#E23428' : '#5AD07A'};
`;

export const UserTableWrapper = styled.div `
    // border: 1px solid red;
    margin: 0 auto;
    width: 90%;
`;