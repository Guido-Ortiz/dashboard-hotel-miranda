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
    // border: 1px solid fuchsia;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;

    div {
        // border: 1px solid green;
        width: 45%;
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

        input {
            margin: 0;
            width: 90%;
            height: 30px;
            background: #fff;
            border: 0.0625rem solid #ccc7c7;
            padding: 0.3125rem 1.25rem;
            color: #6e6e6e;
            border-radius: 1rem;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.5;
            outline: none;
        }

        div {
            width: 48%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
    }

    select {
        margin: 0;
        background: #fff;
        border: 0.0625rem solid #ccc7c7;
        padding: 0.3125rem 1.25rem;
        color: #6e6e6e;
        height: 30px;
        border-radius: 1rem;
        margin: 10px;
        letter-spacing: 1px;
        outline: none;

        // &:hover {
        //     border: 1px solid #135846;
        // }
    }

    select {
        height: 43px;
        width: 98%;
        
        option {
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.5;
        }
    }
`;

export const BtnSubmit = styled.button `
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    height: 40px;
    width: 130px;
    // border: 1px solid #135846; 
    // background: #135846;
    border: 1px solid #E23428; 
    background: #E23428;
    color: #ffffff;
    letter-spacing: 0.5px;
    padding: 5px;
    margin: 0 20px;
    border-radius: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 65px;
    margin-bottom: 30px;

    &:hover {
        cursor: pointer;
        border: 1px solid #135846;
        background: #ffffff;
        color: #135846;
    }
`;