import React, { useState } from "react";
import './FormRepDe.css'
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
      <form onSubmit={manejarSubmit} className="formularioRepDe">
        <div className="titRD">Casos repetidos mismo cliente<br></br> para desuscripción</div>
        <div className="cont1RD">

      <label className="txtinputRD">Caso</label>
        <input className="inpRD"
        required
        value={caso}
        onChange={(e)=>setCaso(e.target.value)}
        />
      <label className="txtinputRD">Fecha solicitud</label>
        <input className="inpRD"
        required
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        />
        
        
        <label className="txtinputRD">Fecha proceso</label>
        <input className="inpRD"
        required
        value={fechapro}
        onChange={(e)=>setFechaPro(e.target.value)}
        />
        <label className="txtinputRD">Caso pasado</label>
        <input className="inpRD"
        required
        value={casopasado}
        onChange={(e)=>setCasoPasado(e.target.value)}
        />
        
        
        <label className="txtinputRD">Nombre completo</label>
        <input className="inpRD"
        required
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />
        <label className="txtinputRD">Marca</label>
        <input className="inpRD"
        required
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        />
        </div>
        
        
        
                <div className="contbtnRD">
         <input className="btnRD" type="submit" value="Confirmar" />
         </div>
      </form>
      
      <TextRepDe mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha}
      fechapro={fechapro}  casopasado={casopasado}
      nombre={nombre}  marca={marca} estado={props.estado} setEstado={props.setEstado}/>

    </>
  );
};

export {FormRepDe}