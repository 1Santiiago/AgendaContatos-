import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  flex:1;
  max-width:30%;
  justify-content:space-around;
  

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
  width:100%;
  /* background-color:blue; */
`;


export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background-color:red; : */
width:100%; 
  `


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
width:100%;
max-width:85%; 
`