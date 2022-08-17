import React from "react";
import './createToDoButton.css'
import {TodoContext} from '../todoContext'
function CreateTodoButton(props) {
  const {setOpenModal,openModal} = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(!openModal)
  };
  return(<button className="CreateTodoButton" onClick={onClickButton} >+</button>);
}

export {CreateTodoButton};