import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Container = styled.div`
  height: 8vh;
  background-color: #060606;
  position: sticky;
  top: 0;
  z-index: 999;
`;



const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Brand = styled.h1`
  color: teal;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Icon = styled.div`
  position: relative;
  color: white;
`;

const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: teal;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2.7vh;
  left: 12px;
  font-size: 10px;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Brand>Admin</Brand>
          <InfoContainer>
            <IconContainer>
              <Icon>
                <NotificationsNone />
            <IconBadge >2</IconBadge>
                
              </Icon>
              <Icon>
                <Language />
            <IconBadge >2</IconBadge>

              </Icon>
              <Icon>
                <Settings />

              </Icon>
            </IconContainer>
            <Avatar src="https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg" />
          </InfoContainer>
        </Wrapper>
      {/* <Hr/> */}

      </Container>
    </>
  );
};

export default Navbar;
