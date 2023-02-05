import React from 'react'
import styled from "styled-components"
import Table from './Table'


const Container = styled.div`
background-color: black;
color: white;
border-radius: 2vh;
padding: 3vh;
height: 90%;

`

const Title = styled.h2``

const TableContainer = styled.div`
height: 88%;

overflow-y: scroll;
::-webkit-scrollbar{
  display: none;
}
padding-left: 2vw;
`



const TranscWidg = () => {

    return (
    <>
    <Container>
      <Title>Latest Transactions</Title>
      <TableContainer>
       <Table/>
      </TableContainer>
    </Container>
    </>
    
    )
}

export default TranscWidg