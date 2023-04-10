import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { BtnTopMenu, TopMenu, ActionsContainer } from '../Bookings/BookingsStyles';
import { UsersWrapper, UserTableWrapper, BtnAddEmployee, User, UserImage, UserData, EmployeeStatus, customStyles, modalStyle, BtnTabsAllUsers, BtnTabsActiveUsers, BtnTabsInactiveUsers } from './UsersStyles';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { filterUsers, getUsers } from '../../redux/features/usersSlice';

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
        <Link to={`/users/${row.id}`}><UpdateIcon sx={{ marginRight: '10px' }} /></Link>
        <DeleteIcon onClick={() => handleDeleteUser(row.id)} />
      </ActionsContainer>,
      width: '10%'
    }
  ]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch()

  const users = useSelector(state => state.users.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const [all, setAll] = useState(true)
  const [active, setActive] = useState(false)
  const [inactive, setInactive] = useState(false)

  const handleFilterUser = (filter) => {
    if(filter === 'all'){
      setAll(true)
      setActive(false)
      setInactive(false)
    }
    if(filter === 'active'){
      setAll(false)
      setActive(true)
      setInactive(false)
    }
    if(filter === 'inactive'){
      setAll(false)
      setActive(false)
      setInactive(true)
    }
    dispatch(filterUsers(filter))
  }

  const handleDeleteUser = (id) => {
    // dispatch(deleteUser(id))
  }



  return (
    <UsersWrapper>
      <TopMenu>
        <div>
          <BtnTabsAllUsers onClick={() => handleFilterUser('all')} all={all} active={active} inactive={inactive}>All</BtnTabsAllUsers>
          <BtnTabsActiveUsers onClick={() => handleFilterUser('active')} all={all} active={active} inactive={inactive}>Active</BtnTabsActiveUsers>
          <BtnTabsInactiveUsers onClick={() => handleFilterUser('inactive')} all={all} active={active} inactive={inactive}>Inactive</BtnTabsInactiveUsers>
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