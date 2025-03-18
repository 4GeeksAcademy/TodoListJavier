import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components


import TodoList from './components/TodoList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>,
)


// Las tareas se agregan cuando el usuario presiona enter en el teclado.
// El ícono de eliminar solo se muestra cuando pasas el ratón encima de la tarea (hover).
// El usuario puede agregar tantas tareas como desee.
// Cuando no haya tareas pendientes, la lista debería decir "No hay tareas, añadir tareas"
// No hay forma de actualizar una tarea, el usuario tendrá que eliminarla y crearla de nuevo