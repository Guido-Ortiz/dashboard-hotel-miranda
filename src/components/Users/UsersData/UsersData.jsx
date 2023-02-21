import React, { useEffect } from 'react';
import { BtnAddEmployee, EmployeeStatus, UserData, UserImage, Wrapper, UserTableWrapper, customStyles, User } from './UsersDataStyles';
// import { users } from '../../../data/users';
import { ActionsContainer, BtnTopMenu, TopMenu } from '../../Bookings/BookingsStyles';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, filterUsers, getUsers } from '../../../redux/actions/actions';

import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

const UsersData = () => {

     const columns = [
        // {
        //     name: "ID",
        //     selector: (row) => row.id,
        //     sortable: true,
        //     width: '5%'
        // },
        {
            name: "User",
            selector: (row) => <User>
                <UserImage src={row.photo} alt="Profile pic" />
                <UserData>
                    <h4>{row.name}</h4>
                    <h5>#{row.id}</h5>
                    <h5>{row.start}</h5>
                </UserData>
            </User>,
            width: '210px'
        },
        // {
        //     name: "Image",
        //     selector: (row) => <UserImage src={row.photo} alt="Profile pic" />,
        //     width: '180px'
        // },
        // {
        //     name: "User",
        //     selector: (row) => <UserData>
        //         <h4>{row.name}</h4>
        //         <h5>#{row.id}</h5>
        //         <h5>{row.start}</h5>
        //     </UserData>,
        //     width: '14%'
        // },
        {
            name: "Description",
            selector: (row) => row.description
        },
        {
            name: "Contact",
            selector: (row) => row.contact,
            sortable: true,
            width: '12%'
        },
        {
            name: "Status",
            selector: (row) => <EmployeeStatus status={row.status}>{row.status}</EmployeeStatus>,
            sortable: true,
            width: '10%'
        },
        {
            name: "Actions",
            selector: (row) => <ActionsContainer>
              <UpdateIcon sx={{marginRight: '10px'}} />
              <DeleteIcon onClick={() => handleDeleteUser(row.id)} />
            </ActionsContainer>,
            width: '10%'
          }
    ]

    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const handleFilterUser = (filter) => {
        dispatch(filterUsers(filter))
    }

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <Wrapper>
            <TopMenu>
                <div>
                    <h4 onClick={() => handleFilterUser('all')}>All Employees</h4>
                    <h4 onClick={() => handleFilterUser('active')}>Active Employees</h4>
                    <h4 onClick={() => handleFilterUser('inactive')}>Inactive Employees</h4>
                </div>
                <div>
                    <input type='text' />
                    <BtnTopMenu>Search</BtnTopMenu>
                    <Link to='/users/add'>
                        <BtnAddEmployee>+ Employee</BtnAddEmployee>
                    </Link>
                </div>
            </TopMenu>
            <UserTableWrapper>          
                <DataTable columns={columns} data={users} defaultSortFieldId pagination={5} highlightOnHover customStyles={customStyles} />
            </UserTableWrapper>
        </Wrapper>
    )
}

export default UsersData