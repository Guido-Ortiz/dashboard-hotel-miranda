import React from 'react';
import { BtnAddEmployee, EmployeeStatus, UserData, UserImage, Wrapper, UserTableWrapper } from './UsersDataStyles';
import { users } from '../../../data/users';
import { BtnTopMenu, TopMenu } from '../../Bookings/BookingsStyles';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const columns = [
    {
        name: "ID",
        selector: (row) => row.id,
        sortable: true
    },
    {
        name: "Image",
        selector: (row) => <UserImage src={row.photo} alt="Profile pic" />
    },
    {
        name: "User",
        selector: (row) => <UserData>
            <h4>{row.name}</h4>
            <h5>#{row.id}</h5>
            <h5>{row.start}</h5>
        </UserData>
    },
    {
        name: "Description",
        selector: (row) => row.description
    },
    {
        name: "Contact",
        selector: (row) => row.contact,
        sortable: true
    },
    {
        name: "Status",
        selector: (row) => <EmployeeStatus status={row.status}>{row.status}</EmployeeStatus>,
        sortable: true
    },
];

const UsersData = () => {

    const handleRowClicked = (row) => {
        console.log(row.client);
    };


    const customStyles = {
        rows: {
            style: {
                height: '90px', // override the row height
                margin: '5px 0'
            },
        },
        // headCells: {
        //     style: {
        //         paddingLeft: '8px', // override the cell padding for head cells
        //         paddingRight: '8px',
        //     },
        // },
        // cells: {
        //     style: {
        //         paddingLeft: '8px', // override the cell padding for data cells
        //         paddingRight: '8px',
        //     },
        // },
    };

    return (
        <Wrapper>
            <TopMenu>
                <div>
                    <h4>All Employees</h4>
                    <h4>Active Employees</h4>
                    <h4>Inactive Employees</h4>
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
                <DataTable columns={columns} data={users} defaultSortFieldId pagination={5} onRowClicked={handleRowClicked} highlightOnHover customStyles={customStyles} />
            </UserTableWrapper>
        </Wrapper>
    )
}

export default UsersData