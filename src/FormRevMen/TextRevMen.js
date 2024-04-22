import React, { useRef } from "react";
import "./TextRevMen.css";

const TextRevMen = (props) => {
  const textRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });
    alert("Copiado con exito");
  };

  return (
    <>
      <div className="conteRM">
        
        <p className="textRM" ref={textRef}>
          Medellín, {props.day} de {props.mes} de {props.year}
          <br />
          <br />
          Señor(a) {props.nombre}
          <br />
          <br />
          Titular de los datos<br/>
          <br/>
          Referencia: Radicado {props.caso}<br/>
          Respuesta: Revocatoria de la autorización para tratamiento de datos 
          <br/><br/>
          Cordial saludo,<br/><br/>

          Conforme el reclamo efectuado por usted el pasado {props.fecha}, y encontrándonos
          dentro del término estipulado en la Ley 1581 de 2012 para la atención de reclamos,
          nos permitimos otorgarle una respuesta de la siguiente manera: <br/><br/>

          Queremos informarle que el requerimiento de Revocatoria de datos personales se procesó
          correctamente el día {props.fechapro} del presente año. La respuesta oficial fue enviada por medio
          del requerimiento {props.casopasado}. Si usted después de la fecha de la revocatoria
          siguió recibiendo algún tipo de comunicación de la marca informarnos por favor.<br/><br/>
          
          De esta manera damos respuesta a su consulta dentro de los términos del artículo
          15 de la Ley 1581 de 2012. <br/><br/>
          
          Cordialmente,
          <br/>
          {props.marca}
          <br/>
          Oficial de Cumplimiento de Datos Personales.
        </p>
        <div className="contbtnRM">
        <button className="btncopyRM" onClick={handleCopy}>
          Copiar texto
        </button>
        </div>
      </div>

      <br />
    </>
  );
};

export { TextRevMen };
