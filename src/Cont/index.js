import React from "react";
import "./Cont.css";
import { NavLink } from "react-router-dom";

const Cont = () => {
  return (
    <>
      <div className="titulopqr">FORMATOS PQR </div>
      <div className="cont">
        <NavLink to="/Revocatoria" className="caja">
          <div className="texto">REVOCATORIA</div>
        </NavLink>
        <NavLink to="/RevMen" className="caja">
          <div className="texto">REVOCATORIA Y MENSAJES</div>
        </NavLink>
        <NavLink to="/RepDe" className="caja">
          <div className="texto">DESUSCRIPCIÓN REPETIDOS</div>
        </NavLink>
      </div>

      <div className="cont">
      <NavLink to="/" className="caja">
          <div className="texto"></div>
        </NavLink>
        <NavLink to="/" className="caja">
          <div className="texto"></div>
        </NavLink>
        <NavLink to="/" className="caja">
          <div className="texto"></div>
        </NavLink>
      </div>

      <div className="cont">
      <NavLink to="/Supresion" className="caja">
          <div className="texto">SUPRESION</div>
        </NavLink>

        <NavLink to="/Actualizar" className="caja">
          <div className="texto">ACTUALIZAR</div>
        </NavLink>

        <NavLink to="/" className="caja">
          <div className="texto"></div>
        </NavLink>
      </div>
      <br />
      <hr></hr>
      <hr></hr>
    </>
  );
};

export default Cont;
