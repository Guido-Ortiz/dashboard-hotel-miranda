import styled from "styled-components";

export const DashboardWrapper = styled.div`
    // border: 1px solid blue;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background: #f8f8f8;
    max-width: 100vw;   

    
`;

export const RightContainer = styled.div`
    // border: ${props => props.sidebar ? '1px solid red' : '1px solid green'};
    width: ${props => props.sidebar ? '82vw' : '100vw'};
    min-height: 84vh;
    


    // position: relative;
    // top: 16vh;
    // left: 18vw;
    // z-index: 0;
`;

export const TableContainer = styled.div`
    // border: 1px solid red;
    width: 90%;
    margin: 0 auto;
    
    h1 {
        text-align: left;
        font: normal normal 600 28px/42px Poppins;
        letter-spacing: 1px;
        color: #262626;
    }
`;

export const SwiperContainer = styled.div`
    // border: 1px solid blue;
    // width: 100vw;
    // max-width: 100vw;
    max-width: ${props => props.sidebar ? '82vw' : '100vw'};
    height: auto;
    // margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 20px; 

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
    border-radius: 4px;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
`;

export const BookingColumn = styled.div `
    // border: 1px solid red;

    h3, h4, h5 {
        margin: 0;
    }

    h3 {
        text-align: left;
        font: normal normal medium 20px/30px Poppins;
        font-weight: 700;
        letter-spacing: 1px;
        color: #393939;
        margin-bottom: 5px;
    }

    h4 {
        text-align: left;
        font: normal normal medium 18px/28px Poppins;
        letter-spacing: 1px;
        color: #393939;
        margin-bottom: 5px;
    }

    h5 {
        text-align: left;
        font: normal normal normal 12px/19px Poppins;
        letter-spacing: 1px;
        color: #799283;
    }
`;

export const Date = styled.div `
    text-align: left;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 1px;
    color: #393939;
`;

export const CustomStylesBookingTable = {
    rows: {
        style: {
            minHeight: '72px',
        },
    },
    headCells: {
        style: {
            // border: '1px dashed red',
            paddingLeft: '4px',
        },
    },
    cells: {
        style: {
            // border: '1px dashed green',
            width: '10px',
            paddingLeft: '4px', 
        },
    },
}

export const Snack = styled.div `
    border: 1px solid red;
`;