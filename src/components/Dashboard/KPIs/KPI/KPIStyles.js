import styled from "styled-components";

export const WrapperKPI = styled.div `
    // border: 1px solid fuchsia;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100%;
    margin-right: 10px;
    padding: 10px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;

    span {
        // border: 1px solid red;
        height: 65px;
        width: 65px;
        border-radius: 8px;
        background: #FFEDEC;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    span:hover {
        cursor: pointer;
        background: #E23428;
        svg {
            color: #ffffff;
        }
    }

    svg {
        color: #E23428;
        height: 30px;
        width: 30px;
        margin: 0 auto;
    }

    div {
        // border: 1px solid red;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-left: 15px;

        h4 {
            color: #393939;
            text-align: center;
            font: normal normal 600 30px/46px Poppins;
            letter-spacing: 0px;
            margin: 10px auto;
        }

        h6 {
            text-align: left;
            font: normal normal 300 14px/21px Poppins;
            letter-spacing: 0px;
            color: #787878;
            margin: 0 auto;
        }
    }
`;