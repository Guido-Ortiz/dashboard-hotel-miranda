import styled from "styled-components";

export const SliderItemWrapper = styled.div`
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
    // box-shadow: 0px 4px 4px #00000005;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #135846;
    margin: 0 auto;
    margin-right: 10px;

    &:hover {
        cursor: pointer;
        // box-shadow: 0px 16px 30px #00000014;
    }
`;

export const SliderItemPeople = styled.div`
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

export const BoxSwiper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background: #ffffff;
    border: 2px solid #135846;
    box-shadow: 24px;
    padding: 20px;

    h3 {
        text-align: left;
        font: normal normal medium 24px/35px Poppins;
        color: #212121;
        letter-spacing: 1px;
    }

    div {
        // border: 1px solid red;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
    }

    select {
        height: 43px;
        width: 44%;
        border: 1px solid #135846;
        margin: 10px;
        border-radius: 8px;
        font: normal normal normal 14px/21px Poppins;
        letter-spacing: 0.5px;
        color: #363636;
    }
`;
