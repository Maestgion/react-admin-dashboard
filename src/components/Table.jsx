import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.table`
    width: 100%;
    
`

const Row = styled.tr`
    text-align: center;
    
`

const Heading = styled.th``

const Customer = styled.td`
display: flex;
justify-content: center;
align-items: center;
gap: 2vh;

`

const ImgContainer = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;

`

const UserName = styled.span``

const Date = styled.td`
color: gray;
`

const Amount = styled.td`
color: gray;
`

const Status = styled.td`

 background-color: ${props=>props.type==="Approved" ? "green" : props.type=== "Pending" ? "blue"  : "red"};
`





const Table = ({imgSrc, username, date, amount, status  }) => {
  return (
    <>
        <TableContainer>
            <Row>
                <Heading>Customer</Heading>
                <Heading>Date</Heading>
                <Heading>Amount</Heading>
                <Heading>Status</Heading>
            </Row>
            <Row>
                <Customer>
                    <ImgContainer src={imgSrc} />
                    <UserName>{username}</UserName>
                </Customer>
                <Date>{date}</Date>
                <Amount>{amount}</Amount>
                <Status type={status}>{status}</Status>
            </Row>
        </TableContainer>
    </>
  )
}

export default Table