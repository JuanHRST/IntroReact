import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import { NombreCompleto as Name} from './components/nombrecompleto';
import  Mascota from './components/mascota'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Name nombre='Sergio' age={39} show={true} />
    <Mascota name="Solovino" age = {8} show={true} />
    <Name nombre='Pax' age={31} show={false} />
    <Name nombre='Luis' age={24} show={false}/>
  </React.StrictMode>
);

