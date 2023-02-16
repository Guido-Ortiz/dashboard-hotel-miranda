import styled from "styled-components";

export const SwiperContainer = styled.div `
    border: 1px solid red;
`;

export const TableContactsContainer = styled.div `
    border: 1px solid red
    width: 90%;
    margin: 10px
`;

export const customStyles = {
    rows: {
        style: {
            height: '100px', // override the row height
            margin: '5px 0'
        },
    },
    headCells: {
        style: {
            // border: '1px solid red',
            letterSpacing: '1px'
        },
    },
    cells: {
        style: {
            // paddingLeft: '8px', // override the cell padding for data cells
            // paddingRight: '8px',
            // border: '1px solid red',
            height: '100%',
            wordBreak: 'break-all',
        },
    },
};