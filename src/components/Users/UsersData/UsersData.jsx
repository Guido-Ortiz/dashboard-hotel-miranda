import React from 'react';
import { FilterWrapper, TextContainer, UserData, UserDataContainer, UserImage, Wrapper } from './UsersDataStyles';
import { users } from '../../../data/users';
import User from './User/User';
import { BtnStatus, TopMenu } from '../../Bookings/BookingsStyles';
import DataTable from 'react-data-table-component';

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
        selector: (row) => row.status,
        sortable: true
    },

    // {
    //   name: "Status",
    //   selector: (row) => <BtnStatus status={row.status}>{row.status}</BtnStatus>,
    //   sortable: true
    // },

];

const UsersData = () => {

    const handleRowClicked = (row) => {
        console.log(row.client);
    };


    const customStyles = {
        rows: {
            style: {
                height: '90px', // override the row height
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
                    <button>Search</button>
                </div>
            </TopMenu>
            <DataTable columns={columns} data={users} defaultSortFieldId pagination={5} onRowClicked={handleRowClicked} highlightOnHover customStyles={customStyles} />
        </Wrapper>
    )
}

export default UsersData