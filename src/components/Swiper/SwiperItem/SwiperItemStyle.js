import styled from "styled-components";
import Popup from 'reactjs-popup';

export const SliderItemWrapper = styled.div`
    // border: 1px solid fuchsia;
    width: auto;
    height: auto;
    margin-right: 10px;
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #6E6E6E;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
    padding: 20px;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 16px 30px #00000014;
    }
`;

export const SliderItemPeople = styled.div`
    // border: 1px solid orange;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    div {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: auto;
        margin: 0;
    }
`;

export const StyledPopup = styled(Popup)`

    // border: 1px solid red;
  // use your custom style for ".popup-overlay"
  &-overlay {
    border: 1px solid #799283;
    border-radius: 15px;
    background: grey;
    width: 50%;
    height: 50%;
    margin: 0 auto;
    margin-top: 150px;
    postion: relative;
  }
  // use your custom style for ".popup-content"
  &-content {
    color: #ffffff;
    padding: 20px;
    letter-spacing: 1px;
  }
`;

export const ClosePopup = styled.span`
cursor: pointer;
color: #799283;
font-weight: 600;
position: absolute;
display: block;
padding: 5px;
line-height: 20px;
right: 10px;
top: 0px;
font-size: 24px;
background: #ffffff;
// border-radius: 18px;
border: 1px solid #cfcece;
`;