import React from 'react'
import styled from "styled-components"
import { DeleteOutline } from "@mui/icons-material"
import { userRows } from "../assets/data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Container = styled.div`
    flex: 4;

`;

const UserListUser = styled.div`
    display: flex;
    align-items: center;
`
  
const UserListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  `
  
const UserListEdit = styled.button`
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin-right: 20px;
  `
  
const UserListDelete = styled.div`
      color: red;
      cursor: pointer;
`


const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          return (
            <UserListUser>
              <UserListImg  src={params.row.avatar} alt="" />
              {params.row.username}
              </UserListUser>
          );
        },
      },
      { field: "email", headerName: "Email", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "transaction",
        headerName: "Transaction Volume",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.id}>
                <UserListEdit >Edit</UserListEdit >
              </Link>
              <UserListDelete>
              <DeleteOutline
                
                onClick={() => handleDelete(params.row.id)}

              />
              </UserListDelete>
            </>
          );
        },
      },
    ];
  
  return (
    <>
        <Container>
        <Box sx={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        </Container>
    </>
  )
}

export default UserList