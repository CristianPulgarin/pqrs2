
import './App.css';
// import { InicioSesion } from './InicioSesion';
import { Route, Routes} from 'react-router-dom';
import Cont from '../Cont';
import {FormAct} from '../FormAct'
import React from 'react';
import { FormRev } from '../FormRev';
import { FormRevMen } from '../FormRevMen';
function App() {


  return (
    <>
       
  
{/* <InicioSesion/> */}
       <Cont/>
        <Routes>
        
          
          
          <Route path="/Revocatoria" element={<FormRev/> } />
          <Route path="/RevMen" element={<FormRevMen/> } />
          <Route path="/Actualizar" element={<FormAct/> } />
          
        </Routes>
      
      

    </>
  );
}

export default App;
