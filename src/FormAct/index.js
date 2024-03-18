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
    const [genero,setGenero] = useState('')
    const [celular,setCelular] = useState('')
    const [correo,setCorreo] = useState('')
    const [marca,setMarca] = useState('')


    const manejarSubmit = (event) => {
      event.preventDefault();
      
      alert('Campos completados, puedes copiar');
    };
    
  return (
    <>
      <form onSubmit={manejarSubmit} className="formulario">
      <div className="tit">Actualización de datos personales</div>
        <div className="cont1">
      

      <label className="txtinput">Caso</label>
        <input className="inp"
        required
        value={caso}
        onChange={(e)=>setCaso(e.target.value)}
        />
      <label className="txtinput">Fecha solicitud</label>
        <input className="inp"
        //type="date"
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        />
        </div>
        <div className="cont1">
        <label className="txtinput">Nombre completo</label>
        <input className="inp"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />
        <label className="txtinput">Cedula</label>
        <input className="inp"
        value={cedula}
        onChange={(e)=>setCedula(e.target.value)}
        />
        </div>
        <div className="cont1">
        <label className="txtinput">Fecha nacimiento</label>
        <input className="inp"
        value={nacimiento}
        onChange={(e)=>setNacimiento(e.target.value)}
        />
        <label className="txtinput">Dirección</label>
        <input className="inp"
        value={direccion}
        onChange={(e)=>setDireccion(e.target.value)}
        />
        <label className="txtinput">Genero</label>
        <input className="inp"
        value={genero}
        onChange={(e)=>setGenero(e.target.value)}
        />
        </div>
        <div className="cont1">
        <label className="txtinput">Celular</label>
        <input className="inp"
        value={celular}
        onChange={(e)=>setCelular(e.target.value)}
        />
        <label className="txtinput">Correo</label>
        <input className="inp"
        value={correo}
        onChange={(e)=>setCorreo(e.target.value)}
        />
        
        <label className="txtinput">Marca</label>
        <input className="inp"
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        />
        
                </div>
         <div className="contbtn">
         <input className="btn" type="submit" value="Confirmar" />
         </div>
         
      </form>
      <TextoAct mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha} nombre={nombre} cedula={cedula} 
      nacimiento={nacimiento} direccion={direccion} genero={genero}
      celular={celular} correo={correo} marca={marca}/>
    </>
  );
};

export { FormAct };
