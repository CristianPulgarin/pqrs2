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
      <div className="contS1">
      <label className="txtb">Ocultar nombre</label> {nom ? (<><div className="containerbtn"><button className="btn_activo" onClick={ocultarNombre} id="b" type="checkbox"></button></div></>) : <><div className="containerbtn"><button className="btn_inactivo" onClick={ocultarNombre} id="b" type="checkbox"></button></div></>} 
      <label className="txtb">Ocultar cedula</label> {ced ? (<><div className="containerbtn"><button className="btn_activo" onClick={ocultarCedula} id="c" type="checkbox"></button></div></>) : <><div className="containerbtn"><button className="btn_inactivo" onClick={ocultarCedula} id="c" type="checkbox"></button></div></>} 
      
      </div>
      <div className="contS2">
      <label className="txtb">Ocultar celular</label> {tel ? (<><div className="containerbtn"><button className="btn_activo" onClick={ocultarTelefono} id="b" type="checkbox"></button></div></>) : <><div className="containerbtn"><button className="btn_inactivo" onClick={ocultarTelefono} id="b" type="checkbox"></button></div></>} 
      <label className="txtb">Ocultar Correo</label> {cor ? (<><div className="containerbtn"><button className="btn_activo" onClick={ocultarCor} id="c" type="checkbox"></button></div></>) : <><div className="containerbtn"><button className="btn_inactivo" onClick={ocultarCor} id="c" type="checkbox"></button></div></>} 
      
      </div>
      </div>   
   <p className="textS" ref={textRef}> 

    Medellín, {props.day} de {props.mes} de {props.year}<br/><br/>
    Señor(a) {props.nombre}<br/><br/>
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
    {tel ? (<>Telefono: {props.celular} <br/> </>) : ''} 
    {cor ? (<>Email: {props.email} <br/><br/></>): ''}
    <br/>
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
