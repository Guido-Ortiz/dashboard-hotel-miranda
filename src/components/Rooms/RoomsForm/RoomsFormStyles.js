import { Chip } from '@mui/material';
import styled from "styled-components";

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    background-color: #ffffff;
    color: #135846;
    width: fit-content;
    border: 1px solid #135846;
    margin: 5px;
  }
  & .MuiChip-deleteIcon {
    color: #135846 !important;
    margin-left: 8px !important;
  }

  & .MuiChip-label {
    font-size: 15px;
    font-family: 'poppins', sans-serif;
    letter-spacing: 0.5px;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const ChipsContainer = styled.div`
    // border: 1px solid red;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 400px !important;
`;
