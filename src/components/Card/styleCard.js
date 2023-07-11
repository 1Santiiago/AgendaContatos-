import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  display: grid;
  width:100
  grid-template-columns: 1fr, 1fr, 1fr;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;