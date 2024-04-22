import React, { useState } from "react";
import './FormRev.css'
import { TextRev } from "./TextRev";

const FormRev = (props) => {

    const dat = new Date()
const day = dat.getDate();
const year = dat.getFullYear()
const month = dat.getUTCMonth()


const meses=["enero","febrero","marzo","abril","mayo",
"junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

const mesTexto = meses[month]


    const [caso,setCaso] = useState('')
    const [fecha,setFecha] = useState('')
    const [nombre,setNombre] = useState('');
    const [marca,setMarca] = useState('')

    const manejarSubmit = (event) => {
        event.preventDefault();
        
        alert('Campos completados, puedes copiar');
      };

    const eliminarDatos = () => {
      setCaso(""); // Restablecer el valor del campo "Numero Caso"
      setFecha(""); // Restablecer el valor del campo "Fecha solicitud"
      setNombre(""); // Restablecer el valor del campo "Nombre usuario"
      setMarca(""); // Restablecer el valor del campo "Nombre Marca"
  };
    
  return (
    <>




      <form onSubmit={manejarSubmit} className="formularioRev">
        <div className="titR">Revocatoria de la tirilla para<br/> tratamientos de datos</div>
      <div className="cont1R">
      <label className="txtinputR">Numero Caso</label>
        <input className="inpR"
        required
        value={caso}
        onChange={(e)=>setCaso(e.target.value)}
        />
        <br/>
      <label className="txtinputR">Fecha solicitud</label>
        <input className="inpR"
        required
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        />
      <br/>
        
        <label className="txtinputR">Nombre usuario</label>
        <input className="inpR"
        required
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />
        <br/>
        <label className="txtinputR">Nombre Marca</label>
        <input className="inpR"
        required
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        />
      <br/>
      </div>
        
      <br/>
                <div className="contbtn">
                <button className="btn" type="button" onClick={eliminarDatos}>Borrar</button>
                
         </div>
         <br/>
      </form>
      
      <TextRev mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha} 
      nombre={nombre}  marca={marca}/>
    </>
  );
};

export { FormRev };
