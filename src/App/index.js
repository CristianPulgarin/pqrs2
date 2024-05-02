
import './App.css';
// import { InicioSesion } from './InicioSesion';
import { Route, Routes} from 'react-router-dom';
import Cont from '../Cont';
import {FormAct} from '../FormAct'
import React, { useState } from 'react';
import { FormRev } from '../FormRev';
import { FormRevMen } from '../FormRevMen';
import { FormRepDe } from '../FormRepDe';
// import {InicioSesion} from '../InicioSesion'
function App() {

  const [estado, setEstado] = useState(false)
  document.title ="Formatos PQR"
  return (
    <>
  
{/* <InicioSesion/>  */}
        <Cont/>
        <Routes>
        
          
          
          <Route path="/Revocatoria" element={<FormRev estado={estado} setEstado={setEstado}/> } />
          <Route path="/RevMen" element={<FormRevMen estado={estado} setEstado={setEstado}/> } />
          <Route path="/RepDe" element={<FormRepDe estado={estado} setEstado={setEstado}/> } />
          <Route path="/Actualizar" element={<FormAct estado={estado} setEstado={setEstado}/> } />
          
        </Routes>  
      
      

    </>
  );
}

export default App;
