import React from "react";
import styled from "styled-components";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  border-radius: 2vh;
`;

const Wrapper = styled.div`
  padding: 4vh;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;
const BioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2vh;
`;

const ImgContainer = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const DesgContainer = styled.div``;
const Name = styled.h4``;
const Desg = styled.p`
  color: gray;
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

const InfoTitle = styled.p`
  color: gray;
`;

const InfoList = styled.ul`

`;

const InfoSpan = styled.span``

const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2vh;
  margin-bottom: 2vh;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

const UserInfo = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <BioContainer>
            <ImgContainer
              src={
                "https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"
              }
            />
            <DesgContainer>
              <Name>Shoyo</Name>
              <Desg>Middle Blocker</Desg>
            </DesgContainer>
          </BioContainer>

          <AccountContainer>
            <InfoTitle>Account Details</InfoTitle>
            <InfoList>
              <ListItem>
                <PermIdentity />
                <InfoSpan>xyz99</InfoSpan>
              </ListItem>
              <ListItem>
                <CalendarToday />
                <InfoSpan>20.1.2002</InfoSpan>
              </ListItem>
            </InfoList>
          </AccountContainer>

          <ContactContainer>
            <InfoTitle>Contact Details</InfoTitle>
            <InfoList>
            <ListItem>
                <PhoneAndroid />
                <InfoSpan>+1 123 456 67</InfoSpan>
              </ListItem>
              <ListItem>
                <MailOutline />
                <InfoSpan>xyz99@gmail.com</InfoSpan>
              </ListItem>
              <ListItem>
                <LocationSearching/>
                <InfoSpan>New Delhi | IND</InfoSpan>
              </ListItem>
            </InfoList>
          </ContactContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default UserInfo;
