import * as c from "./styleCard";

export default function Card({ name, tel, email }) {
  return (
    <c.Container>
      <c.Title>Contato</c.Title>
      <c.Text>Nome: {name}</c.Text>
      <c.Text>Tel: {tel}</c.Text>
      <c.Text>Email: {email}</c.Text>
    </c.Container>
  );
}
