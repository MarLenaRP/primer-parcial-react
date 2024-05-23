
const Card = ({ animal }) => {
  const { nombre, tipo } = animal;
  return (
    <div>
      <h4>Información del Animal:</h4>
      <p>Nombre: {nombre}</p>
      <p>Tipo: {tipo}</p>
    </div>
  );
};

export default Card;
