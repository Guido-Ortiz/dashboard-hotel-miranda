import styled from "styled-components";

export const TopMenu = styled.div`
    // border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    letter-spacing: 1px;
    
        
    div {
        // border: 1px solid red;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        // border-bottom: 1px solid #6E6E6E;
    
        h4 {
            font-size: 1rem;
            font-weight: 500;
            padding: 0.5rem 1.25rem;
            color: #6E6E6E;
            font-family: 'poppins', sans-serif;    
            &:hover {
                cursor: pointer;
                color: #135846;
            }
        }

        h3 {
            font-size: 1rem;
            font-weight: 700;
            padding: 0.5rem 1.25rem;
            // color: #6E6E6E;
            font-family: 'poppins', sans-serif;

            color: #135846;  

            // border-bottom: 1px solid #6E6E6E;
    
            &:hover {
                cursor: pointer;
                color: #135846;
            }
        }

        input {
            width: 250px;
            height: 32px;
            border: none;
            border: 1px solid #135846;
            border-radius: 0.8rem;
            outline: none;
            padding: 5px;
            background: #FCFCFC;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.5;
            color: #6E6E6E;
            letter-spacing: 0.5px;
        }
    }    
`;

export const BtnTopMenu = styled.button`
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    height: 40px;
    width: 100px;
    border: none;
    background: #135846;
    color: #ffffff;
    letter-spacing: 0.5px;
    padding: 5px;
    margin: 0 20px;
    border-radius: 0.8rem;
    text-transform: uppercase;
`;

export const BtnStatus = styled.button`
    // border: 1px solid red;
    color: #ffffff;
    letter-spacing: 1px;
    font-family: 'poppins', sans-serif;
    font-size: 13px;
    font-weight: 400;
    height: 34px;
    width: 94px;
    border: none;
    padding: 5px;
    border-radius: 4px;
    background: ${props => props.status === 'Checking-In' ? '#68e365' : props.status === 'Checking Out' ? '#E23428' : 'orange'}
`;

export const BookingTableContainer = styled.div`
    // border: 1px solid red;
    width: 95%;
    margin-top: 20px;
    margin: 0 auto;
`;

export const ClientData = styled.div`
    h3, h4, h5 {
        margin: 0;
    }

    h3 {
        text-align: left;
        font: normal normal medium 20px/30px Poppins;
        font-weight: 700;
        letter-spacing: 1px;
        color: #393939;
        margin-bottom: 5px;
    }

    h4 {
        text-align: left;
        font: normal normal medium 16px/26px Poppins;
        // letter-spacing: 1px;
        color: #799283;
        // margin-bottom: 5px;
    }
`;

export const ActionsContainer = styled.div`
    // border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
        color: #799283;
        // margin-right: 15px;

        &:hover {
            cursor: pointer;
            color: #E23428;
        }
    }
`;

export const BtnRequest = styled.button`
    height: 35px;
    border: 1px solid #799283;
    background: #EEF9F2 0% 0% no-repeat padding-box;
    border-radius: 12px;
    text-align: left;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0.5px;
    color: #212121;
`;

export const CustomTable = {
    rows: {
        style: {
            minHeight: '70px',
        },
    },
    headCells: {
        style: {
            // border: '1px dashed green',
            paddingLeft: '4px',
        },
    },
    cells: {
        style: {
            // border: '1px dashed blue',
            width: '10px',
            paddingLeft: '4px',
        },
    },
}


export const ButtonTabsAll = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: 700;
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    color: ${props => props.all ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.all ? '2px solid #135846' : '1px solid #6E6E6E'};
    font-weight: ${props => props.all ? '700' : '500'}; 
    &:hover {
        cursor: pointer;
        // color: #135846;
    }
`;

export const ButtonTabsArchive = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: 700;
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    color: ${props => props.archive ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.archive ? '2px solid #135846' : '1px solid #6E6E6E'}; 
    font-weight: ${props => props.archive ? '700' : '500'};
    &:hover {
        cursor: pointer;
        // color: #135846;
    }
`;

export const ButtonTabsIn = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: 700;
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    // margin-right: 2px;
    color: ${props => props.in ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.in ? '2px solid #135846' : '1px solid #6E6E6E'};
    font-weight: ${props => props.in  ? '700' : '500'};
    &:hover {
        cursor: pointer;
        // color: #135846;
    }
`;

export const ButtonTabsOut = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: 700;
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    color: ${props => props.out ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.out ? '2px solid #135846' : '1px solid #6E6E6E'}; 
    font-weight: ${props => props.out ? '700' : '500'};
    &:hover {
        cursor: pointer;
    }
`;

export const ButtonTabsProgress = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: 700;
    padding: 0.5rem 1.25rem;
    font-family: 'poppins', sans-serif;
    color: ${props => props.progres ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.progres ? '2px solid #135846' : '1px solid #6E6E6E'}; 
    font-weight: ${props => props.progres ? '700' : '500'};
    &:hover {
        cursor: pointer;
    }
`;