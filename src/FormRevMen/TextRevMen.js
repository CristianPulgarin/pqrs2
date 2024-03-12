import React from "react";
import './TextRevMen.css'

const TextRevMen = (props) => {

  
  //   
  // 
  // 
  
  // 
  // Cordialmente,
  // Esprit
  // Oficial de Cumplimiento de Datos Personales.

  return (
    <>
    
    <div className="conte">
        <br/><label className="fecha">Medellín, {props.day} de {props.mes} de {props.year} <br/><br/> </label>    
        <div className="encabezado">
      Señor(a) {props.nombre} <br/><br/>
      </div>
      <label className="encabezado">Titular de los datos<br/><br/></label>
      <label className="encabezado">Referencia: Radicado {props.caso} <br/></label>
      <label className="encabezado">Respuesta: Revocatoria de la autorización para tratamiento de datos </label>
      <br/><br/><label className="text">Cordial saludo, Conforme el reclamo efectuado por usted el pasado {props.fecha},<label/> <br/>
      <label className="text">y encontrándonos dentro del término estipulado en la Ley 1581 de 2012 para la atención</label><br/>
      <label className="text"> de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera: </label>

      <br/><br/><label className="text">Queremos informarle que el requerimiento de Revocatoria de datos personales se procesó correctamente   
      <br/><label className="text"><strong>el día 18 de agosto del presente año</strong>. La respuesta oficial fue enviada por medio del requerimiento: {props.caso}.</label>
      <br/><label className="text">Si usted después de la fecha de la revocatoria siguió recibiendo algún tipo de comunicación de la marca </label>
      <br/><label className="text">informarnos por favor.</label>

      </label>
      
      <br/><br/><label className="text">De esta manera damos respuesta a su consulta dentro de los términos del artículo 15 de la Ley 1581 de 2012.</label>
      
      
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

export {TextRevMen};
