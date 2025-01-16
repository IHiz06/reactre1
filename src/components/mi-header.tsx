//rafce -> react arrow function component export (Componente funcional de React)
import React from 'react'

const MiHeader = () => {
  return (
    <header>
      <nav>
        <ul>Elemento 1</ul>
        <ul>Elemento 2</ul>
        <ul>Elemento 3</ul>
      </nav>
    </header>
  )
}

// function BarraNavegacion({children}) {
//   return (
//     <nav>
//       {children}
//       <ul>Elemento 1</ul>
//       <ul>Elemento 2</ul>
//       <ul>Elemento 3</ul>
//     </nav>
//   )
// }
export default MiHeader
