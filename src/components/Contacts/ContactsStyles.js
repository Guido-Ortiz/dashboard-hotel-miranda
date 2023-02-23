import styled from "styled-components";

export const SwiperContainer = styled.div `
    // border: 1px solid red;
`;

export const TableContactsContainer = styled.div `
    border: 1px solid blue;
    width: 98%;
    margin: 0 auto;

    svg:hover {
        cursor: pointer;
    }
`;

export const customStyles = {
    rows: {
        style: {
            height: '70px',  
        },
    },
    headCells: {
        style: {
            // border: '1px solid red',
            paddingLeft: '6px'
        },
    },
    cells: {
        style: {
            // border: '1px dashed green',
            paddingLeft: '6px',
        },
    },
};