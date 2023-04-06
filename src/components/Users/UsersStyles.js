import styled from "styled-components";

export const customStyles = {
    rows: {
        style: {
            // height: '90px',
        },
    },
    headCells: {
        style: {
            // border: '1px solid blue',
            padding: '5px'
        },
    },
    cells: {
        style: {
            // border: '1px dashed green',
            width: '15px',
            padding: '5px'
        },
    },
}

export const UsersWrapper = styled.div`
    // border: 1px solid fuchsia;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 98%;
`;

export const UserTableWrapper = styled.div`
    // border: 1px solid red;
    margin: 0 auto;
    width: 90%;
`;

export const BtnAddEmployee = styled.button`
    font-family: 'poppins', sans-serif;
    font-weight: 600;
    height: 40px;
    width: 100px;
    border: 1px solid #135846;
    background: #ffffff;
    color: #135846;
    letter-spacing: 0.5px;
    padding: 5px;
    margin: 0 20px;
    border-radius: 0.8rem;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
`;

export const UserImage = styled.img`
    // border: 1px solid red;
    width: 50%;
    height: 50%;
    margin-right: 6px;
    border-radius: 0.65rem 
`;

export const User = styled.div`
    // border: 1px solid fuchsia;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserData = styled.div`
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 90px;

    h4, h5 {
        letter-spacing: 0.5px;
        margin: 0;
        margin-bottom: 2px;
        font-family: 'poppins', sans-serif;
    }

    h4 {
        // border: 1px solid fuchsia;
        line-height: 22px;
        font-size: 13px;
        color: #212121;
    }

    h5 {
        // border: 1px solid blue;
        line-height: 21px;
        font-size: 12px;
        color: #393939;
    }
`;

export const EmployeeStatus = styled.h4`
    text-align: left;
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: ${props => props.status === 'Inactive' ? '#E23428' : '#5AD07A'};
`;

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #135846',
    boxShadow: 24,
    p: 4,
}

export const BtnTabsAllUsers = styled.button`
font-size: 1rem;
border: none;
font-weight: 700;
padding: 0.5rem 1.25rem;
font-family: 'poppins', sans-serif;
// margin-right: 2px;
color: ${props => props.all == true ? '#135846' : '#6E6E6E'};
border-bottom: ${props => props.all == true ? '2px solid #135846' : '1px solid #6E6E6E'};
    
&:hover {
    cursor: pointer;
    // color: #135846;
}
`;

export const BtnTabsActiveUsers = styled.button`
font-size: 1rem;
border: none;
font-weight: 700;
padding: 0.5rem 1.25rem;
font-family: 'poppins', sans-serif;
// margin-right: 2px;
color: ${props => props.active == true ? '#135846' : '#6E6E6E'};
border-bottom: ${props => props.active == true ? '2px solid #135846' : '1px solid #6E6E6E'};
    
&:hover {
    cursor: pointer;
    // color: #135846;
}
`;

export const BtnTabsInactiveUsers = styled.button`
font-size: 1rem;
border: none;
font-weight: 700;
padding: 0.5rem 1.25rem;
font-family: 'poppins', sans-serif;
// margin-right: 2px;
color: ${props => props.inactive == true ? '#135846' : '#6E6E6E'};
border-bottom: ${props => props.inactive == true ? '2px solid #135846' : '1px solid #6E6E6E'};
    
&:hover {
    cursor: pointer;
    // color: #135846;
}
`;