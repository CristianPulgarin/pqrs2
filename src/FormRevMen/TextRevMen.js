import React, {useRef} from "react";
import './TextRevMen.css'

const TextRevMen = (props) => {

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
      alert('Copiado con exito')
  };



  return (
    <>
    
    <div className="conteRM" >
      <center><h1 >Aun no funcional</h1></center>
   <p className="textRM" ref={textRef}> 
   Medellín, {props.day} de {props.mes} de {props.year}<br/>
   <br/>
Señor(a) {props.nombre}<br/>
<br/>
Titular de los datos
<br/>
Referencia: Radicado 
Respuesta: Revocatoria de la autorización para tratamiento de datos
<br/><br/>
Cordial saludo,<br/><br/> 
Conforme el reclamo efectuado por usted el pasado {props.fecha}, y encontrándonos dentro del término<br/>
estipulado en la Ley 1581 de 2012 para la atención de reclamos, nos permitimos otorgarle una respuesta<br/> 
de la siguiente manera:<br/><br/>

De acuerdo con la solicitud de revocar la autorización para que la Compañía trate los datos <br/>
personales de {props.nombre}, nos permitimos comunicar que, en <br/>
cumplimiento de nuestros deberes como Responsables del Tratamiento de los datos personales,<br/>
y el compromiso adquirido al momento de obtener la autorización, la Compañía se abstendrá <br/>
de continuar ejecutando las finalidades para las cuales había capturado los datos personales, <br/>
salvo en aquellos casos en que exista un deber legal o contractual que requieran la permanencia <br/>
de los datos personales en la base de datos allí.<br/><br/>


De esta manera damos respuesta a su consulta dentro de los términos del artículo 15 de la Ley 1581 de 2012.
<br/>
Cabe mencionar que, la Compañía podrá garantizar la revocatoria de sus datos pasadas las 24 horas siguientes
a partir del momento que reciba esta comunicación.

Cordialmente,

Oficial de Cumplimiento de Datos Personales
</p>
<button className="btncopyRM" onClick={handleCopy}>Copiar texto</button>
      </div>
      
    <br/>
    </>
  );
};

export {TextRevMen};
