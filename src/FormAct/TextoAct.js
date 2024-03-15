import React, {useRef} from "react";
import './TextoAct.css'


const TextoAct = (props) => {

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
    <div className="conteA" >
   <p className="textA" ref={textRef}> 
   Medellín, {props.day} de {props.mes} de {props.year} <br/>
   <br/>
Señor(a) {props.nombre}<br/>
<br/>
Titular de los datos<br/>
<br/>
Referencia: Radicado {props.caso}<br/>
Respuesta: Actualización de uno o varios de sus datos personales
<br/><br/>
Cordial saludo, <br/><br/>
Conforme el reclamo efectuado por usted el pasado {props.fecha}, y encontrándonos dentro del término estipulado <br/>
en la Ley 1581 de 2012 para la atención de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera:<br/>
<br/>

A partir de la fecha, la Compañía actualizará sus datos personales, quedando la siguiente
información en nuestra base de datos:<br/><br/>
Nombre completo: {props.nombre}<br/>
Cédula: {props.cedula} <br/>
Fecha de nacimiento: {props.nacimiento}<br/>
Dirección: {props.direccion}<br/>
Numero teléfono celular: {props.celular}<br/>
Correo electrónico: {props.correo}<br/>

<br/>
Cordialmente,
<br/>
{props.marca}
<br/>
Oficial de Cumplimiento de Datos Personales
</p>
<button className="btncopyA" onClick={handleCopy}>Copiar texto</button>
      </div>
      
    <br/>
   
    </>
  );
};

export {TextoAct};
