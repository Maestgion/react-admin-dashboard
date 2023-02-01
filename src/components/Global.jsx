import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Container = styled.div`
  display: flex;
  /* border-top: 2px solid gray; */
 overflow: hidden;
`;
const SideWrapper = styled.div`
  flex: 1;
  position: sticky;
  top: 8vh;
`;

const OtherWrapper = styled.div`
  flex: 5;
  overflow: scroll;
  margin: 5vh;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Global = ({children}) => {
  return (
    <>
      <Navbar />
      <Container>
        <SideWrapper>
          <Sidebar />
        </SideWrapper>
        <OtherWrapper>
          {children}
        </OtherWrapper>
      </Container>
    </>
  );
};

export default Global;
