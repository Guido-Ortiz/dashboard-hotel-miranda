import styled from "styled-components";

export const SliderItemWrapper = styled.div `
    // border: 1px solid fuchsia;
    width: auto;
    height: auto;
    margin-right: 10px;
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #6E6E6E;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
    padding: 20px;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 16px 30px #00000014;
    }
`;

export const SliderItemPeople = styled.div `
    // border: 1px solid orange;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    div {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: auto;
        margin: 0;
    }
`;