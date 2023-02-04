import React from 'react'
import styled from 'styled-components'
import { Visibility } from "@mui/icons-material";

const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 3vh;
`

const ImgContainer = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`

const PersInfo = styled.div`

`



const Name = styled.p`

`
const Desg = styled.p`
color: gray;
`

const Button = styled.button`

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
        <ImgContainer src={imgSrc}/>
        <PersInfo>
            <Name>{name}</Name>
            <Desg>{desg}</Desg>
        </PersInfo>
        <Button>
            <Visibility/>
            Display
        </Button>
    </InfoContainer>
    </>
  )
}

export default MemCard