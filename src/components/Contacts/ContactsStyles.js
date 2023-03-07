import styled from "styled-components";

export const SwiperContainer = styled.div`
    // border: 1px solid red;
`;

export const TableContactsContainer = styled.div`
    // border: 1px solid blue;
    width: 94%;
    margin: 0 auto;

    svg:hover {
        cursor: pointer;
    }
`;

export const InfoColumn = styled.div`
    h3, h4, h5 {
        margin: 0;
        font-family: 'poppins', sans-serif;
    }

    h3 {
        text-align: left;
        line-height: 28px;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #393939;
        margin-top: 8px;
    }

    h4 {
        text-align: left;
        line-height: 28px;
        font-size: 14px;
        letter-spacing: 1px;
        color: #799283;
    }
`;

export const Customer = styled.div`
    h3, h4, h5 {
        margin: 0;
        font-family: 'poppins', sans-serif;
    }
    
    h3 {
        text-align: left;
        line-height: 20px;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #393939;
    }

    h4 {
        text-align: left;
        line-height: 18px;
        font-size: 12px;
        letter-spacing: 1px;
        color: #799283;
    }
`;

export const Comment = styled.p`
    font-family: 'poppins', sans-serif;
    line-height: 18px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #393939;
`;


export const customStyles = {
    rows: {
        style: {
            height: '75px',
        },
    },
    headCells: {
        style: {
            // border: '1px dashed red',
            paddingLeft: '4px'
        },
    },
    cells: {
        style: {
            // border: '1px dashed green',
            width: '10px',
            paddingLeft: '4px',
        },
    },
};