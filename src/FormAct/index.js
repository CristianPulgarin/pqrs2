import React, { useState } from "react";
import { TextoAct } from "./TextoAct";
import './FormAct.css'
const FormAct = (props) => {

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
    const [cedula,setCedula]= useState('')
    const [nacimiento,setNacimiento] = useState('')
    const [direccion,setDireccion] = useState ('')
    const [celular,setCelular] = useState('')
    const [correo,setCorreo] = useState('')
    const [marca,setMarca] = useState('')


    const manejarSubmit = (event) => {
      event.preventDefault();
      
      alert('Campos completados, puedes copiar');
    };

    const eliminarDatos = ()=>{
      setCaso("");
      setFecha("");
      setNombre("");
      setCedula("");
      setNacimiento("");
      setDireccion("");
      setCelular("");
      setCorreo("");
      setMarca("");
    }
    
  return (
    <>
      <form onSubmit={manejarSubmit} className="formulario">
      <div className="titA">Actualización de datos personales</div>
      <div className="cont1A">

      <label className="txtinputA">Numero Caso</label>
      <input className="inpA"
        required
        value={caso}
        onChange={(e)=>setCaso(e.target.value)}
        />

      


      <label className="txtinputA">Fecha solicitud</label>
      <input className="inpA"
        //type="date"
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        />
        
        
        
        <label className="txtinputA">Nombre</label>
        <input className="inpA"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />
        
        <label className="txtinputA">Cedula</label>
        <input className="inpA"
        value={cedula}
        onChange={(e)=>setCedula(e.target.value)}
        />
        
        
        
        <label className="txtinputA">Celular</label>
        <input className="inpA"
        value={celular}
        onChange={(e)=>setCelular(e.target.value)}
        />
        
        <label className="txtinputA">Dirección</label>
        <input className="inpA"
        value={direccion}
        onChange={(e)=>setDireccion(e.target.value)}
        />
        
        
        
        <label className="txtinputA">Fecha nacimiento</label>
        <input className="inpA"
        value={nacimiento}
        onChange={(e)=>setNacimiento(e.target.value)}
        />
        
        
        <label className="txtinputA">Correo</label>
        <input className="inpA"
        value={correo}
        onChange={(e)=>setCorreo(e.target.value)}
        />
        
       
        <label className="txtinputA">Marca</label>
        <input className="inpA"
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        />
        </div>
        
      <br/><br/>
         <div className="contbtn">
         <input className="btn" type="button" onClick={eliminarDatos} value="Borrar" />
         </div>
         
      </form>
      <TextoAct mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha} nombre={nombre} cedula={cedula} 
      nacimiento={nacimiento} direccion={direccion} 
      celular={celular} correo={correo} marca={marca}/>
    </>
  );
};

export { FormAct };
