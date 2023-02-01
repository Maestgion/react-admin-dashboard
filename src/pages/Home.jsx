import React from 'react'
import styled from 'styled-components'
import FeaturedCard from '../components/FeaturedCard'
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Container = styled.div``

const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center ;
`


const Home = () => {
  return (
    <>
        <Container>
            <FeaturedContainer>
                <FeaturedCard title={"Revenue"} price={"$2,415"} trend={"-11.4"} trendIcon={<ArrowDownward/>} desc={"Compared to the last month"}/>
                <FeaturedCard title={"Sales"} price={"$4,415"} trend={"-1.4"} trendIcon={<ArrowDownward/>} desc={"Compared to the last month"}/>
                <FeaturedCard title={"Revenue"} price={"$2,415"} trend={"+1.4"} trendIcon={<ArrowUpward/>} desc={"Compared to the last month"}/>
                
            </FeaturedContainer>
        </Container>
    </>
  )
}

export default Home