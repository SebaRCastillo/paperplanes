import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [toggle, setToggle] = useState(false);

  const aumentarContador = () => {
    if (stock > contador) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={aumentarContador}>+</button>
      <span>{contador}</span>
      <button onClick={disminuirContador}>-</button>
      <button onClick={onAdd}>Agregar</button>
    </div>
  );
};

export default ItemCount;
