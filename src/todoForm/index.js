import React from "react";
import { TodoContext } from "../todoContext";
import './todoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  const onChange = (e) => {
    const text = e.target.value;
    setNewTodoValue(text);
   }
   const onCancel = () => {
    setOpenModal(false);
   }
   const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
   }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Cortar la cebolla para el almuerzo"/>
      <div className="TodoForm-buttonContainer">
      <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel} type='button'>Cancelar</button>
      <button className="TodoForm-button TodoForm-button--add"  type='submit'>Añadir</button>
    </div>
    </form>

  )
}

export {TodoForm}