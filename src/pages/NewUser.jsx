import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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

const Gender = styled.div`
`

const GenderInput = styled.input`
     margin-top: 15px;
`

const GenderLabel = styled.label`
   margin: 10px;
    font-size: 18px;
    color: #555;
`

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

const NewUser = () => {
  return (
    <>
      <Container>
        <Title>New User</Title>
        <Form>
          <FormData>
            <Label>Username</Label>
            <Input type="text" placeholder="john" />
          </FormData>
          <FormData>
            <Label>Full Name</Label>
            <Input type="text" placeholder="John Smith" />
          </FormData>
          <FormData>
            <Label>Email</Label>
            <Input type="email" placeholder="john@gmail.com" />
          </FormData>
          <FormData>
            <Label>Password</Label>
            <Input type="password" placeholder="password" />
          </FormData>
          <FormData>
            <Label>Phone</Label>
            <Input type="text" placeholder="New York | USA" />
          </FormData>

          <FormData>
            <Label>Gender</Label>
            <Gender>
              <GenderInput type="radio" name="gender" id="male" value="male" />
              <GenderLabel htmlFor="male">Male</GenderLabel>
              <GenderInput type="radio" name="gender" id="female" value="female" />
              <GenderLabel htmlFor="female">Female</GenderLabel>
              <GenderInput type="radio" name="gender" id="other" value="other" />
              <GenderLabel htmlFor="other">Other</GenderLabel>
            </Gender>
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
  );
};

export default NewUser;
