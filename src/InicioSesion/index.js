import React, { useState } from "react";
import './InicioSesion.css'
const InicioSesion = () => {

    const [correo,setCorreo] = useState('');
    const [contraseña,setContraseña] = useState('');

    console.log(correo)

  return (
    <>
      <div className="fondo">
            <div className="titulo">Inicio Sesion</div>
            <img src="https://img.freepik.com/vector-premium/fondo-vector-monocromo-blanco-abstracto-folleto-diseno-folleto-sitio-web-fondo-pantalla-blanco-geometrico-pagina-inicio-presentacion-certificado_249611-5879.jpg"
             alt="s"/>
            
            <div className="form">
                <label className="textinput">Correo</label>
                <div className="continput">
                <input className="input" 
                value={correo}
                onChange={(e)=>setCorreo(e.target.value)}
                placeholder=""/>
                </div>
                <label className="textinput">Contraseña</label>
                <div className="continput">
                <input 
                value={contraseña}
                onChange={(e)=>setContraseña(e.target.value)}
                
                type="password" className="input" placeholder=""/>
                </div>
                
            </div>
      </div>
    </>
  );
};

export { InicioSesion };
