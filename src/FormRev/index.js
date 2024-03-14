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

    
  return (
    <>
      <form onSubmit={manejarSubmit} className="formularioRev">
        <div className="tit">Revocatoria de la tirilla para tratamientos de datos</div>
        <div className="cont1">

      <label className="txtinput">Caso</label>
        <input className="inp"
        required
        value={caso}
        onChange={(e)=>setCaso(e.target.value)}
        />
      <label className="txtinput">Fecha solicitud</label>
        <input className="inp"
        required
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        />
        </div>
        <div className="cont1">
        <label className="txtinput">Nombre completo</label>
        <input className="inp"
        required
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />
        <label className="txtinput">Marca</label>
        <input className="inp"
        required
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        />
        </div>
        
        
        
                <div className="contbtn">
         <input className="btn" type="submit" value="Confirmar" />
         </div>
      </form>
      <TextRev mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha} 
      nombre={nombre}  marca={marca}/>
    </>
  );
};

export { FormRev };
