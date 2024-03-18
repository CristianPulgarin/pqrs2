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

      alert ('copiado con exito')
  };

  return (
    <>
    
    <div className="conteR" >
      <center>
      <h1 className="estado">Funcional</h1>
      </center>
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
          datos personales de {props.nombre}, nos permitimos comunicar que,<br/>
          en cumplimiento de nuestros deberes como Responsables del Tratamiento de los<br/> 
          datos personales, y el compromiso adquirido al momento de obtener la autorización,<br/>
          la Compañía se abstendrá de continuar ejecutando las finalidades para las cuales había <br/>
          capturado los datos personales, salvo en aquellos casos en que exista un deber legal o<br/> 
          contractual que requieran la permanencia de los datos personales en la base de datos allí.<br/>
          <br/>
          De esta manera damos respuesta a su consulta dentro de los términos del artículo 15 <br/>
          de la Ley 1581 de 2012.<br/><br/>
          Cabe mencionar que, la Compañía podrá garantizar la revocatoria de sus datos pasadas<br/>
          las 24 horas siguientes
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
