import styled from "styled-components";

export const DashboardWrapper = styled.div `
    // border: 1px solid blue;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background: #f8f8f8;
    width: 100vw;
    max-width: 100vw;
    // width: 70vw !important;    
`;

export const RightContainer = styled.div `
    // border: 1px solid red;
    width: 100%;
`;

export const TableContainer = styled.div `
    // border: 1px solid red;
    width: 90%;
    margin: 0 auto;
`;

export const SwiperContainer = styled.div `
    // border: 1px solid blue;
    width: 100vw;
    max-width: 100vw;
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px; 

    h1 {
        text-align: left;
        font: normal normal 600 28px/42px Poppins;
        letter-spacing: 0px;
        color: #262626;
    }
`;