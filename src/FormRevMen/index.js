import React, { useState } from "react";
import './FormRev.css'
import { TextRevMen } from "./TextRevMen";

const FormRevMen = (props) => {

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

    const eliminarDatos=()=>{
      setCaso("");
      setFecha("");
      setNombre("");
      setMarca("");
      setFechaPro("");
      setCasoPasado("");
    }

    
  return (
    <>
      <form onSubmit={manejarSubmit} className="formularioRevM">
        <div className="titRM">Cuando alguien nos pidió revocatoria y siguen<br/> llegando mensajes</div>
        <div className="contRM">

      <label className="txtinputRM">Numero de caso</label>
        <input className="inpRM"
        required
        value={caso}
        onChange={(e)=>setCaso(e.target.value)}
        />
      <label className="txtinputRM">Fecha solicitud</label>
        <input className="inpRM"
        required
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        />
        
        
        <label className="txtinputRM">Fecha proceso</label>
        <input className="inpRM"
        required
        value={fechapro}
        onChange={(e)=>setFechaPro(e.target.value)}
        />
        <label className="txtinputRM">Caso pasado</label>
        <input className="inpRM"
        required
        value={casopasado}
        onChange={(e)=>setCasoPasado(e.target.value)}
        />
        
        
        <label className="txtinputRM">Nombre completo</label>
        <input className="inpRM"
        required
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />
        <label className="txtinputRM">Marca</label>
        <input className="inpRM"
        required
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        />
        </div>
        
        
        <br/><br/>
         <div className="contbtn">
         <input className="btn" type="button" onClick={eliminarDatos} value="Borrar" />
         </div>
      </form>
      
      <TextRevMen mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha}
      fechapro={fechapro}  casopasado={casopasado}
      nombre={nombre}  marca={marca} estado={props.estado} setEstado = {props.setEstado}/>

    </>
  );
};

export { FormRevMen };
