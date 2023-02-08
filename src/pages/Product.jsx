import React from 'react'
import styled from "styled-components"
import Chart from '../components/Chart'
import {productData} from "../assets/data/dummyData"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1``;

const HeaderButton = styled.button`
  background-color: teal;
  padding: 1vh 3vh;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 2vh;
`;


const ProductTop =styled.div`
  display: flex;
  align-items: center;
`

const ProductTopLeft= styled.div`
  /* flex: 1; */
  width: 53%;
  /* height: 50vh; */
`


const ProductTopRight = styled.div `
  width: 50%;
  height: 25vh;
  padding: 20px;
  margin: 20px;
  background-color: black;
  color: white;
  border-radius: 1vh ;
`

const ProductInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`

const ProductName = styled.p`
  font-weight: 600;
`

const ProductInfoBottom = styled.div`
  margin-top: 10px;
`

const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`


const ProductInfoValue = styled.div`
  font-weight: 300;
`

const ProductInfoKey = styled.span``

const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
 background-color: black;
 color: white;
 border-radius: 1vh;
`

const ProductForm  = styled.form`
  display: flex;
  justify-content: space-between;
`

const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`

 const ProductFormLeftLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`

 const ProductFormLeftInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
  background-color: transparent;
`

const ProductFormLeftSelect = styled.select`
  margin-bottom: 10px;
`

const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`

const ProductFormRight=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductUpload=styled.div`
  display: flex;
  align-items: center;
`

const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: teal;
  color:white;
  font-weight: 600;
  cursor: pointer;
`

const ProductLeftOption = styled.option``

const UploadInput = styled.input`
    display: none;
`


const Product = () => {
  return (
    <>
     <Container>
        <Header>
          <Title>Product</Title>
          <Link to="/newProduct">
          <HeaderButton>Create</HeaderButton>

          </Link>
        </Header>

        <ProductTop>
          <ProductTopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </ProductTopLeft>

          <ProductTopRight>
            <ProductInfoTop>
              <ProductInfoImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <ProductName>Ear 1</ProductName>
            </ProductInfoTop>

            <ProductInfoBottom>
              <ProductInfoItem>
                <ProductInfoKey>id:</ProductInfoKey>
                <ProductInfoValue>123</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoKey>sales:</ProductInfoKey>
                <ProductInfoValue>51243</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoKey>active:</ProductInfoKey>
                <ProductInfoValue>yes</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoKey>in stock:</ProductInfoKey>
                <ProductInfoValue>id:</ProductInfoValue>
              </ProductInfoItem>
            </ProductInfoBottom>
          </ProductTopRight>
          
        </ProductTop>

        <ProductBottom >
          <ProductForm >
              <ProductFormLeft>
                  <ProductFormLeftLabel>Product Name</ProductFormLeftLabel>
                  <ProductFormLeftInput type="text" placeholder="Apple AirPod" />
                  <ProductFormLeftLabel>In Stock</ProductFormLeftLabel>
                  <ProductFormLeftSelect name="inStock" id="idStock">
                      <ProductLeftOption value="yes">Yes</ProductLeftOption>
                      <ProductLeftOption value="no">No</ProductLeftOption>
                  </ProductFormLeftSelect>
                  <ProductFormLeftLabel>Active</ProductFormLeftLabel>
                  <ProductFormLeftSelect name="active" id="active">
                      <ProductLeftOption value="yes">Yes</ProductLeftOption>
                      <ProductLeftOption value="no">No</ProductLeftOption>
                  </ProductFormLeftSelect>
              </ProductFormLeft>
              <ProductFormRight>
                  <ProductUpload>
                      <ProductUploadImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
                      <ProductFormLeftLabel htmlFor="file">
                          <FileUploadIcon/>
                      </ProductFormLeftLabel>
                      <UploadInput type="file" id="file"  />
                  </ProductUpload>
                  <ProductButton >Update</ProductButton>
              </ProductFormRight>
          </ProductForm >
      </ProductBottom>

      </Container>
    </>
  )
}

export default Product