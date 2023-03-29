import styled, { css } from "styled-components";

export const ItemWrapper = styled.div`
    // border: 1px solid orange;
    height: 57px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #799283;
    padding-left: 20px;
    margin: 5px 0;
    
    ${props => !props.sidebar && props.location === props.link && css`
        background: rgba(226, 52, 40, 0.1);;
        border-radius: 50%;`
    }

    ${props => props.sidebar === true && css`
        border-left: ${props => props.location === props.link ? '3px solid #E23428' : null} ;`
    }  

    svg {
        margin-right: 20px;
        color: ${props => props.location === props.link ? '#E23428' : '#799283'};
        ${props => !props.sidebar && css`
            background: red
            border-radius: 50%`
        }
    }

    h4 {
        text-align: left;
        font: normal normal normal 18px/27px Poppins;
        color: ${props => props.location === props.link ? '#E23428' : '#799283'};
        opacity: 1;
        display: ${props => !props.sidebar ? 'none' : 'block'};
    }
    
    // &:hover {
    //     color: #E23428;
    //     border-left: 3px solid #E23428;
    // }
    
`;