import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div `
    // border: 1px solid black;
    ${props => props.location === '/login' && css`
        display: none !important;` 
    }  
    background: #ffffff;
    min-width: 18vw;
    height: auto;
    min-height: 84vh;
`;