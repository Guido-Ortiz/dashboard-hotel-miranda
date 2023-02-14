import styled from "styled-components";

export const Wrapper = styled.div `
    border: 1px solid fuchsia;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 82vw;
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