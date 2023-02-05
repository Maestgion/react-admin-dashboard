import React from 'react'
import styled from "styled-components"
import MemCard from './MemCard'


const Container = styled.div`
padding: 3vh;
display: flex;
flex-direction: column;
gap: 2vh;
border-radius: 2vh;
background-color: black;
color: white;
`
const Title = styled.h2``



const NewUserWidg = () => {
  return (
    <>
        <Container>
            <Title>Newly Joined Members</Title>
            <MemCard imgSrc="https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg" name={"Hinata Shoyo" } desg={"Devopssdxfgcvhbjnkm"} />
            <MemCard imgSrc="https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg" name={"Hinata Shoyo" } desg={"Devops"} />
            <MemCard imgSrc="https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg" name={"Hinata Shoyo" } desg={"Devops"} />
            <MemCard imgSrc="https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg" name={"Hinata Shoyo" } desg={"Devops"} />
            <MemCard imgSrc="https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg" name={"Hinata Shoyo" } desg={"Devops"} />
        </Container>
    </>
  )
}

export default NewUserWidg