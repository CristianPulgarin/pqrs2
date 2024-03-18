import React, { useState } from "react";
//import './FormRev.css'
import { TextRepDe } from "./TextRepDe";

const FormRepDe = (props) => {

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
    const [fechapro, setFechaPro] = useState('')
    const [casopasado,setCasoPasado] = useState('');
    const manejarSubmit = (event) => {
        event.preventDefault();
        
        alert('Campos completados, puedes copiar');
      };

    
  return (
    <>
      <form onSubmit={manejarSubmit} className="formularioRevM">
        <div className="tit">Casos repetidos mismo cliente para desuscripción</div>
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
        <label className="txtinput">Fecha proceso</label>
        <input className="inp"
        required
        value={fechapro}
        onChange={(e)=>setFechaPro(e.target.value)}
        />
        <label className="txtinput">Caso pasado</label>
        <input className="inp"
        required
        value={casopasado}
        onChange={(e)=>setCasoPasado(e.target.value)}
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
      
      <TextRepDe mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha}
      fechapro={fechapro}  casopasado={casopasado}
      nombre={nombre}  marca={marca}/>

    </>
  );
};

export {FormRepDe}