import React from "react";
import './todoList.css'
function TodoList(props) {
  return(
    <ul>
       {props.children}
    </ul>

  )
}

export {TodoList};