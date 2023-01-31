import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Container = styled.div`
    display: flex;

`
const SideWrapper = styled.div`
    flex: 1;
    
`

const OtherWrapper = styled.div`
    flex:5;
    background-color: black;
`

const Global = () => {
  return (
    <>
        <Navbar/>
        <Container>
        <SideWrapper>
            <Sidebar/>
        </SideWrapper>
        <OtherWrapper>jkh</OtherWrapper>
        </Container>
    </>
  )
}

export default Global