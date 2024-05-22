import React,{useRef, useState} from "react";
import './TextSupresion.css'

const TextSupresion = (props) => {
  const textRef = useRef(null);


  const [nom,setNom] = useState(true)
  const [ced,setCed] = useState(true)
  const [tel,setTel] = useState(true)
  const [cor,setCor] = useState(true)


  const ocultarNombre=()=>{
    setNom(!nom)
  }
  
  const ocultarCedula=()=>{
    setCed(!ced)
  }
  const ocultarTelefono=()=>{
    setTel(!tel)
  }
  const ocultarCor=()=>{
    setCor(!cor)
  }
  const handleCopy = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
       
        props.setEstado(true)
        setTimeout(()=>{
          props.setEstado(false)
        },"3000")



      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });

  };

  return (
    <>
   
    <div className="conteR" >
    <div className="botones">
      <div className="cont1">
      {nom ? (<></>) : <></>} <label className="txtb">Ocultar nombre <button className="btn_activo" onClick={ocultarNombre} id="b" type="checkbox"></button></label>
      <label className="txtb">Ocultar cedula<button className="btn_activo" onClick={ocultarCedula} id="b" type="checkbox"></button></label>
      </div>
      <div className="cont2">
      <label className="txtb">Ocultar Telefono<button className="btn_activo" onClick={ocultarTelefono} id="b" type="checkbox"></button>
        </label>
      <label className="txtb">Ocultar correo<button className="btn_activo" onClick={ocultarCor} id="b" type="checkbox"></button>
      </label>
      </div>
      </div>   
   <p className="textR" ref={textRef}> 

    Medellín, {props.day} de {props.mes} de {props.year}<br/><br/>
    Señora {props.nombre}<br/><br/>
    Titular de los datos

    Referencia: Radicado {props.caso}<br/>
    Respuesta: Supresion de uno o varios de sus datos personales<br/>
    <br/>
    Cordial saludo,
    <br/><br/>
    Conforme el reclamo efectuado por usted el pasado {props.fecha},
    y encontrándonos dentro del término estipulado en la Ley 1581 de 2012 para la atención
    de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera:
    <br/><br/>

    A partir de la fecha, la Compañía suprimirá los datos personales mencionados en la petición,
    quedando la siguiente información en nuestra base de datos:

    <br/>
    <br/>

    
    {nom  ? (<>Nombre completo:  {props.nombre}   <br></br></>) : ''}
    {ced ? (<>Cedula: {props.cedula} <br/> </>) : ''} 
    {tel ? (<>Telefono: {props.telefono} <br/> </>) : ''} 
    {cor ? (<>Email: {props.email} <br/><br/></>): ''}
          Cordialmente,<br/>
          {props.marca}
          <br/>
          Oficial de Cumplimiento de Datos Personales
</p>
<div className="contbtn">
<button className="btncopyR" onClick={handleCopy}>{props.estado ? 'Texto copiado' : 'Copiar texto'}</button>

</div>
      </div>
      <br/><br/>
    </>
  );
};

export {TextSupresion};
