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
          <h4>{row.username}</h4>
          <h5>#{row._id}</h5>
          <h5>{row.start}</h5>
        </UserData>
      </User>,
      width: '37%'
      // width: '211px'
    },
    {
      name: "Description",
      selector: (row) => row.description,
      width: '18%'
    },
    {
      name: "Contact",
      selector: (row) => <UserData>
      {/* <h4>{row.username}</h4> */}
      <h5>{row.phone}</h5>
      <h5>{row.email}</h5>
    </UserData>,
      sortable: true,
      width: '25%'
    },
    {
      name: "Status",
      selector: (row) => <EmployeeStatus status={row.userstatus}>{row.userstatus}</EmployeeStatus>,
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

  const users = useSelector(state => state.users.users.data)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const [all, setAll] = useState(true)
  const [active, setActive] = useState(false)
  const [inactive, setInactive] = useState(false)

  const handleFilterUser = (filter) => {
    if(filter === 'All'){
      setAll(true)
      setActive(false)
      setInactive(false)
    }
    if(filter === 'Active'){
      setAll(false)
      setActive(true)
      setInactive(false)
    }
    if(filter === 'Inactive'){
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
          <BtnTabsAllUsers onClick={() => handleFilterUser('All')} all={all} active={active} inactive={inactive}>All</BtnTabsAllUsers>
          <BtnTabsActiveUsers onClick={() => handleFilterUser('Active')} all={all} active={active} inactive={inactive}>Active</BtnTabsActiveUsers>
          <BtnTabsInactiveUsers onClick={() => handleFilterUser('Inactive')} all={all} active={active} inactive={inactive}>Inactive</BtnTabsInactiveUsers>
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