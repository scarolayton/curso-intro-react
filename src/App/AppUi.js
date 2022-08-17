import React from "react";
import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { TodoItem } from "../todoItem";
import {CreateTodoButton} from '../createToDoButton'
import {TodoContext} from '../todoContext'
import {Modal} from '../modal'
import { TodoForm } from "../todoForm";
function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return(
  <React.Fragment>
    <TodoCounter 
    />
  
  <TodoSearch
   />

  
    <TodoList> 
      {error && <p>Desesperate, hubo un error</p>}
      {loading && <p>Tranquilo, estamos cargando</p>}
      {(!loading && searchedTodos.length) && <p>tamos ready</p>}
      {searchedTodos.map(todo => (
         <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}onDelete={() => deleteTodo(todo.text)}/>
      ))}
    </TodoList> 
    
    {!!openModal && (
      <Modal>

        <TodoForm></TodoForm>
      </Modal>
    )}
  
    <CreateTodoButton setOpenModal={setOpenModal}> 

    </CreateTodoButton>
  
    </React.Fragment>);
}

export {AppUi}