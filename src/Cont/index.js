import React from "react";
import "./Cont.css";
import { NavLink } from "react-router-dom";

const Cont = () => {
  return (
    <>
      <div className="titulopqr">FORMATOS PQR </div>
      <div className="cont">
        <NavLink to="/Revocatoria" className="caja">
          <div className="texto">Revocatoria</div>
        </NavLink>
        <NavLink to="/RevMen" className="caja">
          <div className="texto">Revocatoria y mensajes</div>
        </NavLink>
        <NavLink to="/" className="caja">
          <div className="texto"></div>
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
      <NavLink to="/" className="caja">
          <div className="texto"></div>
        </NavLink>

        <NavLink to="/Actualizar" className="caja">
          <div className="texto">Actualizar</div>
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
