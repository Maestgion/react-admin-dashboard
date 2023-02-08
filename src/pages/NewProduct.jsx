import React from 'react'
import styled from "styled-components";



const Container = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const FormData = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;


const Select = styled.select`
 height: 40px;
    border-radius: 5px;
`

const Option = styled.option``

const Button = styled.button`
     width: 200px;
    border: none;
    background-color: teal;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`

const NewProduct = () => {
  return (
    <>
      <Container>
        <Title>New Product</Title>
        <Form>
          <FormData>
            <Label>Image</Label>
            <Input type="file" id='file' />
          </FormData>
       
         
          <FormData>
            <Label>Name</Label>
            <Input type="text" placeholder="ear 1" />
          </FormData>
          <FormData>
            <Label>Stock</Label>
            <Input type="text" placeholder="123" />
          </FormData>

      


          <FormData>
            <Label>Active</Label>
            <Select name="active" id="active">

                <Option>Yes</Option>
                <Option>No</Option>
            </Select>
         
          </FormData>
            <Button>Create</Button>
        </Form>
      </Container>
    </>
  )
}

export default NewProduct