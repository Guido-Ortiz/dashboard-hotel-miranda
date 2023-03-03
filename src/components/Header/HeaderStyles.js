import styled from "styled-components";

export const HeaderWrapper = styled.div `
    // border: 1px solid green;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    svg {
        // border: 1px solid red;
        color: #393939;
        margin-right: 30px;

        &:hover {
            cursor: pointer;
        }
    }

    h2 {
        color: #262626;
        text-align: left;
        font: normal normal 600 28px/42px Poppins;
        letter-spacing: 1px;
        color: #262626;
        opacity: 1;
        text-transform: capitalize; 
    }

    div {
        // border: 1px solid fuchsia;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const IconsContainer = styled.div `
    // border: 1px solid fuchsia;

    svg {
        color: #135846;
    }

    &:hover {
        cursor: pointer;
    }
`;