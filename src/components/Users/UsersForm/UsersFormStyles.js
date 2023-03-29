import styled from "styled-components";

export const FormText = styled.p `
    // border: 1px solid red;
    font-family: 'poppins', sans-serif;
    font-size: 1.05rem;
    font-weight: 500;
    color: #000;
    margin-left: 30px;
    padding: 10px;
    letter-spacing: 1px;
`;

export const InputWrapper = styled.div `
    border: 1px solid fuchsia;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;

    div {
        border: 1px solid green;
        width: 50%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        h4 {
            font-family: 'poppins', sans-serif;
            font-weight: 400;
            line-height: 1.5;
            color: #6E6E6E;
            margin: 0;
        }
    }

    input, select {
        background: #fff;
        border: 0.0625rem solid #ccc7c7;
        padding: 0.3125rem 1.25rem;
        color: #6e6e6e;
        height: 30px;
        // width: 40%;
        border-radius: 5px;
        margin: 10px;
        letter-spacing: 1px;
        outline: none;

        &:hover {
            border: 1px solid #135846;
        }
    }

    select {
        height: 43px;
        width: 44%;
    }
`;

export const BtnSubmit = styled.button `
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    height: 40px;
    width: 130px;
    border: 1px solid #135846;
    background: #135846;
    color: #ffffff;
    letter-spacing: 0.5px;
    padding: 5px;
    margin: 0 20px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 55px;
    margin-bottom: 30px;

    &:hover {
        cursor: pointer;
        border: 1px solid #135846;
        background: #ffffff;
        color: #135846;
    }
`;