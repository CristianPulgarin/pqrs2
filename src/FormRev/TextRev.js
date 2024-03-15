import React, {useRef, useState, useEffect} from "react";
import './TextRev.css'

const TextRev = (props) => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const newText = `Medellín, ${props.day} de ${props.mes} de ${props.year}
    
Señor(a) ${props.nombre}

Titular de los datos

Referencia: Radicado ${props.caso}
Respuesta: Revocatoria de la autorización para tratamiento de datos

Cordial saludo,

Conforme el reclamo efectuado por usted el pasado ,
y encontrándonos dentro del término estipulado en la Ley 1581 de 2012 para la atención
de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera:\n\nDe acuerdo con la solicitud de revocar la autorización para que la Compañía trate los\ndatos personales de ${props.nombre}, nos permitimos comunicar que,\nen cumplimiento de nuestros deberes como Responsables del Tratamiento de los datos\npersonales, y el compromiso adquirido al momento de obtener la autorización,\nla Compañía se abstendrá de continuar ejecutando las finalidades para las cuales había\ncapturado los datos personales, salvo en aquellos casos en que exista un deber legal o\ncontractual que requieran la permanencia de los datos personales en la base de datos allí.\n\nDe esta manera damos respuesta a su consulta dentro de los términos del artículo 15 de la Ley 1581 de 2012.\nCabe mencionar que, la Compañía podrá garantizar la revocatoria de sus datos pasadas las 24 horas siguientes\na partir del momento que reciba esta comunicación.\n\nCordialmente,\n\nOficial de Cumplimiento de Datos Personales`;
    setTextValue(newText);
  }, [props]);

  const textRef = useRef(null);

  const copyText = () => {
    textRef.current.select();
    document.execCommand('copy');
  };

  return (
    <>
      <div className="conteRM">
        <textarea
          ref={textRef}
          className="textRM"
          readOnly
          value={textValue}
        />
        <button className="btnRM" onClick={copyText}>Copiar texto</button>
      </div>
    </>
  );
};

export {TextRev};
