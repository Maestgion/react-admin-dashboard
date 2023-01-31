import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Container = styled.div`
    display: flex;
    border-top: 2px solid gray;

`
const SideWrapper = styled.div`
    flex: 1;
    position: sticky;
    top: 8vh;
    /* background-color: black; */

    
`

const OtherWrapper = styled.div`
    flex:5;
    /* background-color: black; */
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