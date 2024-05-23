import { useState } from "react";
import Card from './Card';
import ErrorMessage from './ErrorMessage';

const Form = () => {
  const [animal, setAnimal] = useState({
    nombre: "",
    tipo: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (animal.nombre.length >= 3 && !animal.nombre.startsWith(' ') && animal.tipo.length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre del Animal:</label>
        <input
          type="text"
          value={animal.nombre}
          onChange={(event) =>
            setAnimal({ ...animal, nombre: event.target.value })
          }
        />
        <label>Tipo de Animal:</label>
        <input
          type="text"
          value={animal.tipo}
          onChange={(event) =>
            setAnimal({ ...animal, tipo: event.target.value })
          }
        />
        <button>Enviar</button>
      </form>
      {show && <Card animal={animal} />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Form;
