import React from "react";
import { useLocalStorage } from "./localStorage";
const TodoContext = React.createContext();

function TodoProvider(props)  {

  const {item: todos, saveItem, loading, error} = useLocalStorage('TODOS_V1', []);
  const [openModal, setOpenModal] = React.useState(false);
  const [searhValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searhValue.length >=1) {
    searchedTodos = todos;
    
  }
  else {
    searchedTodos = todos.filter(todo => {

    const todoText = todo.text.toLowerCase();
    const searchText = searhValue.toLowerCase();
     return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true; 
    saveItem(newTodos);

  }
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })
    saveItem(newTodos);

  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1); 
    saveItem(newTodos)

  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searhValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}


export {TodoContext, TodoProvider}