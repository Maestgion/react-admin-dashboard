import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 22vw;
    background-color: black;
    color: white;
    border-radius: 1vh;


   

`
const Wrapper = styled.div`
    padding: 2vh;
    display: flex;
    flex-direction: column;
    align-content: space-between;


`

const Title = styled.h3``

const PriceContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Price = styled.h1``

const TrendContainer = styled.div`
display: flex;
align-items: center;

`

const Trend = styled.span`
font-size: 2.5vh;
color: ${props=>props.col === "-" ? "red" : "green"}

`

const TrendIcon = styled.span`
margin-left: 3px;
color: ${props=>props.col === "-" ? "red" : "green"}

`


const Desc = styled.p``



const FeaturedCard = ({title, price, trend, trendVal, trendIcon, desc}) => {
  return (
    <>
        <Container>
            <Wrapper>
                <Title>
                    {title}
                </Title>

                <PriceContainer>
                <Price>{price}</Price>
                    <TrendContainer>
                    <Trend col={trend}>
                    {trend} {" "}
                     {trendVal}
                </Trend>
                <TrendIcon col={trend}>
                    
                    {trendIcon}
                </TrendIcon>
                    </TrendContainer>
                </PriceContainer>

                <Desc>
                    {desc}
                </Desc>

            </Wrapper>
        </Container>
    </>
  )
}

export default FeaturedCard