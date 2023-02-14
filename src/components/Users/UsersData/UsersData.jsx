import React from 'react';
import { FilterWrapper, TextContainer, UserDataContainer, Wrapper } from './UsersDataStyles';
import users from '../../../data/users.json';
import User from './User/User';

const UsersData = () => {
  return (
    <Wrapper>
        <FilterWrapper>
            <TextContainer>
                <h4>All Employee</h4>
                <h4>Active Employee</h4>
                <h4>Inactive Employee</h4>
            </TextContainer>
            <div>
                <button>+ New Employee</button>
                <select></select>
            </div>
        </FilterWrapper>
        {
            users.map(e => {
                return(
                    <UserDataContainer key={e.id}>
                        <User id={e.id} name={e.name} photo={e.photo} email={e.email} start={e.start} description={e.description} contact={e.contact} status={e.status} />
                    </UserDataContainer>
                )
            })
        }
    </Wrapper>
  )
}

export default UsersData