import React from "react";
import './TextRev.css'

const TextRev = (props) => {

    

  return (
    <>
    
    <div className="conte">
        <br/><label className="fecha">Medellín, {props.day} de {props.mes} de {props.year} <br/><br/> </label>    
        <label className="encabezado">
      Señor(a) {props.nombre} <br/><br/>
      </label>
      <label className="encabezado">Titular de los datos<br/><br/></label>
      <label className="encabezado">Referencia: Radicado {props.caso} <br/></label>
      <label className="encabezado">Respuesta: Revocatoria de la autorización para tratamiento de datos 
      </label>
      <br/><br/><label className="text">Cordial saludo, Conforme el reclamo efectuado por usted el pasado {props.fecha},<label/> <br/>
      <label className="text">y encontrándonos dentro del término estipulado en la Ley 1581 de 2012 para la atención</label><br/>
      <label className="text"> de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera: </label>

      <br/><br/><label className="text">De acuerdo con la solicitud de revocar la autorización para que la Compañía trate los  
      <br/><label className="text">datos personales de {props.nombre},</label>
      <label className="text">nos permitimos comunicar que,</label>
      <br/><label className="text">en cumplimiento de nuestros deberes como Responsables del Tratamiento de los datos </label>
      <br/><label className="text">personales, y el compromiso adquirido al momento de obtener la autorización,</label>
      <br/><label className="text">la Compañía se abstendrá de continuar ejecutando las finalidades para las cuales había</label>
      <br/><label className="text">capturado los datos personales, salvo en aquellos casos en que exista un deber legal o </label>
      <br/><label className="text">contractual que requieran la permanencia de los datos personales en la base de datos allí.</label>
      <br/><br/></label> 
      <label className="text">De esta manera damos respuesta a su consulta dentro de los términos del artículo 15 de la Ley 1581 de 2012.</label>
      <br/><label className="text">Cabe mencionar que, la Compañía podrá garantizar la revocatoria de sus datos pasadas las 24 horas siguientes</label>
      <br/><label className="text">a partir del momento que reciba esta comunicación.</label>
      
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

export {TextRev};
