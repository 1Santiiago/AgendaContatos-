// Componente Form.js
import React, { useState } from "react";
import * as c from "./styleForm";
import Card from "../Card/Card";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [dataList, setDataList] = useState([]);

  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newData = { name, number, email };
    setDataList([...dataList, newData]);
    setName("");
    setNumber("");
    setEmail("");
  };

  const handleDeleteCard = (index) => {
    const updatedDataList = dataList.filter((_, i) => i !== index);
    setDataList(updatedDataList);
  };

  return (
    <>
      <c.Container>
        <c.Form onSubmit={handleSignup}>
          <c.Title>Formulário de Contato</c.Title>

          <c.Input
            type="text"
            placeholder="Nome Completo"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <c.Input
            type="tel"
            placeholder="Número Telefone"
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
      </c.Container>

      <c.Container>
        <c.Wraper>
          {submitted && (
            <c.ContainerCard>
              {dataList.map((data, index) => (
                <Card
                  name={data.name}
                  tel={data.number}
                  email={data.email}
                  key={index}
                  onDelete={() => handleDeleteCard(index)} 
                />
              ))}
            </c.ContainerCard>
          )}
        </c.Wraper>
      </c.Container>
    </>
  );
}
