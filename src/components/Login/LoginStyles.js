import styled from "styled-components";

export const LoginWrapper = styled.div `
    // border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 100vh;
`; 

export const AsideContainer = styled.div `
    // border: 1px solid green;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
        font-family: poppins,sans-serif;
        margin-bottom: 0.5rem;
        line-height: 1.5;
        font-size: 1.5rem;
        color: #000;
        font-weight: 500;
        margin-top: 20px;
    }

    h6 {
            line-height: 1.8;     
            margin-bottom: 1rem;
            margin-top: 0;
            text-align: center!important;    
            font-family: poppins,sans-serif;
            color: #6e6e6e;
            font-weight: 400;
            line-height: 1.5;  
    }

    div {
        // border: 1px solid red;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
            // border: 1px solid fuchsia;
            text-align: center;
            width: 50%;
        }
    }
`;

export const LoginContainer = styled.div `
    // border: 1px solid red;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(226,52,40,.1);
    
    form {
        // border: 1px solid blue;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    h1 {
            color: #000       
            text-align: center       
            margin-bottom: 1.5rem       
            line-height: 1.5;     
            font-size: calc(1.275rem + .3vw);     
            color: #000;
            font-weight: 500;           
            margin-bottom: 0.5rem;
            margin-top: 0;                
            font-size: 1.17em;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
            font-family: poppins,sans-serif;
            letter-spacing: 1px;
    }

    form {
        label {
            margin-bottom: 10px;
            text-align: left !important;
            font-weight: bolder;
            font-family: poppins,sans-serif;
            color: #6e6e6e;
            line-height: 1.5;
            letter-spacing: 1px;
        }

        input {
            width: 100%;
            margin-bottom: 20px;
            height: 30px;
            width: 
            font-size: .875rem;
            font-weight: 400;
            line-height: 1.5;
            border: none;
            outline: none;
            padding: 5px 10px;
            letter-spacing: 1px;
        }

        button {
            width: 100%;
            background: #e23428;
            color: #ffffff;
            font-weight: 700;
            height: 3.125rem;
            border-radius: 0.8rem;
            font-size: 1rem;
            padding: 0.938rem 1.5rem;
            line-height: 1.5;
            text-align: center;
            text-decoration: none;
            border: none;
            letter-spacing: 1px;
        } 

        button:hover {
            cursor: pointer;
        }
    }
`;