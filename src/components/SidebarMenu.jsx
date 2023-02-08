
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

` 

const MainTitle = styled.span`
font-size: 15px;
color: white;
`

const MenuItemContainer = styled.div`
  padding: 0px 10px;


`
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px;
  cursor: pointer;
    &:hover{
        background-color: gray;
        border-radius: 3px;
        
    }
  `


const MenuIcon = styled.span`
  margin-right: 8px;
  font-size: 5px;
  color:white;

`

const MenuTitle = styled.span`
  font-size: 15px;
  color: white;

`

const SidebarMenu = ({mainTitle, menuTitle1, menuTitle2, menuTitle3, menuTitle4,  menuIcon1, menuIcon2, menuIcon3, menuIcon4, pageUrl1, pageUrl2, pageUrl3, pageUrl4}) => {
  return (
    <>
          <MenuContainer>
            <MainTitle>{mainTitle}</MainTitle>
            <MenuItemContainer>
            <Link to={pageUrl1} style={{textDecoration:"none"}}>
            <MenuItem >
              <MenuIcon>{menuIcon1}</MenuIcon>
              <MenuTitle>{menuTitle1}</MenuTitle>
            </MenuItem>
            </Link>
            <Link to={pageUrl2} style={{textDecoration:"none"}}>
            <MenuItem >
              <MenuIcon>{menuIcon2}</MenuIcon>
              <MenuTitle>{menuTitle2}</MenuTitle>
            </MenuItem>
            </Link>
            <Link to={pageUrl3} style={{textDecoration:"none"}}>
            <MenuItem >
              <MenuIcon>{menuIcon3}</MenuIcon>
              <MenuTitle>{menuTitle3}</MenuTitle>
            </MenuItem>
            </Link>
          
            {   
                // console.log(mainTitle === "Quick Menu")
                mainTitle === "Quick Menu"  && <>
                  <Link to={pageUrl4} style={{textDecoration:"none"}}>
                  <MenuItem >
                    <MenuIcon>{menuIcon4}</MenuIcon>
                      <MenuTitle>{menuTitle4}</MenuTitle>
                </MenuItem>
                  </Link>
                </>
            }
            </MenuItemContainer>
          </MenuContainer>
    </>
  )
}

export default SidebarMenu