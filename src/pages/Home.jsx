import React from 'react'
import styled from 'styled-components'
import FeaturedCard from '../components/FeaturedCard'
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Chart from '../components/Chart';
import {userData} from "../assets/data/dummyData"
import NewUserWidg from '../components/NewUserWidg';
import TranscWidg from '../components/TranscWidg';

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 5vh;
`

const FeaturedContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 10vh;
    align-items: center ;
`
const ChartContainer = styled.div``

const WidgetContainer = styled.div`
  display: flex;
  gap: 2vh;
`

const NewUserWidgContainer = styled.div`
flex:1;
`
const TranscWidgContainer = styled.div`
flex:2;
`

const Home = () => {
  return (
    <>
        <Container>
            <FeaturedContainer>
                <FeaturedCard title={"Revenue"} price={"$2,415"} trend={"-"} trendVal={"11.4"} trendIcon={<ArrowDownward/>} desc={"Compared to the last month"}/>
                <FeaturedCard title={"Sales"} price={"$4,415"} trend={"-"} trendVal={"1.4"} trendIcon={<ArrowDownward/>} desc={"Compared to the last month"}/>
                <FeaturedCard title={"Revenue"} price={"$2,415"} trend={"+"} trendVal={"1.4"} trendIcon={<ArrowUpward/>} desc={"Compared to the last month"}/>
            </FeaturedContainer>
            <ChartContainer>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </ChartContainer>
           <WidgetContainer>
            <NewUserWidgContainer>
              <NewUserWidg/>
            </NewUserWidgContainer>
            <TranscWidgContainer>
              <TranscWidg/>
            </TranscWidgContainer>
           </WidgetContainer>
        </Container>
    </>
  )
}

export default Home