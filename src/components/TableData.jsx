import React from 'react'
import styled from 'styled-components'



const Customer = styled.td`
display: flex;
justify-content: start;
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

 background-color: ${props=>props.type==="Approved" ? "#e5faf2;" : props.type=== "Pending" ? "#ebf1fe"  : "#fff0f1"};
 color: ${props=>props.type==="Approved" ? "#3bb077" : props.type=== "Pending" ? "#2a7ade"  : "#d95087"};
 font-size: 1.5vh;
/* text-align: center; */
display: inline-block;
padding: 5px 8px ;
border-radius: 5vh;
margin-top: -4vh;`


const TableData = ({imgSrc, username, date, amount, status}) => {
  return (
    <>
          
                <Customer>
                    <ImgContainer src={imgSrc} />
                    <UserName>{username}</UserName>
                </Customer>
                <Date>{date}</Date>
                <Amount>{amount}</Amount>
                <Status type={status}  >{status}</Status>
            
    </>
  )
}

export default TableData