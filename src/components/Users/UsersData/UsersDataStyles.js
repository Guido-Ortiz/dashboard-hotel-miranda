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
    border: 1px solid red;
    width: 50%;
    height: 50%;
`;

export const UserData = styled.div `
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    // margin: 0 auto;
    height: 90px;

    h4 {
        border: 1px solid fuchsia;
        margin: 0;
    }

    h5 {
        border: 1px solid blue;
        margin: 0;
    }
`;