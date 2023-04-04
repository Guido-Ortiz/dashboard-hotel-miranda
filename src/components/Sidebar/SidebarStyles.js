import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
    // border: 1px solid black;
    ${props => props.location === '/login' && css`
         display: none !important;`
    }
    ${props => props.sidebar 
        ? css`
            width: 18vw;
            border: 1px solid red` 
        : css`
            width: 5vw;
            border: 1px solid red`
    }  
    background: #ffffff;
    // min-width: 18vw;
    height: auto;
    min-height: 84vh;



    // position: fixed;
    // left: 0;
    // top: 16vh;
    // z-index: 0;
`;