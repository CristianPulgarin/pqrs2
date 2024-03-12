import React from "react";
import './TextoAct.css'


const TextoAct = (props) => {

    

  return (
    <>
    
    <div className="conte">
        <br/><label className="fecha">Medellín, {props.day} de {props.mes} de {props.year} <br/><br/> </label>    
        <label className="encabezado">
      Señor(a) {props.nombre} <br/><br/>
      </label>
      <label className="encabezado">Titular de los datos<br/><br/></label>
      <label className="encabezado">Referencia: Radicado {props.caso} <br/></label>
      <label className="encabezado">Respuesta: Actualización de uno o varios de sus datos personales 
      </label>
      <br/><br/><label className="text">Cordial saludo, Conforme el reclamo efectuado por usted el pasado {props.fecha},<label/> <br/>
      <label className="text">y encontrándonos dentro del término estipulado en la Ley 1581 de 2012 para la atención</label><br/>
      <label className="text"> de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera: </label>
      <br/><br/><label className="text">A partir de la fecha, la Compañía actualizará sus datos personales, quedando la siguiente<br/></label> 
      <label className="text">información en nuestra base de datos: </label>
      </label>
      <br/>
      <label className="datos">
      Nombre completo: <label className="valor">{props.nombre}</label> <br/>
      Cédula <label className="valor">{props.cedula}</label> <br/>
      Fecha de nacimiento:  <label className="valor">{props.nacimiento}</label> <br/>
      Dirección: <label className="valor">{props.direccion}</label> <br/>
      Numero teléfono celular: <label className="valor">{props.celular}</label><br/>
      Correo electrónico: <label className="valor">{props.correo}</label><br/>
      </label>
      <br/><br/><label className="final">
      Cordialmente,  
      </label>
      <br/><br/><label className="final">{props.marca}</label> 
      <br/><br/><label className="final">Oficial de Cumplimiento de Datos Personales</label>
      
      </div>
    </>
  );
};

export {TextoAct};
