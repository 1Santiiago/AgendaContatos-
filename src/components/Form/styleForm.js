import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width:30%;

`;

export const Title = styled.h2`
  font-size: 2em;
  border-bottom: 1px solid #ccc;
  font-weight: 400;
  margin-bottom: 0.5em;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  outline: none;
  box-shadow: 0px 7px 16px -9px rgba(12,34,0.1);
`;

export const Button = styled.button`
width: 25%;
height: 30px;
margin: 0 auto;
border: 0;
border-radius: 13px;
font-size: 1rem;
background-color: bisque;
transition:  0.5s;
cursor: pointer;
&:hover{
    background-color: #efcca2;
}

`;

export const Wraper = styled.div`
display: flex;
justify-content: center;


`