import React from 'react'
import styled from "styled-components"
import { DeleteOutline } from "@mui/icons-material"
import { productRows } from "../assets/data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Container = styled.div`
    flex: 5;

`;

const ProductListProduct = styled.div`
    display: flex;
    align-items: center;
`
  
const ProductListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  `
  
const ProductListEdit = styled.button`
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin-right: 20px;
  `
  
const ProductListDelete = styled.div`
      color: red;
      cursor: pointer;
`

const ProductList = () => {

  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
            <ProductListProduct>
            <ProductListImg src={params.row.img} alt="" />
            {params.row.name}
            </ProductListProduct>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ProductListEdit >Edit</ProductListEdit>
            </Link>
            <ProductListDelete>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            </ProductListDelete>
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

export default ProductList