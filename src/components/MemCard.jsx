import React from 'react'
import styled from 'styled-components'
import { Visibility } from "@mui/icons-material";

const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

const UserContainer = styled.div`
display: flex;
gap: 3vh;
`

const ImgContainer = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
`

const PersInfo = styled.div`

`



const Name = styled.p`

`
const Desg = styled.p`
color: gray;
`

const Button = styled.button`
cursor: pointer;
padding: 5px 10px;
color: black;
background-color: teal;
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
border-radius: 1vh;
`


const MemCard = ({imgSrc, name, desg}) => {
  return (
    <>
    <InfoContainer>
       <UserContainer>
       <ImgContainer src={imgSrc}/>
        <PersInfo>
        
            <Name>{name.length>15?name.slice(0,15) : name}</Name>
            <Desg>{desg.length>15?desg.slice(0,15) + "..." : desg}</Desg>
        </PersInfo>
       </UserContainer>
        <Button>
            <Visibility/>
            Display
        </Button>
    </InfoContainer>
    </>
  )
}

export default MemCard