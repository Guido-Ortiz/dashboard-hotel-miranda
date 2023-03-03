import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { deleteUser, filterUsers, getUsers } from '../../redux/actions/actions';
import { BtnTopMenu, TopMenu, ActionsContainer } from '../Bookings/BookingsStyles';
import { UsersWrapper, UserTableWrapper, BtnAddEmployee, User, UserImage, UserData, EmployeeStatus, customStyles } from './UsersStyles';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

const Users = () => {

  const columns = [
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
        width: '23%'
        // width: '211px'
    },
    {
        name: "Description",
        selector: (row) => row.description,
        width: '45%'
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
    <UsersWrapper>
      <TopMenu>
        <div>
          <h4 onClick={() => handleFilterUser('all')}>All</h4>
          <h4 onClick={() => handleFilterUser('active')}>Active</h4>
          <h4 onClick={() => handleFilterUser('inactive')}>Inactive</h4>
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
    </UsersWrapper>
  )
}

export default Users