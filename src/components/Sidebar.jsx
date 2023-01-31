import React from 'react'
import styled from 'styled-components'
import SidebarMenu from './SidebarMenu'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Analytics,
} from "@mui/icons-material";

const Container = styled.div`
background-color: black;
height: calc(100vh - 8vh);
border-right: 1px solid gray;

`
const Wrapper = styled.div`
padding: 4vh 0vh 4vh 3vh;
display: flex;
flex-direction: column;
gap: 2vh;
`




const Sidebar = () => {
  return (
    <>
      <Container>
        
        <Wrapper>
          <SidebarMenu mainTitle={"Dahboard"} menuTitle1={"Home"}  menuTitle2={"Analytics"} menuTitle3={"Sales"}  menuIcon1={<LineStyle/>} menuIcon2={<Analytics/>} menuIcon3={<TrendingUp/>}    />

          <SidebarMenu mainTitle={"Quick Menu"} menuTitle1={"Users"}  menuTitle2={"Products"} menuTitle3={"Transactions"} 
          menuTitle4={"Report"} 
          menuIcon1={<PermIdentity/>} menuIcon2={<Storefront/>} menuIcon3={<AttachMoney/>} menuIcon4={<BarChart/>}  />

          <SidebarMenu mainTitle={"Notifications"} menuTitle1={"Mail"}  menuTitle2={"Feedback"} menuTitle3={"Messages"}  menuIcon1={<MailOutline/>} menuIcon2={<DynamicFeed/>} menuIcon3={<ChatBubbleOutline/>}   />

          <SidebarMenu mainTitle={"Staff"} menuTitle1={"Manage"}  menuTitle2={"Analytics"} menuTitle3={"Reports"}  menuIcon1={<WorkOutline/>} menuIcon2={<Timeline/>} menuIcon3={<Report/>}   />
        </Wrapper>
      </Container>
    </>
  )
}

export default Sidebar