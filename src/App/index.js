// import './App.css';
import React from "react";
import { AppUi } from "./AppUi";
import {TodoProvider} from '../todoContext'

// const defaultTodos = [
//   { text:'cortar cebolla',
//     completed: true,
//   },
//   { text:'Pelar tomates',
//     completed: false,
//   },
//   { text:'trabajar',
//     completed: false,
//   }
// ]


function App(props) {

  return (
    <TodoProvider>
    <AppUi/>
    </TodoProvider>
  );
}

export default App;
