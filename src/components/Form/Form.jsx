import { useState } from "react";
import * as c from "./styleForm";
import Card from "../Card/Card";
export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [dataList, setDataList] = useState([])
  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted({[submitted]: true});

    const newData = { name, number, email };
    setDataList([...dataList, newData]);
    setName("");
    setNumber("");
    setEmail("");
  };

  return (
    <c.Container>
      <c.Form onSubmit={handleSignup}>
        <c.Title>Formulario de Contato</c.Title>

        <c.Input
          type="text"
          placeholder="Nome Completo"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <c.Input
          type="tel"
          placeholder="Numero Telefone"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <c.Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <c.Button>Enviar</c.Button>
      </c.Form>
    
      <c.Wraper>

      {submitted && (
        <c.Container>
          {dataList.map((data, index) => (
           <Card name ={ data.name} tel = { data.number} email ={ data.email} key ={index}/>
          ))}
        </c.Container>
      )}
      </c.Wraper>
    </c.Container>
  );
}
