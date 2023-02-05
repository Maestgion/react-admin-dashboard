import React from 'react'
import styled from 'styled-components'
import TableData from './TableData'

const TableContainer = styled.table`
    width: 100%;
    border-spacing: 20px;


`

const Row = styled.tr`
    text-align: left;

`

const Heading = styled.th`
font-size: 3vh;
`







const Table = () => {
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
               <TableData imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
            </Row>
            <Row>
               <TableData imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
            </Row>
            <Row>
               <TableData imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Pending"}  />
            </Row>
            <Row>
               <TableData imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
            </Row>
            <Row>
               <TableData imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Declined"}  />
            </Row>
            <Row>
               <TableData imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
            </Row>
            <Row>
               <TableData imgSrc={"https://i.pinimg.com/550x/75/5b/aa/755baa13299fcb81c9b65a3d635daa48.jpg"} username={"Shoyo"} date={"06/02/2023"} amount={"Rs. 799"} status={"Approved"}  />
            </Row>
        </TableContainer>
    </>
  )
}

export default Table