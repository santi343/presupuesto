import React from "react";
import PropTypes from "prop-types";
import imagenes from "../assets/imagenes";

const Gasto = ({ gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}

        <span className="gasto">
          <img
            className="icon-edit"
            src={imagenes[0].img1}
            alt={imagenes[0].alt}
          />
          <img
            className="icon-edit"
            src={imagenes[1].img2}
            alt={imagenes[1].alt}
          />
          $ {gasto.cantidad}
        </span>
      </p>
    </li>
  );
};

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};

export default Gasto;
