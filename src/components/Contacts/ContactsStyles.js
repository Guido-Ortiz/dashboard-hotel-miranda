import styled from "styled-components";

export const SwiperContainer = styled.div `
    // border: 1px solid red;
`;

export const TableContactsContainer = styled.div `
    // border: 1px solid blue;
    width: '90%';
    margin: 0 auto;

    svg:hover {
        cursor: pointer;
    }
`;

export const customStyles = {
    rows: {
        style: {
            height: '70px', // override the row height
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
            // border: '1px dashed green',
            height: '100%',
            wordBreak: 'break-all',
        },
    },
};