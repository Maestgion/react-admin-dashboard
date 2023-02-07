import React from 'react'
import styled from "styled-components"
import UserInfo from '../components/UserInfo'

const Container = styled.div`
flex:1;
display: flex;
flex-direction: column;
gap: 2vh;

`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Title = styled.h1`
`

const HeaderButton = styled.button`
    background-color: teal;
    padding: 1vh 3vh;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 2vh;

`

const MainWrapper = styled.div`
display: flex;
gap: 2vh;

`

const Child1 = styled.div`
flex: 1;
`

const Child2 = styled.div`
flex: 2;
background-color: black;
border-radius: 2vh;
color: white;
`

const User = () => {
  return (
    <>
        <Container>
            <Header>
                <Title>
                    Edit User
                </Title>
                <HeaderButton>
                    Create
                </HeaderButton>
            </Header>
            <MainWrapper>
                    <Child1>
                        <UserInfo/>
                    </Child1>
                    <Child2>

                    </Child2>
            </MainWrapper>
        </Container>
    </>
  )
}

export default User