import styled, { css } from "styled-components";

export const ProfileContainer = styled.div `
    border: 1px solid red;
    ${props => props.sidebar === false && css`
        display: none !important;` 
    }  
    font-family: 'poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 200px;
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 20px 0;
    border-radius: 1.125rem;
    box-shadow: 0 19px 19px rgb(0 0 0 / 16%);

    img {
        width: 50%;
        height: 50%;
        border-radius: 0.5rem; 
        
    }

    h4 {
        font-weight: 500;
        line-height: 1.5;
        font-size: 1rem;
        color: #000;
        margin: 10px auto;
        // margin-top: 10px;
    }

    h5 {
        font-size: 0.75rem !important;
        line-height: 1.5;
        text-align: center !important;
        font-weight: 400;
        color: #6E6E6E;
        margin: 0 auto;
        margin-bottom: 20px;
    }
`;

export const BtnAdminProfile = styled.button `
    font-size: 0.875rem;
    padding: 0.7rem 2.25rem;
    border-radius: 0.8rem;
    font-weight: 400;
    color: #135846;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #135846;
`;