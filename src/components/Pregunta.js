import React, { useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante, setMostrarpregunta }) => {
  //definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = ({ target }) => {
    //!target.value
    //? console.log(`no tiena nada de valor`)
    //: !parseInt(target.value).isNaN
    //? console.log("soy un numero")
    //: console.log("no soy un numero");
    setCantidad(parseInt(target.value, 10));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarpregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error msg="El presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}
          />
        </label>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};
//setPresupuesto, setRestante, setMostrarpregunta
Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarpregunta : PropTypes.func.isRequired,
}
export default Pregunta;
