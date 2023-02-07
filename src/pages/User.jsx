import React from "react";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import FileUploadIcon from '@mui/icons-material/FileUpload';
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

const MainWrapper = styled.div`
  display: flex;
  gap: 2vh;
`;

const Child1 = styled.div`
  flex: 1;
`;

const Child2 = styled.div`
  flex: 2;
  background-color: black;
  border-radius: 2vh;
  color: white;
`;
const EditWrapper = styled.div`
  padding: 4vh;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;
const EditTitle = styled.h2``;

const EditForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  border: none;
  color: gray;
  height: 2vh;
  width: 15vw;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid gray;
  padding-bottom: 1vh;
`;

const EditFormRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20vh;
`;

const UpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const UpdateIcon = styled.div`
  cursor: pointer;

`;

const UploadInput = styled.input`
    display: none;
`

const UpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: teal;
  color: white;
  font-weight: 600;
`;



const User = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>Edit User</Title>
          <HeaderButton>Create</HeaderButton>
        </Header>
        <MainWrapper>
          <Child1>
            <UserInfo />
          </Child1>
          <Child2>
            <EditWrapper>
              <EditTitle>Edit</EditTitle>
              <EditForm>
                <EditFormLeft>
                  <FormData>
                    <FormLabel>Username</FormLabel>
                    <FormInput placeholder="xyz7" type="text" />
                  </FormData>
                  <FormData>
                    <FormLabel>Full Name</FormLabel>
                    <FormInput placeholder="xyzdxfcgh" type="text" />
                  </FormData>
                  <FormData>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="xyz7@gmail.com" type="email" />
                  </FormData>
                  <FormData>
                    <FormLabel>Phone</FormLabel>
                    <FormInput placeholder="+91 234435678" type="tel" />
                  </FormData>
                  <FormData>
                    <FormLabel>Address</FormLabel>
                    <FormInput placeholder="dfghj" type="text" />
                  </FormData>
                </EditFormLeft>

                <EditFormRight>
                  <UpdateUpload>
                    <UpdateImg
                      src={
                        "https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"
                      }
                    />
                  <FormLabel htmlFor="file">
                    <UpdateIcon>
                        <FileUploadIcon style={{
                            fontSize: "10vh"
                        }} />
                    </UpdateIcon>
                  </FormLabel>
                  <UploadInput type="file" id="file" />
                  </UpdateUpload>

                  <UpdateButton>
                    Update
                  </UpdateButton>
                </EditFormRight>
              </EditForm>
            </EditWrapper>
          </Child2>
        </MainWrapper>
      </Container>
    </>
  );
};

export default User;
