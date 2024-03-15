import React,{useRef} from "react";
import './TextRev.css'

const TextRev = (props) => {
  const textRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });
  };

  return (
    <>
    
    <div className="conteR" >
   <p className="textR" ref={textRef}> 
   Medellín, {props.day} de {props.mes} de {props.year}<br/>
   <br/>
          Señor(a) {props.nombre}<br/>
          <br/>
          Titular de los datos<br/>
          <br/>
          Referencia: Radicado {props.caso}<br/>
          Respuesta: Revocatoria de la autorización para tratamiento de datos<br/>
          <br/>
          Cordial saludo,
          <br/><br/>
          Conforme el reclamo efectuado por usted el pasado {props.fecha},<br/>
          y encontrándonos dentro del término estipulado en la Ley 1581 de 2012 para la atención<br/>
          de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera:<br/>
          <br/>
          De acuerdo con la solicitud de revocar la autorización para que la Compañía trate los<br/>
          datos personales de {props.nombre}, nos permitimos comunicar que, en cumplimiento de nuestros deberes <br/>
          como Responsables del Tratamiento de los datos personales, y el compromiso adquirido<br/>
           al momento de obtener la autorización, la Compañía se abstendrá de continuar ejecutando<br/>
           las finalidades para las cuales había<br/>
          capturado los datos personales, salvo en aquellos casos en que exista un deber legal o<br/>
          contractual que requieran la permanencia de los datos personales en la base de datos allí.<br/>
          <br/>
          De esta manera damos respuesta a su consulta dentro de los términos del artículo 15 de la Ley 1581 de 2012.<br/>
          Cabe mencionar que, la Compañía podrá garantizar la revocatoria de sus datos pasadas las 24 horas siguientes<br/>
          a partir del momento que reciba esta comunicación.<br/>
          <br/>
          Cordialmente,<br/>
          {props.marca}
          <br/>
          Oficial de Cumplimiento de Datos Personales
</p>
<button className="btncopyR" onClick={handleCopy}>Copiar texto</button>
      </div>
      
    <br/>
    </>
  );
};

export {TextRev};
