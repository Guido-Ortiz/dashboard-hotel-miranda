import styled from "styled-components";

export const DashboardWrapper = styled.div`
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

export const RightContainer = styled.div`
    // border: 1px solid red;
    width: 100%;
    min-height: 84vh;
`;

export const TableContainer = styled.div`
    // border: 1px solid red;
    width: 90%;
    margin: 0 auto;
`;

export const SwiperContainer = styled.div`
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

export const BtnToBooking = styled.button`
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    height: 35px;
    width: 90px;
    border: 1px solid #135846;
    background: #ffffff;
    color: #135846;
    letter-spacing: 0.5px;
    padding: 5px;
    // margin: 0 20px;
    border-radius: 4px;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
`;

export const CustomStylesBookingTable = {
    // rows: {
    //     style: {
    //         minHeight: '72px', // override the row height
    //     },
    // },
    headCells: {
        style: {
            // border: '1px solid red',
            width: '40px',
            textAlign: 'left',
            paddingLeft: '10px',
            paddingRight: 0
        },
    },
    // cells: {
    //     style: {
    //         paddingLeft: '8px', // override the cell padding for data cells
    //         paddingRight: '8px',
    //     },
    // },
}