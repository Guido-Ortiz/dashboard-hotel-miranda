import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
    // border: 1px solid red;
    ${props => props.location === '/login' && css`
        display: none !important;` 
    }  
    max-width: 100vw;
    width: 100%;
    height: 16vh; //120
    display: flex;
    flex-direction: row;
    justify-content: flex-start;



    // position: fixed;
    // top: 0;
    // z-index: 1000;
`;

