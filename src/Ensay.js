import React  from 'react'
import './txt.css'
const Ensay = () => {


    const texto = `Medellín, 14 de marzo de 2024

Señor(a)

Titular de los datos

Referencia: Radicado
Respuesta: Revocatoria de la autorización para tratamiento de datos

Cordial saludo, Conforme el reclamo efectuado por usted el pasado ,
y encontrándonos dentro del término estipulado en la Ley 1581 de 2012 para la atención
de reclamos, nos permitimos otorgarle una respuesta de la siguiente manera:

De acuerdo con la solicitud de revocar la autorización para que la Compañía trate los
datos personales de ,nos permitimos comunicar que,
en cumplimiento de nuestros deberes como Responsables del Tratamiento de los datos
personales, y el compromiso adquirido al momento de obtener la autorización,
la Compañía se abstendrá de continuar ejecutando las finalidades para las cuales había
capturado los datos personales, salvo en aquellos casos en que exista un deber legal o
contractual que requieran la permanencia de los datos personales en la base de datos allí.

De esta manera damos respuesta a su consulta dentro de los términos del artículo 15 de la Ley 1581 de 2012.
Cabe mencionar que, la Compañía podrá garantizar la revocatoria de sus datos pasadas las 24 horas siguientes
a partir del momento que reciba esta comunicación.

Cordialmente,

Oficial de Cumplimiento de Datos Personales`;

  return (
    <div className='text'>
       <textarea rows="10" cols="50" defaultValue={texto} readOnly />
    </div>)
}

export {Ensay}
