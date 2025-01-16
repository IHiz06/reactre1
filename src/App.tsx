// Escribo rfce para crear el componente
//import React from 'react'
//jsx es una extension de javascript que permite escribir html en javascript
import './App.css'
import MiHeader from './components/mi-header'
function App() {
  return (//Solo se debe retornar un solo elemento padre
    <>
      <MiHeader/>
      <h1>Hola Mundo</h1>
      <p>Hola soy un parrafo xD</p>
      <footer>
        <nav>
          <ul>Contacto</ul>
          <ul>Direccion</ul>
          <ul>Año</ul>
        </nav>
      </footer>
    </>
  );
}

export default App
