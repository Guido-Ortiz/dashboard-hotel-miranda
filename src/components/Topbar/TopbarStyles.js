import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
    // border: 1px solid red;
    ${props => props.location === '/login' && css`
        display: none !important;` 
    }  
    max-width: 100vw;
    height: 16vh; //120
    display: flex;
    flex-direction: row;
`;

