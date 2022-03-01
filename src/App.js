import React, { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

const App = () => {
  //Definir State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false);
  const [err, setErr] = useState(false)

  //UseEffect que actuliza el restante
  useEffect(() => {
    if (creargasto) {
      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      if(presupuestoRestante < 0){
        setErr(true);
        return;
      }
      setErr(false);
      //agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);
      setRestante(presupuestoRestante);
    }

    // Resetear a false
    setCreargasto(false);
  }, [gastos, creargasto, gasto, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarpregunta={setMostrarpregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario err={err} setGasto={setGasto} setCreargasto={setCreargasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
