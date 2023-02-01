import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  width: 97%;
  padding: 2vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  background-color: black;
  color: white;
  border-radius: 1vh;
`;

const Title = styled.h3``;

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
          <LineChart data={data}  width={500}
          height={300}>
            <XAxis dataKey="name" stroke="#008080" />
            <Line type="monotone" dataKey={dataKey} stroke="#008080" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </Container>
    </>
  );
};

export default Chart;
