import React, { useRef } from "react";
import "./TextRepDe.css";

const TextRepDe = (props) => {
  const textRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        props.setEstado(true)

        setTimeout(()=>{
          props.setEstado(false)
        }, "3000")
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });
  };

  return (
    <>
      <div className="conteRepDe">
       
        <p className="textRepDe" ref={textRef}>
          Medellín, {props.day} de {props.mes} de {props.year} 
          
          <br/>
          Señora {props.nombre}<br/><br/>

          Titular de los datos<br/><br/>
          Referencia:  Radicado {props.caso}
          <br/>
          Respuesta Revocatoria de la autorización para tratamiento de datos <br/><br/>

          Cordial saludo,<br/><br/>
          Conforme el reclamo efectuado por usted el pasado {props.fecha}, y encontrándonos dentro
          del término estipulado en la Ley 1581 de 2012 para la atención de reclamos, nos permitimos
           otorgarle una respuesta de la siguiente manera:<br/><br/>

          Queremos informarle que el requerimiento de Revocatoria de datos personales se procesó
          correctamente el día {props.fechapro} del presente año, la respuesta oficial fue enviada por medio 
          de los requerimientos {props.casopasado}. Cabe mencionar que, la Compañía podrá garantizar la revocatoria
          de sus datos pasadas las 24 horas siguientes a partir del momento que reciba esta comunicación.<br/><br/> 
          
          De esta manera damos respuesta a su consulta dentro de los términos del artículo 15 de la Ley 1581 de
          2012.<br/> 
          <br/>
          Cordialmente,
          <br/>
          {props.marca}<br/> Oficial de Cumplimiento de Datos
          Personales.
        </p>
        <button className="btncopyRepDe" onClick={handleCopy}>
         {props.estado ? 'Texto copiado' : 'Copiar texto'}
        </button>
      </div>

      <br />
    </>
  );
};

export { TextRepDe };
