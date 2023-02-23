import styled from "styled-components";

export const SliderWrapper = styled.div `
    border: 1px solid fuchsia;
    max-width: 40vw;
    heigth: 50%;

    img {
        width: 100%;
        height: 50%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 1%, rgba(0, 0, 0, 0.66) 100%) !important;
    }
`;