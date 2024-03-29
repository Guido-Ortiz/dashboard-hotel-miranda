import styled from "styled-components";

export const DetailWrapper = styled.div`
    // border: ${props => props.sidebar ? '1px solid red' : '1px solid green'};
    width: ${props => props.sidebar ? '82vw' : '100vw'};
    // max-width: 96vw;
    display: flex;
    flex-direction: row;
    min-height: 84vh;
    // padding: 10px;

    div {
        // border: 1px solid green;
        display: flex;
        flex-direction: column;
        width: 100%;

        p {
            // border: 1px solid blue;
            text-align: left;
            font: normal normal normal 14px/21px Poppins;
            letter-spacing: 0.5px;
            color: #363636;
            padding: 10px;
        }
    }
`;

export const GuestWrapper = styled.div`
    // border: 1px dashed blue;
    // margin: 5px;
    width: 50%;
    display: flex;
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: flex-start;     

    img {
        width: 40%;
        border-radius: 10px;
        margin-right: 10px;
    }    
`;

export const GuestData = styled.div`
    // border: 1px solid red;
    width: 55% !important;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;

    h2, h4 {
        margin: 0;
        letter-spacing: 1px;
    }

    h2 {
        text-align: left;
        font: normal normal 600 30px/46px Poppins;
        color: #212121;
        
    }

    h4 {
        text-align: left;
        font: normal normal normal 14px/21px Poppins;
        color: #799283;
    }
`;

export const GuestContact = styled.div`
    // border: 1px solid green;
    display: row;
    width: 100%;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        h3 {
            text-align: left;
            font: normal normal normal 14px/21px Poppins;
            color: #212121;
        }        
    }

    svg {
        color: #135846;
        margin-right: 10px;
    }
`;

export const CheckWapper = styled.div`
    // border: 1px dashed fuchsia;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 5px;
    margin-top: 10px;
    border-bottom: 2px solid #EBEBEB;

    h4, h5 {
        margin: 0;
        letter-spacing: 1px;
    }

    h5 {
        text-align: left;
        font: normal normal normal 14px/21px Poppins;
        color: #6E6E6E;
        margin-bottom: 5px;
    }

    h4 {
        text-align: left;
        font: normal normal normal 14px/21px Poppins;
        font-weight: 900;
        color: #212121;
        margin-bottom: 15px;
    }
`;

export const RoomInfoWrapper = styled.div`
    // border: 1px solid red;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 5px;
    margin-top: 10px;

    h2, h5 {
        margin: 0;
        letter-spacing: 1px;
    }

    h5 {
        text-align: left;
        font: normal normal normal 14px/21px Poppins;
        color: #6E6E6E;
        margin-bottom: 5px;
    }

    h2 {
        text-align: left;
        font: normal normal medium 24px/35px Poppins;
        color: #212121;

        span {
            font: normal normal normal 14px/21px Poppins;
            color: #799283;
        }
    }
`;

export const FacilitiesWrapper = styled.div`
    // border: 1px solid red;
    margin: 5px;

     h5 {
        margin: 0;
        text-align: left;
        font: normal normal normal 14px/21px Poppins;
        color: #6E6E6E;
        margin-bottom: 5px;
     }

     section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
     }
`;

export const FacilityChip = styled.div`
    // display: inline-block;
    width: 130px !important;
    background-color: #e2f9f3;
    border: 1px solid #135846;
    color: #135846;
    padding: 5px;
    margin-right: 8px;
    margin-bottom: 14px;
    border-radius: 0.8rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
`;

export const RoomWrapper = styled.div`
    // border: 1px dashed fuchsia;
    margin: 5px;
    width: 50%;
    height: 50%;
    position: relative;

    h2 {
        position: absolute;
        bottom: 120px;
        left: 30px;
        font-weight: 600;
        font-size: 1.5rem !important;
        line-height: 1.4;
        color: #fff !important;
        font-family: 'poppins', sans-serif;
        letter-spacing: 1px;
    }

    p {
        position: absolute;
        bottom: 10px;
        left: 24px;
        color: #6E6E6E  !important;
        line-height: 1.8;
        font-family: 'poppins', sans-serif;
        letter-spacing: 1px;
        font-weight: 600;
    }
`;

export const BtnEdit = styled.button`
     height: ${props => props.modal === 'modal' ? '50px' : '35px'};
     width: 200px;
     letter-spacing: 1px;
     color: #ffffff;
     background: #135846;
     border: none;
     border-radius: 0.8rem;
     margin: 0 auto;
     margin-top: 10px;
     font: normal normal normal 14px/21px Poppins;

     &:hover {
        cursor: pointer;
     }
`;

export const BoxEdit = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 650px;
    height: auto;
    background: #ffffff;
    border: 1px solid #135846;
    box-shadow: 24px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;

    h3 {
        text-align: left;
        font: normal normal medium 24px/35px Poppins;
        color: #212121;
        letter-spacing: 1px;
    }

    div {
        // border: 1px solid blue;
         display: flex;
         flex-direction: row;
    //     align-items: center;
         flex-wrap: wrap;
    //     padding: 10px;
     }

     select {
        margin: 0;
        background: #fff;
        border: 0.0625rem solid #ccc7c7;
        padding: 0.3125rem 1.25rem;
        color: #6e6e6e;
        height: 30px;
        border-radius: 1rem;
        margin: 10px;
        letter-spacing: 1px;
        outline: none;

        // &:hover {
        //     border: 1px solid #135846;
        // }
    }

    select {
        height: 43px;
        width: 98%;
        
        option {
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.5;
        }
    }
`;

export const InputEdit = styled.input`
    height: 30px;
    width: 90%;
    outline: none;
    border: 0.0625rem solid #ccc7c7;
    margin: 10px;
    border-radius: 0.8rem;
    padding: 5px 8px;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0.5px;
    color: #363636;
`;

export const InputEditWrapper = styled.div`
    // border: 1px solid red!important;
    width: 48%;
    margin: 0;
    display: flex;
    flex-direction: column;

    h4 {
        margin: 0;   
        font-family: 'poppins', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: #6E6E6E;
    }
`;