import styled from "styled-components";

export const ItemWrapper = styled.div`
    border: 1px solid orange;
    height: 57px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #799283;
    padding-left: 20px;
    margin: 5px 0;

    svg {
        margin-right: 20px
    }

    h4 {
        text-align: left;
        font: normal normal normal 18px/27px Poppins;
        letter-spacing: 0px;
        color: #799283;
        opacity: 1;
    }
`;