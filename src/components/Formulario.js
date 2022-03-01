import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCreargasto, err }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);

  //cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //construir el gasto
    const gasto = {
      nombre,
      cantidad: +cantidad,
      id: shortid.generate(),
    };
    //pasar el gasto al componente principal
    setGasto(gasto);
    setCreargasto(true);
    //resetear el form
    setNombre("");
    setCantidad("");
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos Aquí</h2>
      {error ? (
        <Error msg={"Ambos campos son obligatorios o Presupuesto Incorrecto"} />
      ) : err ? (
        <Error msg={"No posee Presupuesto"} />
      ) : null}

      <div className="campo">
        <label>
          Nombre Gasto
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. transporte"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </label>
      </div>
      <div className="campo">
        <label>
          Cantidad Gasto
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </label>
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCreargasto: PropTypes.func.isRequired,
  err: PropTypes.bool.isRequired,
};

export default Formulario;
