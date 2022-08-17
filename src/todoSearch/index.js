import React from "react";
import { TodoContext } from "../todoContext";
import './todoSearch.css'


function TodoSearch() {
  const {searhValue, setSearchValue} = React.useContext(TodoContext)
  const onChangeValueSearh = (event) => {
    setSearchValue(event.target.value);
  }
  return(
    <input  value={searhValue} onChange={onChangeValueSearh} className="TodoSearch" placeholder="cebolla">
    </input>
    
  );
}

export {TodoSearch};