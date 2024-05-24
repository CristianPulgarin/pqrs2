import React, { useState } from "react";
import './FormSupresion.css'
import { TextSupresion } from "./TextSupresion";
const FormSupresion = (props) => {

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
    const [cedula,setCedula] = useState('');
    const [celular,setCelular] = useState('');
    const [email,setEmail] = useState('');
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
      setNombre("");
      setCedula("");
      setCelular("");
      setEmail("");

  };
    
  return (
    <>




      <form onSubmit={manejarSubmit} className="formularioRev">
        <div className="titS">Supresion de uno o varios datos</div>
      <div className="cont1S">
      <label className="txtinputS">Numero Caso</label>
        <input className="inpS"
        required
        value={caso}
        onChange={(e)=>setCaso(e.target.value)}
        />
        <br/>
        <label className="txtinputS">Cedula</label>
        <input className="inpS"
        required
        value={cedula}
        onChange={(e)=>setCedula(e.target.value)}
        />
        <br/>
        
        <label className="txtinputS">Celular</label>
        <input className="inpS"
        required
        value={celular}
        onChange={(e)=>setCelular(e.target.value)}
        />
        <br/>
        
        <label className="txtinputS">Email</label>
        <input className="inpS"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
      <label className="txtinputS">Fecha solicitud</label>
        <input className="inpS"
        required
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        />
      <br/>
        
        <label className="txtinputS">Nombre Completo</label>
        <input className="inpS"
        required
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />
        <br/>
        <label className="txtinputS">Nombre Marca</label>
        <input className="inpS"
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
      
      <TextSupresion mes={mesTexto} day={day} year={year} caso={caso} fecha={fecha} 
      nombre={nombre}  marca={marca} estado={props.estado} cedula={cedula} email={email}
      celular={celular} setEstado={props.setEstado}/>
    </>
  );
};

export { FormSupresion };
