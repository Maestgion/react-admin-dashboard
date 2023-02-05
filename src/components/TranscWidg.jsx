import React from 'react'
import styled from "styled-components"
import Table from './Table'


const Container = styled.div`
background-color: black;
color: white;
border-radius: 2vh;
padding: 3vh;
`

const Title = styled.h2``

const TableContainer = styled.div`
height: 42vh;
overflow-y: scroll;
::-webkit-scrollbar{
  display: none;
}
display: flex;
flex-direction: column;
gap: 2vh;
`

const TranscWidg = () => {

    return (
    <>
    <Container>
      <Title>Latest Transactions</Title>
      <TableContainer>
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Pending"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Declined"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
        <Table imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
      </TableContainer>
    </Container>
    </>
    
    )
}

export default TranscWidg