import React from 'react';
import { ActiveBtn, DescriptionText, Email, InactiveBtn, UserContainer } from './UserStyles';

const User = ({ id, name, photo, email, start, description, contact, status }) => {
  return (
    <UserContainer>
        <img src={photo} alt='Profile user' />
        <div>
            <h3>{name}</h3>
            <h4>#{id}</h4>
            <h5>Joined on {start}</h5>
        </div>
        <DescriptionText>{description}</DescriptionText>
        <Email>{email}</Email>
        <Email>{contact}</Email>
        {
        status === 'active' 
            ? <ActiveBtn>{status}</ActiveBtn>
            : <InactiveBtn>{status}</InactiveBtn>
    }
    </UserContainer>
  )
}

export default User