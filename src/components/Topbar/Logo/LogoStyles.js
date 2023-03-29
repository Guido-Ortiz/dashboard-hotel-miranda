import styled, { css } from "styled-components";

export const Wrapper = styled.div `
    height: 57px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${props => !props.sidebar ? css`
        width: auto;` : css`
        width: 220px;`
    }  
    // width: 220px;
    padding: 5px;
    margin-left: 15px;
    margin-top: 22px;
`;