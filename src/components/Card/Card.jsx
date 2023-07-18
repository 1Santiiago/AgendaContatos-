import React, { useState } from 'react';
import * as c from './styleCard'
function Card(props) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(props.name);
  const [tel, setTel] = useState(props.tel);
  const [email, setEmail] = useState(props.email);

  const handleSave = () => {
    
    setEditMode(false);
  };

  return (
    <c.Container>
      <c.Text>
        Nome: {editMode ? <input value={name} onChange={(e) => setName(e.target.value)} /> : name}
      </c.Text>
      <c.Text>
        Tel: {editMode ? <input value={tel} onChange={(e) => setTel(e.target.value)} /> : tel}
      </c.Text>
      <c.Text>
        Email: {editMode ? <input value={email} onChange={(e) => setEmail(e.target.value)} /> : email}
      </c.Text>
      <button onClick={() => setEditMode(!editMode)}>{editMode ? "Cancelar" : "Editar"}</button>
      {editMode && <button onClick={handleSave}>Salvar</button>}
    </c.Container>
  );
}

export default Card;
